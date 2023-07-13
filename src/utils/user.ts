import * as ls from 'local-storage';

export const getAuthToken = () => ls.get<string>('authToken');
export const setAuthToken = (token: string) => {
  ls.set('authToken', token);
};
export const removeAuthToken = () => {
  ls.remove('authToken');
};
