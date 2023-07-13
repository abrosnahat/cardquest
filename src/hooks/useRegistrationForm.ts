import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useLoginRoleRedirect } from './useLoginRoleRedirect';
import { useRegisterMutation } from './useRegisterMutation';
import { RegistrationUserData } from '../types/user';
import { yupResolver } from '@hookform/resolvers/yup';

export const useRegistrationForm = () => {
  const loginRoleRedirect = useLoginRoleRedirect();
  const registerMutation = useRegisterMutation();
  const schema = yup.object({
    login: yup.string().required('forms.auth.errors.no_email_error'),
    password: yup
      .string()
      .required('forms.auth.errors.no_password_error')
      .min(4),
  });
  const form = useForm<RegistrationUserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const { token } = await registerMutation.mutateAsync(data);

    loginRoleRedirect.onToken(token);
  });

  return {
    form,
    onSubmit,
    isLoading: registerMutation.isLoading || loginRoleRedirect.isLoading,
  };
};
