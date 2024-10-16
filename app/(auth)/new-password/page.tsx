import { AuthCardWrapper } from '@/app/(auth)/components/card-wrapper';
import NewPasswordForm from '@/app/(auth)/new-password/components/new-password-form';

const page = () => {
  return (
    <AuthCardWrapper
      headerLabel="Cambiar contraseña"
      backLabel="Volver"
      backLink="/login"
      social={false}
    >
      <NewPasswordForm />
    </AuthCardWrapper>
  );
};

export default page;
