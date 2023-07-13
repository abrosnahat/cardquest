import React from 'react';
import Layout from '../Layout/Layout';

interface PublicPageProps {
  children?: React.ReactNode;
}

export const PublicPage: React.FC<PublicPageProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};
