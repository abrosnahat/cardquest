import axios from 'axios';

export const API_HEADERS = {
  Accept: 'application/json',
  'Content-type': 'application/json',
};

export const api = axios.create({
  baseURL: 'https://qdiyxgf-app.apms.io/api',
  headers: API_HEADERS,
});
