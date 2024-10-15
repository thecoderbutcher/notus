import React from 'react';
import { AuthCardWrapper } from '@/app/(auth)/components/card-wrapper';
import { LoginForm } from '@/app/(auth)/login/components/login-form';

const page = () => {
  return (
    <AuthCardWrapper
      headerLabel="Bienvenido"
      backLabel="¿No tienes una cuenta?"
      backLink="/register"
      social
    >
      <LoginForm />
    </AuthCardWrapper>
  );
};

export default page;
