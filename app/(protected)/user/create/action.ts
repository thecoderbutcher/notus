/**
 * Acción del lado del servidor para crear un nuevo usuario.
 * Esta función valida los datos recibidos, aplica los mapeos necesarios y guarda el usuario en la base de datos usando Prisma.
 *
 * Se utiliza desde el formulario de creación (CreateUserForm).
 */
'use server';
import { createUserSchema } from './schema';
import { toPrismaUserCreate } from './mapper';
import { db } from '@/lib/db';

export async function createUserAction(formData: unknown) {
  const parsed = createUserSchema.safeParse(formData);
  if (!parsed.success) {
    return { error: 'Invalid data', details: parsed.error.flatten() };
  }

  const data = toPrismaUserCreate(parsed.data);

  try {
    const user = await db.user.create({ data });
    return { success: true, user };
  } catch (error) {
    return { error: 'Error creating user', details: error };
  }
}
