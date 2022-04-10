import { IUser } from './IUser';
import { IMessage } from './IMessage';
/**
 * Room interface
 */
import User from "../models/user.mongo";

export interface IRoom {
  name: string;
  topic?: string;
  users: IUser[] | string[];
  messages?: IMessage[] | string[];
  created_at: Date;
  updated_at?: Date;
  deleted_at?: Date;
}