/**
 * Esquema de validación de datos para crear un usuario.
 * Utiliza Zod para asegurarse de que los datos recibidos desde el formulario cumplen con las reglas definidas.
 */
import { z } from 'zod'

export const createUserSchema = z.object({
  name: z.string().min(3, { message: 'Nombre es requerido' }),
  lastname: z.string().min(3, { message: 'Apellido es requerido' }),
  username: z.string().min(8, { message: 'El nombre de usuario debe contener al menos 8 caracteres' }).optional(),
  email: z.string().email({ message: 'Email es requerido' }),
  phone: z.string().min(9, {message: 'Numero de telefono no valido'}),
  password: z.string().min(8, { message: 'Minimo 8 caracteres requerido' }),
  role: z.enum(['ADMIN', 'USER', 'TEACHER', 'STUDENT', 'PARENT']).optional(),
})

export type CreateUserInput = z.infer<typeof createUserSchema>;
