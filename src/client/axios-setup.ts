/**
 * Axios setup and configuration for API client
 * Handles response transformation and debugging
 */
import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

let axiosInstance: AxiosInstance | null = null;

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

    // Response interceptor for debugging
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
      (error) => {
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

