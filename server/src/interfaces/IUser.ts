/**
 * User interface for mongoose schema.
 */

export interface IUser {
  id?: string;
  name: string;
  lastname: string;
  email: string;
  dob: Date;
  avatar?: string;
  password: string;
}