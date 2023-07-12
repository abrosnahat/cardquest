export interface UserResponse {
  active: boolean;
  confirmation_code: string;
  confirmation_code_expires_at: string;
  confirmed: boolean;
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

export interface LoginUserData {
  email: string;
  password: string;
}

export interface AuthTokenResponse {
  token: string;
}
