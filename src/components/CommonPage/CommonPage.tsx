import React from 'react';
import { PrivatePage } from '../PrivatePage/PrivatePage';

interface CommonPageProps {
  children?: React.ReactNode;
}

export const CommonPage: React.FC<CommonPageProps> = ({ children }) => {
  return <PrivatePage>{children}</PrivatePage>;
};
