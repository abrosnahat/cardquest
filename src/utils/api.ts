import axios, { AxiosRequestConfig } from 'axios';
import { getAuthToken } from './user';

export const successRequestInterceptor = (config: any) => {
  if (!config.headers) config.headers = {};

  const authToken = getAuthToken();

  if (authToken) {
    config.headers['Authorization'] = `Bearer ${authToken}`;
  }

  return config;
};

export const API_HEADERS = {
  Accept: 'application/json',
  'Content-type': 'application/json',
};

export const api = axios.create({
  baseURL: 'https://lbdsjcx-app.apms.io/api',
  headers: API_HEADERS,
});

api.interceptors.request.use(successRequestInterceptor);
