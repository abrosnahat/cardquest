import React from 'react';
import { getFormError } from '../../utils/validations';
import { Input } from '../../ui-kit/Input/Input';
import { FormField } from '../FormField/FormField';
import { AuthForm, AuthFormProps } from '../AuthForm/AuthForm';
import { useLoginForm } from '../../hooks/useLoginForm';

interface LoginFormProps extends Partial<AuthFormProps> {}

export const LoginForm: React.FC<LoginFormProps> = ({ actions }) => {
  const login = useLoginForm();

  return (
    <AuthForm
      title={'pages.home.login'}
      submitBtnTitle={'pages.home.sign_in'}
      submitBtnVariant='purple'
      actions={actions}
      isLoading={login.isLoading}
      onSubmit={login.onSubmit}
    >
      <FormField label={'pages.home.email'}>
        <Input
          {...login.form.register('login')}
          error={getFormError(login.form.formState, 'login')}
        />
      </FormField>
      <FormField label={'pages.home.password'}>
        <Input
          {...login.form.register('password')}
          type='password'
          error={getFormError(login.form.formState, 'password')}
        />
      </FormField>
    </AuthForm>
  );
};
