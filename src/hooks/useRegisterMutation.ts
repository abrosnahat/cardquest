import { useMutation } from 'react-query';
import { registerUser } from '../services/user';

export const useRegisterMutation = () => {
  const registerMutation = useMutation(registerUser);

  return {
    ...registerMutation,
  };
};
