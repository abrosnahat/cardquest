import { useMutation } from 'react-query';
import { generateAuthToken } from '../services/user';
import { getAuthToken } from '../utils/user';

export const useAuthTokenMutation = () => {
  const tokenMutation = useMutation(generateAuthToken);

  return {
    ...tokenMutation,
    token: getAuthToken() || tokenMutation.data?.token,
  };
};
