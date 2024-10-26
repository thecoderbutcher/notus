/**
 * Esquema de validación de datos para crear un usuario.
 * Utiliza Zod para asegurarse de que los datos recibidos desde el formulario cumplen con las reglas definidas.
 */

import { z } from 'zod'

export const userCreateSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['ADMIN', 'USER']),
})
