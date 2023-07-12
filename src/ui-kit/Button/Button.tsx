import cn from 'classnames';
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { Loader } from '../Loader';

export interface ButtonProps {
  children?: ReactNode;
  type?: 'button' | 'submit';
  className?: string;
  variant?:
    | 'text'
    | 'purple'
    | 'purple-outline'
    | 'red-outline'
    | 'purple-outline-gradient'
    | 'link'
    | 'grey'
    | 'green'
    | 'transparent';
  size?: 'normal' | 'small';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  active?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  className,
  variant = 'text',
  size = 'normal',
  disabled,
  loading,
  onClick,
  startIcon,
  endIcon,
  active,
  href,
}) => {
  const button = (
    <button
      className={cn(
        styles.root,
        variant && styles[variant],
        size && styles[size],
        active && styles.active,
        disabled && styles.disabled,
        loading && styles.loading,
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? (
        <Loader
          small
          variant='short'
        />
      ) : (
        startIcon
      )}
      {children}
      {endIcon}
    </button>
  );

  if (href) {
    return <Link to={href}>{button}</Link>;
  }

  return button;
};
