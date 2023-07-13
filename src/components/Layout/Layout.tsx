import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import { Header } from './Header/Header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.main}>{children}</div>

      <footer>footer</footer>
    </div>
  );
};

export default Layout;
