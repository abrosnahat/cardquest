import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui-kit/Button/Button';
import { PAGES_CONFIG } from '../../constants/pages';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

export default function Registration() {
  const navigate = useNavigate();

  return (
    <RegistrationForm
      actions={
        <Button
          type='button'
          size='small'
          onClick={() => navigate(PAGES_CONFIG.login.route)}
        >
          {'pages.home.login'}
        </Button>
      }
    />
  );
}
