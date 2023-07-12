import { useAuthTokenMutation } from './useAuthTokenMutation';
import { useLoginRoleRedirect } from './useLoginRoleRedirect';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { LoginUserData } from '../types/user';
import { yupResolver } from '@hookform/resolvers/yup';

export const useLoginForm = () => {
  const loginRoleRedirect = useLoginRoleRedirect();
  const authTokenMutation = useAuthTokenMutation();
  const schema = yup.object({
    email: yup.string().required('forms.auth.errors.no_email_error'),
    password: yup
      .string()
      .required('forms.auth.errors.no_password_error')
      .min(4),
  });
  const form = useForm<LoginUserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const response = await authTokenMutation.mutateAsync(data);

    loginRoleRedirect.onToken(response.token);
  });

  return {
    form,
    onSubmit,
    isLoading: authTokenMutation.isLoading || loginRoleRedirect.isLoading,
  };
};
