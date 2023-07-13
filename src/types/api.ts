import type { QueryObserverOptions } from 'react-query';

export interface ReactQueryOptions {
  queryOptions?: {
    staleTime?: QueryObserverOptions['staleTime'];
    enabled?: QueryObserverOptions['enabled'];
    retry?: QueryObserverOptions['retry'];
    refetchInterval?: number;
    refetchOnWindowFocus?: boolean;
  };
}

export type IDType = number | string;
