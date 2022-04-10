"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedFakeMessages = exports.seedFakeRooms = exports.seedFakeUsers = void 0;
const users_dummy_1 = require("./../dummy/users.dummy");
const rooms_dummy_1 = require("./../dummy/rooms.dummy");
const messages_dummy_1 = require("./../dummy/messages.dummy");
const user_mongo_1 = __importDefault(require("../models/user.mongo"));
const room_mongo_1 = __importDefault(require("../models/room.mongo"));
const message_mongo_1 = __importDefault(require("../models/message.mongo"));
async function seedFakeUsers() {
    user_mongo_1.default.collection.insertMany(users_dummy_1.dummyUsers, (err, docs) => {
        if (err) {
            return console.error(err);
        }
        else
            console.log('Multiple Users inserted to Collection..');
    });
}
exports.seedFakeUsers = seedFakeUsers;
async function seedFakeRooms() {
    room_mongo_1.default.collection.insertMany(rooms_dummy_1.dummyRooms, (err, docs) => {
        if (err) {
            return console.error(err);
        }
        else
            console.log('Multiple Rooms inserted to Collection..');
    });
}
exports.seedFakeRooms = seedFakeRooms;
async function seedFakeMessages() {
    message_mongo_1.default.collection.insertMany(messages_dummy_1.dummyMessages, (err, docs) => {
        if (err) {
            return console.error(err);
        }
        else
            console.log('Multiple Messages inserted to Collection');
    });
}
exports.seedFakeMessages = seedFakeMessages;
