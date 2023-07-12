import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const navigate = useNavigate();

  return (
    // <RegistrationForm
    //   actions={
    //     <Button
    //       type='button'
    //       size='small'
    //       onClick={() => navigate(PAGES_CONFIG.login.route)}
    //     >
    //       {t('pages.home.login')}
    //     </Button>
    //   }
    // />
    <div>Register</div>
  );
}
