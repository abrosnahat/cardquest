import cn from 'classnames';
import React from 'react';
import styles from './ErrorPre.module.scss';

interface ErrorPreProps {
  children?: React.ReactNode;
  fixed?: boolean;
  className?: string;
}

export const ErrorPre: React.FC<ErrorPreProps> = ({
  children,
  fixed,
  className,
}) => {
  if (!children) return null;

  return (
    <pre className={cn(styles.root, fixed && styles.fixed, className)}>
      {children}
    </pre>
  );
};
