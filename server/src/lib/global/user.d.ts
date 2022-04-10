// Type definitions for User 

interface IUser {
  id?: string;
  name: string;
  lastname: string;
  email: string;
  dob: Date;
  avatar?: string;
  password: string;
}