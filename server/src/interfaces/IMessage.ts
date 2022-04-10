import { IUser } from './IUser';
import { IRoom } from './IRoom';
/**
 * Message interface
 */

export enum MESSAGE_STATUS {
  OK,
  DELETED,
}

export interface IMessage {
  room: IRoom | string,
  user: IUser | string,
  body: string,
  status: MESSAGE_STATUS,
  created_at: Date
}