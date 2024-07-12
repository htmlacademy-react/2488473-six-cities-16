import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { AXIOS_SETTINGS } from '../const';
import { getToken } from './token';


export function createApi (): AxiosInstance {
  const api = axios.create(AXIOS_SETTINGS);

  api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;
  });

  return api;
}
