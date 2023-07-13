import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from './useCurrentUser';
import { PAGES_CONFIG } from '../constants/pages';
import { setAuthToken } from '../utils/user';

export const useLoginRoleRedirect = () => {
  const [hasAuthToken, setHasAuthToken] = useState(false);
  const navigate = useNavigate();
  const currentUser = useCurrentUser();

  useEffect(() => {
    if (!currentUser.data || !hasAuthToken) return;

    navigate(PAGES_CONFIG.tasks.route);
  }, [currentUser.data, hasAuthToken]);

  const onToken = (token: string) => {
    setAuthToken(token);
    setHasAuthToken(true);
  };

  return {
    onToken,
    isLoading: currentUser.isLoading,
  };
};
