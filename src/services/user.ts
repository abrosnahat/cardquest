import { IDType } from '../types/api';
import {
  AuthResponse,
  LoginUserData,
  RegistrationResponse,
  RegistrationUserData,
  UserResponse,
} from '../types/user';
import { api } from '../utils/api';

export const getUser = async () => {
  const { data } = await api.get<UserResponse>(`/user/profile/`);

  return data.user;
};

export const generateAuthToken = async (user: LoginUserData) => {
  const { data } = await api.post<AuthResponse>('/auth/', user);

  console.log('data', data);

  return data;
};

export const registerUser = async (user: RegistrationUserData) => {
  const { data } = await api.post<RegistrationResponse>('/register/', user);

  return data;
};
