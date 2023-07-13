import React from 'react';
import { AuthForm, AuthFormProps } from '../AuthForm/AuthForm';
import { useRegistrationForm } from '../../hooks/useRegistrationForm';
import { FormField } from '../FormField/FormField';
import { Input } from '../../ui-kit/Input/Input';

interface RegistrationFormProps extends Partial<AuthFormProps> {}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  actions,
}) => {
  const registration = useRegistrationForm();

  return (
    <AuthForm
      title={'pages.home.registration'}
      submitBtnTitle={'pages.home.sign_up'}
      submitBtnVariant='purple-outline-gradient'
      actions={actions}
      isLoading={registration.isLoading}
      onSubmit={registration.onSubmit}
    >
      <FormField label={'pages.home.email'}>
        <Input {...registration.form.register('login')} />
      </FormField>
      <FormField label={'pages.home.password'}>
        <Input
          {...registration.form.register('password')}
          type='password'
        />
      </FormField>
    </AuthForm>
  );
};
