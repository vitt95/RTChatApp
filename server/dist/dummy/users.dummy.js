"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyUsers = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.dummyUsers = [
    {
        name: 'Vittorio',
        lastname: 'Aiello',
        email: 'vittorioaiello95@gmail.com',
        dob: new Date('3-1-1995'),
        password: bcrypt_1.default.hashSync('Podrello95', 10),
        avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
    },
    {
        name: 'Hank',
        lastname: 'Mccoy',
        email: 'HankMccoy@gmail.com',
        dob: new Date('1-1-1989'),
        password: bcrypt_1.default.hashSync('Ciufolo89', 10),
        avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
    },
    {
        name: 'Logan',
        lastname: 'Wolverine',
        email: 'LoganGhiottone@gmail.com',
        dob: new Date('3-1-1975'),
        password: bcrypt_1.default.hashSync('LamaAcciaio75', 10),
        avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
    },
    {
        name: 'Wanda',
        lastname: 'Maximoff',
        email: 'sexybombwitch@gmail.com',
        dob: new Date('3-1-1985'),
        password: bcrypt_1.default.hashSync('VisionePerduta85', 10),
        avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
    },
    {
        name: 'Natasha',
        lastname: 'Romanoff',
        email: 'blackwidow86@gmail.com',
        dob: new Date('3-1-1986'),
        password: bcrypt_1.default.hashSync('KillerInstinct86', 10),
        avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
    },
    {
        name: 'Tony',
        lastname: 'Stark',
        email: 'starkindustries@gmail.com',
        dob: new Date('3-1-1976'),
        password: bcrypt_1.default.hashSync('IronMan76', 10),
        avatar: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1649545226~hmac=d5dcbe8717638c8e121455321c5ba939',
    }
];
