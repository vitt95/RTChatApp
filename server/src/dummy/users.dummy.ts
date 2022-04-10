import { IUser } from "../interfaces/IUser";
import bcrypt from 'bcrypt';

export const dummyUsers: IUser[] = [
  {
    name: 'Vittorio',
    lastname: 'Aiello',
    email: 'vittorioaiello95@gmail.com',
    dob: new Date('3-1-1995'),
    password: bcrypt.hashSync('Podrello95', 10),
    avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
  },
  {
    name: 'Hank',
    lastname: 'Mccoy',
    email: 'HankMccoy@gmail.com',
    dob: new Date('1-1-1989'),
    password: bcrypt.hashSync('Ciufolo89', 10),
    avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
  },
  {
    name: 'Logan',
    lastname: 'Wolverine',
    email: 'LoganGhiottone@gmail.com',
    dob: new Date('3-1-1975'),
    password: bcrypt.hashSync('LamaAcciaio75', 10),
    avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
  },
  {
    name: 'Wanda',
    lastname: 'Maximoff',
    email: 'sexybombwitch@gmail.com',
    dob: new Date('3-1-1985'),
    password: bcrypt.hashSync('VisionePerduta85', 10),
    avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
  },
  {
    name: 'Natasha',
    lastname: 'Romanoff',
    email: 'blackwidow86@gmail.com',
    dob: new Date('3-1-1986'),
    password: bcrypt.hashSync('KillerInstinct86', 10),
    avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
  },
  {
    name: 'Tony',
    lastname: 'Stark',
    email: 'starkindustries@gmail.com',
    dob: new Date('3-1-1976'),
    password: bcrypt.hashSync('IronMan76', 10),
    avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
  }
]