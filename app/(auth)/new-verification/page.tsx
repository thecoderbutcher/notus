import React from 'react';
import { AuthCardWrapper } from '@/app/(auth)/components/card-wrapper';
import VerificationForm from '@/app/(auth)/new-verification/components/verification-form';

const page = () => {
  return (
    <AuthCardWrapper
      headerLabel="Confirmacion de email"
      backLabel="Volver"
      backLink="/"
      social={false}
    >
      <VerificationForm />
    </AuthCardWrapper>
  );
};

export default page;
