import { IMessage, MESSAGE_STATUS } from '../interfaces/IMessage';

export const dummyMessages: IMessage[] = [
  {
    user: '6252fc4852a8d89eb1ee0c91',
    status: MESSAGE_STATUS.OK,
    body: 'Ciao come stai',
    created_at: new Date('9-4-2022'),
    room: '625306baffc6aae98f17fc6c',
  },
  {
    user: '6252fc4852a8d89eb1ee0c92',
    status: MESSAGE_STATUS.OK,
    body: 'Tutto bene, tu?',
    created_at: new Date('9-5-2022'),
    room: '625306baffc6aae98f17fc6c'
  },
  {
    user: '6252fc4852a8d89eb1ee0c91',
    status: MESSAGE_STATUS.OK,
    body: 'Anche io tutto bene. Che mi dici di bello?',
    created_at: new Date('9-6-2022'),
    room: '625306baffc6aae98f17fc6c',
  },
  {
    user: '6252fc4852a8d89eb1ee0c92',
    status: MESSAGE_STATUS.OK,
    body: 'Niente di che, sempre tutto uguale',
    created_at: new Date('9-7-2022'),
    room: '625306baffc6aae98f17fc6c'
  }
]

