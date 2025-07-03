import { AuthCardWrapper } from '@/app/(auth)/components/card-wrapper';
import { FaTriangleExclamation } from 'react-icons/fa6';

const ErrorAuth = () => {
  return (
    <AuthCardWrapper
      headerLabel="Somethings went wrong"
      backLabel="Volver"
      backLink="/login"
      social={false}
    >
      <p className="flex items-center justify-center text-xl gap-x-2">
        <FaTriangleExclamation className="text-warning" />
        Something went wrong
      </p>
    </AuthCardWrapper>
  );
};

export default ErrorAuth;
