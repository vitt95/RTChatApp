/**
 * Room type definitions .d.ts file
 */
interface IRoom {
  id?: string;
  name?: string;
  topic?: string;
  owner?: IUser[] | string[] | string
  users?: IUser[] | string[];
  messages?: IMessage[] | string[];
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}


