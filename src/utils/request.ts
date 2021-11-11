import ppo from 'ppo';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface IAxiosInstance extends AxiosInstance {
  request<T = any>(config: AxiosRequestConfig): Promise<T>;
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

// todo retry
export const request: IAxiosInstance = axios.create({
  timeout: 5000,
  withCredentials: true,
});

request.interceptors.response.use(
  (response) => {
    const data = ppo.toJSON(response.data);
    if (data && data.code === 0) {
      return data;
    }

    return Promise.reject(data);
  },
  async (e) => Promise.reject(e),
);
