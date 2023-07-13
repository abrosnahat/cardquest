import cn from 'classnames';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './MenuItem.module.scss';
import { RenderSwitch } from '../../components/RenderSwitch/RenderSwitch';

export interface MenuItemProps {
  className?: string;
  innerClassName?: string;
  isActive?: boolean;
  activeInnerClassName?: string;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  nav?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  className,
  innerClassName,
  activeInnerClassName,
  isActive,
  onClick,
  href,
  children,
  nav,
}) => {
  return (
    <li className={className}>
      <RenderSwitch
        cases={[
          href && nav && (
            <NavLink
              key='navLink'
              onClick={onClick}
              className={({ isActive: isNavActive }) => {
                return cn(
                  styles.inner,
                  innerClassName,
                  (isActive || isNavActive) && [
                    styles.active,
                    activeInnerClassName,
                  ]
                );
              }}
              to={href}
            >
              {children}
            </NavLink>
          ),
          href && (
            <Link
              key='link'
              className={cn(
                styles.inner,
                innerClassName,
                isActive && [styles.active, activeInnerClassName]
              )}
              to={href}
              onClick={onClick}
            >
              {children}
            </Link>
          ),
          true && (
            <div
              key='div'
              className={cn(
                styles.inner,
                innerClassName,
                isActive && [styles.active, activeInnerClassName]
              )}
              onClick={onClick}
            >
              {children}
            </div>
          ),
        ]}
      />
    </li>
  );
};
