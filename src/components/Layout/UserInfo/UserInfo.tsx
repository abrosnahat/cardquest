import cn from 'classnames';
import React from 'react';
import LogoutIcon from './img/logout.svg';
import ProfileIcon from './img/profile.svg';
import styles from './UserInfo.module.scss';
import { useLogOut } from '../../../hooks/useLogOut';
import { useToggler } from '../../../hooks/useToggler';
import { Dropdown } from '../../../ui-kit/Dropdown/Dropdown';
import { useCurrentUser } from '../../../hooks/useCurrentUser';

interface UserInfoProps {}

export const UserInfo: React.FC<UserInfoProps> = () => {
  const currentUser = useCurrentUser();
  const logOut = useLogOut('/login');
  const toggler = useToggler();
  const dropdownItems = [
    {
      id: 'logout',
      label: 'Выйти',
      onClick: logOut,
      icon: <img src={LogoutIcon} />,
    },
  ];

  return (
    <div className={cn(styles.root)}>
      <Dropdown
        defaultIsOpen={toggler.isOpen}
        onToggle={(isOpen) => toggler.toggle(isOpen)}
        items={dropdownItems}
      >
        <div className={cn(styles.user)}>
          <img src={ProfileIcon} />
          <div className={cn(styles.userEmail)}>{currentUser.data?.login}</div>
        </div>
      </Dropdown>
    </div>
  );
};
