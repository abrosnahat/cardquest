import cn from 'classnames';
import React, { FormEventHandler, Ref } from 'react';
import { Navigate } from 'react-router-dom';
import styles from './AuthForm.module.scss';
import { Button, ButtonProps } from '../../ui-kit/Button';
import { useCurrentUser } from '../../hooks/useCurrentUser';
import { PAGES_CONFIG } from '../../constants/pages';
import { ErrorPre } from '../ErrorPre';

export interface AuthFormProps {
  children?: React.ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  isLoading?: boolean;
  errorMsg?: string;
  title: string;
  submitBtnTitle?: string;
  submitBtnVariant?: ButtonProps['variant'];
  actions?: React.ReactNode;
}

export const AuthForm = (props: AuthFormProps) => {
  const currentUser = useCurrentUser();
  const {
    onSubmit,
    children,
    isLoading,
    errorMsg,
    title,
    submitBtnTitle,
    submitBtnVariant,
    actions,
  } = props;

  if (currentUser.data) return <Navigate to={PAGES_CONFIG.tasks.route} />;

  return (
    <div className={cn(styles.root)}>
      <div
        className={cn(styles.card)}
        title={title}
      >
        <form
          onSubmit={onSubmit}
          className={cn(styles.form)}
        >
          {children}
          {onSubmit && (
            <Button
              type='submit'
              variant={submitBtnVariant}
              className={cn(styles.submitBtn)}
              loading={isLoading}
            >
              {submitBtnTitle}
            </Button>
          )}
          <ErrorPre>{errorMsg}</ErrorPre>
          {actions && <div className={cn(styles.actions)}>{actions}</div>}
        </form>
      </div>
    </div>
  );
};
