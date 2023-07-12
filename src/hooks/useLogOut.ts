import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { removeAuthToken } from '../utils/user';

export const useLogOut = (redirectUrl = '/') => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return () => {
    removeAuthToken();
    queryClient.clear();
    navigate(redirectUrl);
  };
};
