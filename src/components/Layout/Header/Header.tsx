import cn from 'classnames';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useCurrentUser } from '../../../hooks/useCurrentUser';
import { PAGES_CONFIG } from '../../../constants/pages';
import { UserInfo } from '../UserInfo/UserInfo';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const currentUser = useCurrentUser();
  const userInfoRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className={cn(styles.root)}>
        <div className={cn(styles.inner)}>
          <div className={cn(styles.logo)}>
            <Link
              to={PAGES_CONFIG.tasks.route}
              className={cn(styles.logoLink)}
            >
              CardQuest
            </Link>
          </div>
          {currentUser.data && (
            <Link to={PAGES_CONFIG.tasks.route}>Задания</Link>
          )}
          {currentUser.data && (
            <div
              className={cn(styles.userWrapper)}
              ref={userInfoRef}
            >
              {currentUser.data.balance} ₽
              <UserInfo />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
