/**
 * Global declaration for Message type.
 */

enum MESSAGE_STATUS {
  OK,
  DELETED,
}

interface IMessage {
  room: IRoom | string,
  user: IUser | string,
  body: string,
  status: MESSAGE_STATUS,
  created_at: Date
}
