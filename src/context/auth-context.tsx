import { useState, useEffect, type ReactNode } from 'react';
import { AuthApi, Configuration } from '@/client';
import type { UserResponse } from '@/client/models';
import { AuthContext } from './auth-context-def';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth from localStorage on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const savedAccessToken = localStorage.getItem('accessToken');
        const savedRefreshToken = localStorage.getItem('refreshToken');
        const savedUser = localStorage.getItem('user');

        if (savedAccessToken && savedRefreshToken) {
          setAccessToken(savedAccessToken);
          setRefreshToken(savedRefreshToken);
          if (savedUser) {
            setUser(JSON.parse(savedUser));
          }

          // Verify token is still valid by calling getMe
          const config = new Configuration({
            accessToken: savedAccessToken,
            basePath: '/v1',
          });
          const authApi = new AuthApi(config);
          const response = await authApi.getMe();
          setUser(response.data);
        }
      } catch (error) {
        console.error('Failed to verify auth:', error);
        // Clear auth if verification fails
        clearAuth();
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const clearAuth = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  };

  const login = async (email: string, password: string, tenantId?: string) => {
    try {
      setIsLoading(true);
      const authApi = new AuthApi(new Configuration({ basePath: '/v1' }));
      const response = await authApi.login({
        email,
        password,
        tenantId,
      });

      const { accessToken: newAccessToken, refreshToken: newRefreshToken, user: newUser } = response.data;

      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);
      setUser(newUser || null);

      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      if (newUser) {
        localStorage.setItem('user', JSON.stringify(newUser));
      }
    } catch (error) {
      console.error('Login failed:', error);
      clearAuth();
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (accessToken && refreshToken) {
        const config = new Configuration({
          accessToken,
          basePath: '/v1',
        });
        const authApi = new AuthApi(config);
        await authApi.logout({ refreshToken });
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      clearAuth();
    }
  };

  const refreshAccessToken = async (currentRefreshToken: string) => {
    try {
      const authApi = new AuthApi(new Configuration({ basePath: '/v1' }));
      const response = await authApi.refreshToken({
        refreshToken: currentRefreshToken,
      });

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;

      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);

      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
    } catch (error) {
      console.error('Token refresh failed:', error);
      clearAuth();
      throw new Error('Token refresh failed');
    }
  };

  const verifyAuth = async () => {
    try {
      if (!accessToken) {
        clearAuth();
        return;
      }

      const config = new Configuration({
        accessToken,
        basePath: '/v1',
      });
      const authApi = new AuthApi(config);
      const response = await authApi.getMe();
      setUser(response.data);
    } catch (error) {
      console.error('Auth verification failed:', error);
      clearAuth();
      throw new Error('Auth verification failed');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        refreshToken,
        isAuthenticated: !!accessToken && !!user,
        isLoading,
        login,
        logout,
        refreshAccessToken,
        verifyAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}




