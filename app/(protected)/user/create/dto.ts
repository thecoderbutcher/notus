/**
 * Objeto de Transferencia de Datos (DTO) que define la forma estandarizada que deben tener los datos
 * al crear un nuevo usuario. Se usa para separar la lógica de validación de la de persistencia.
 */

export interface CreateUserDTO {
  name?: string;
  lastname?: string;
  username?: string;
  phone?: string;
  email?: string;
  password?: string;
  role?: 'ADMIN' | 'USER' | 'TEACHER' | 'STUDENT' | 'PARENT';
}
