'use server';

import * as z from "zod";
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/app/(auth)/lib/user";
import { sendVerificationEmail } from "@/app/(auth)/lib/mail";
import { generateVerificationToken } from "@/app/(auth)/lib/token";

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) return { error: 'Error en los datos ingresados!' };

  const { email, password, name, lastname } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "Este email ya fue registrado!" }

  await db.user.create({
    data: {
      name,
      lastname,
      email,
      password: hashedPassword,
    }
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: 'Email de confirmación enviado' };
}
