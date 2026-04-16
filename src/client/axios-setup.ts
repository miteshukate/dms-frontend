/**
 * Axios setup and configuration for API client
 * Handles response transformation, debugging, and token refresh
 */
import axios from 'axios';
import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

let axiosInstance: AxiosInstance | null = null;
let isRefreshing = false;
let failedQueue: Array<{ resolve: (token: string) => void; reject: (error: Error) => void }> = [];

const processQueue = (error: Error | null, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else if (token) {
      prom.resolve(token);
    }
  });

  isRefreshing = false;
  failedQueue = [];
};

/**
 * Get or create a configured axios instance
 */
export function getAxiosInstance(): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = axios.create({
      baseURL: '/v1',
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor to add auth token
    axiosInstance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor for debugging and token refresh
    axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        console.log('Axios Response Interceptor:', {
          status: response.status,
          statusText: response.statusText,
          dataType: typeof response.data,
          dataKeys: Array.isArray(response.data)
            ? 'array'
            : typeof response.data === 'object'
              ? Object.keys(response.data)
              : 'not an object',
          data: response.data,
        });

        // If data is a string, parse it
        if (typeof response.data === 'string') {
          console.warn('Response data is a string, attempting to parse...');
          try {
            response.data = JSON.parse(response.data);
            console.log('Successfully parsed response:', response.data);
          } catch (e) {
            console.error('Failed to parse response as JSON:', e);
          }
        }

        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as AxiosError['config'] & { _retry?: boolean };

        // Handle 401 - Token expired or invalid
        if (error.response?.status === 401 && !originalRequest?._retry) {
          if (isRefreshing) {
            return new Promise<AxiosResponse>((resolve, reject) => {
              failedQueue.push({
                resolve: (token) => {
                  if (originalRequest?.headers) {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                  }
                  resolve(axiosInstance!(originalRequest) as unknown as AxiosResponse);
                },
                reject,
              });
            });
          }

          if (originalRequest) {
            originalRequest._retry = true;
          }
          isRefreshing = true;

          try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
              const error = new Error('No refresh token available');
              processQueue(error, null);
              throw error;
            }

            // Call refresh token endpoint directly
            const response = await axios.post('/v1/auth/refresh', {
              refreshToken,
            });

            const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;

            localStorage.setItem('accessToken', newAccessToken);
            localStorage.setItem('refreshToken', newRefreshToken);

            if (axiosInstance && originalRequest?.headers) {
              axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
              originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            }

            processQueue(null, newAccessToken);
            return axiosInstance!(originalRequest) as unknown as AxiosResponse;
          } catch (err) {
            const error = err instanceof Error ? err : new Error('Token refresh failed');
            processQueue(error, null);
            // Clear auth and redirect to login
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            window.location.href = '/login';
            return Promise.reject(error);
          }
        }

        console.error('Axios Error:', error);
        return Promise.reject(error);
      }
    );
  }

  return axiosInstance;
}

/**
 * Reset the axios instance (useful for testing)
 */
export function resetAxiosInstance(): void {
  axiosInstance = null;
}

