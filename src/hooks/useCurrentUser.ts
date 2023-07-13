import { PAGES_CONFIG } from '../constants/pages';
import { getUser } from '../services/user';
import { ReactQueryOptions } from '../types/api';
import { getAuthToken } from '../utils/user';
import { useLogOut } from './useLogOut';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

export const useCurrentUser = (params?: ReactQueryOptions) => {
  const { queryOptions } = params || {};
  const logOut = useLogOut(PAGES_CONFIG.login.route);
  const currentUser = useQuery(
    [CURRENT_USER_QUERY_KEY, getAuthToken()],
    async () => {
      if (!getAuthToken()) return;

      return getUser();
    },
    {
      onError: async (error: AxiosError) => {
        const isUnauthorize = error?.response?.status === 401;

        if (isUnauthorize && getAuthToken()) {
          logOut();
        }
      },
      // onSuccess: (data) => {
      //   if (!data?.locale || data?.locale === i18n.language) return;

      //   /**
      //    * @Note: You need to wait for a case when authorization occurs from a client with a different locale.
      //    * We need to let the application perform a redirect after login, 300 milliseconds to be sure
      //    */
      //   setTimeout(() => changeLang(data?.locale), 300);
      // },
      ...queryOptions,
    }
  );

  return {
    ...currentUser,
  };
};

export const CURRENT_USER_QUERY_KEY = 'currentUser';

export type CurrentUserHook = ReturnType<typeof useCurrentUser>;
