'use server'
import { db } from "@/lib/db"
import { getUserByEmail } from "@/app/(auth)/lib/user"
import { getVerificationTokenByToken } from "@/app/(auth)/lib/verification-token"

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) return { error: 'Token no válido!' }

  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) return { error: 'Token expirado!' }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: 'Email no registrado!' }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email
    }
  });

  await db.verificationToken.delete({
    where: { id: existingToken.email }
  });

  return { success: 'Email verificado' }
}
