import { ObjectID } from 'bson';
// Type definitions for User 

declare global {
  interface IUser {
    id?: ObjectID;
    name: string;
    lastname: string;
    email: string;
    dob: Date;
    avatar?: string;
    password: string;
  }

  interface IUserUpdate {
    id?: string
    name?: string;
    lastname?: string;
    email?: string;
    dob?: Date;
    avatar?: string;
    password?: string;
  }
}
