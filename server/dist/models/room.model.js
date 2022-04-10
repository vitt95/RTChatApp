"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoom = void 0;
const room_mongo_1 = __importDefault(require("./room.mongo"));
async function createRoom(room) {
    try {
        let resp = await room_mongo_1.default.collection.insertOne(room);
        return { status: resp.insertedId, message: 'ok' };
    }
    catch (error) {
        return { status: 400, message: error };
    }
}
exports.createRoom = createRoom;
