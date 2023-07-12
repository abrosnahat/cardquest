import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm';
import { Button } from '../../ui-kit/Button';
import { PAGES_CONFIG } from '../../constants/pages';

export default function Login() {
  const navigate = useNavigate();

  return (
    <LoginForm
      actions={
        <>
          <Button
            type='button'
            size='small'
            onClick={() => navigate(PAGES_CONFIG.registration.route)}
          >
            {'Регистрация'}
          </Button>
        </>
      }
    />
  );
}
