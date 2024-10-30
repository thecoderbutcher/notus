'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/app/(auth)/new-verification/action/new-verification';
import { BeatLoader } from 'react-spinners';
import { FormSuccess } from '@/app/(auth)/components/form-success';
import { FormError } from '@/app/(auth)/components/form-error';

const VerificationForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError('Token no válido');
      return;
    }
    newVerification(token)
      .then(data => {
        if (data.error) {
          setError(data?.error);
        } else {
          setSuccess(data?.success);
          setTimeout(() => {
            router.push(`/login`);
          }, 1500);
        }
      })
      .catch(() => {
        setError('Algo salió mal!');
      });
  }, [token, success, error, router]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex w-full justify-center items-center">
      {!success && !error && <BeatLoader />}
      <FormSuccess message={success} />
      {!success && error && <FormError message={error} />}
    </div>
  );
};

export default VerificationForm;
