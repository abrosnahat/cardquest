import cn from 'classnames';
import React from 'react';
import ErrorIcon from './img/error.svg';
import styles from './TextField.module.scss';
import { ErrorPre } from '../../components/ErrorPre/ErrorPre';

export interface TextFieldProps {
  children: React.ReactNode;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  error?: string;
  disabled?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
  children,
  startAdornment,
  endAdornment,
  className,
  error,
  disabled,
}) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={cn(
          styles.root,
          disabled && styles.isDisabled,
          error && styles.isError,
          className
        )}
      >
        {startAdornment && (
          <div className={cn(styles.adornment)}>{startAdornment}</div>
        )}
        {children}
        {endAdornment && (
          <div className={cn(styles.adornment)}>{endAdornment}</div>
        )}
        {error && <div className={cn(styles.adornment)}>{'error'}</div>}
      </div>
      {<ErrorPre className={cn(styles.error)}>{error}</ErrorPre>}
    </div>
  );
};
