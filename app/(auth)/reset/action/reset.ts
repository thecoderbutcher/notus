'use server';
import * as z from 'zod';

import { ResetSchema } from '@/schemas';
import { getUserByEmail } from '@/app/(auth)/lib/user';
import { sendPasswordReset } from '@/app/(auth)/lib/mail';
import { generatePasswordResetToken } from '@/app/(auth)/lib/token';

export const resetPassword = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields = ResetSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Email no valido!" };
  }

  const { email } = validateFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email no encontrado!" };
  }

  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordReset(
    passwordResetToken.email,
    passwordResetToken.token,
  )


  return { success: "Email de restablecimiento enviado!" }
}
