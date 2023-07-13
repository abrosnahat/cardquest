export interface User {
  active: true;
  balance: number;
  confirmation_code: string;
  confirmation_code_expires_at: string;
  confirmed: true;
  created_at: string;
  deleted_at: string;
  description: string;
  first_name: string;
  id: number;
  last_name: string;
  login: string;
  password: string;
  updated_at: string;
}

export interface UserResponse {
  user: User;
}

export interface LoginUserData {
  login: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {};
}

export interface RegistrationUserData {
  login: string;
  password: string;
}

export interface RegistrationResponse {
  token: string;
  user: {};
}
