import { AuthTokenResponse, LoginUserData, UserResponse } from '../types/user';
import { api } from '../utils/api';

export const getUser = async () => {
  const { data } = await api.get<UserResponse>(`/user/profile`);

  return data;
};

export const generateAuthToken = async (user: LoginUserData) => {
  const { data } = await api.post<AuthTokenResponse>('/auth', user);

  console.log('data', data);

  return data;
};
