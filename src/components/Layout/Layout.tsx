import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.root}>
      <div>header</div>
      <div className={styles.main}>
        <Outlet />
      </div>

      <footer>footer</footer>
    </div>
  );
};

export default Layout;
