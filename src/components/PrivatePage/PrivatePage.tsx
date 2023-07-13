import React from 'react';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { Navigate } from 'react-router-dom';
import { getAuthToken } from '../../utils/user';
import Layout from '../Layout/Layout';

interface PrivatePageProps {
  children?: React.ReactNode;
}

export const PrivatePage: React.FC<PrivatePageProps> = ({ children }) => {
  if (!getAuthToken()) return <Navigate to='/login' />;

  return <Layout>{children}</Layout>;
};
