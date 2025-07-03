/**
 * Función de mapeo que convierte los datos de entrada (por ejemplo, del formulario o del DTO)
 * en el formato que espera la base de datos o la aplicación interna.
 * Separa las responsabilidades y mantiene el código limpio y mantenible.
 */
import { CreateUserInput } from './schema';
import { Prisma } from '@prisma/client';

export const toPrismaUserCreate = (input: CreateUserInput): Prisma.UserCreateInput => ({
  ...input,
});
