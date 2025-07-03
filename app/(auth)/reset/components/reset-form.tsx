'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { FormError } from '@/app/(auth)/components/form-error';
import { FormSuccess } from '@/app/(auth)/components/form-success';
import { ResetSchema } from '@/schemas';
import { useForm } from 'react-hook-form';
import { resetPassword } from '@/app/(auth)/reset/action/reset';
import { useRouter } from 'next/navigation';

const ResetForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      resetPassword(values).then(data => {
        if (data.error) {
          setError(data?.error);
        } else {
          setSuccess(data?.success);
          setTimeout(() => {
            router.push(`/login`);
            reset();
          }, 1500);
        }
      });
    });
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className={`${errors.email ? 'text-danger' : ''}`}
        >
          Email
        </label>
        <input
          {...register('email')}
          id="email"
          name="email"
          type="email"
          placeholder="Ingreasa tu email de registro"
          disabled={isPending}
        />
        {errors.email && (
          <p className="text-sm text-danger">{errors.email.message}</p>
        )}
      </div>
      <FormSuccess message={success} />
      <FormError message={error} />
      <div>
        <button className="w-full bg-primary text-white py-2 rounded-md">
          Restablecer contraseña
        </button>
      </div>
    </form>
  );
};

export default ResetForm;
