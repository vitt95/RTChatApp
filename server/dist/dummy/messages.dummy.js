"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyMessages = void 0;
const IMessage_1 = require("../interfaces/IMessage");
exports.dummyMessages = [
    {
        user: '6252fc4852a8d89eb1ee0c91',
        status: IMessage_1.MESSAGE_STATUS.OK,
        body: 'Ciao come stai',
        created_at: new Date('9-4-2022'),
        room: '625306baffc6aae98f17fc6c',
    },
    {
        user: '6252fc4852a8d89eb1ee0c92',
        status: IMessage_1.MESSAGE_STATUS.OK,
        body: 'Tutto bene, tu?',
        created_at: new Date('9-5-2022'),
        room: '625306baffc6aae98f17fc6c'
    },
    {
        user: '6252fc4852a8d89eb1ee0c91',
        status: IMessage_1.MESSAGE_STATUS.OK,
        body: 'Anche io tutto bene. Che mi dici di bello?',
        created_at: new Date('9-6-2022'),
        room: '625306baffc6aae98f17fc6c',
    },
    {
        user: '6252fc4852a8d89eb1ee0c92',
        status: IMessage_1.MESSAGE_STATUS.OK,
        body: 'Niente di che, sempre tutto uguale',
        created_at: new Date('9-7-2022'),
        room: '625306baffc6aae98f17fc6c'
    }
];
