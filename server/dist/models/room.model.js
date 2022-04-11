"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const room_mongo_1 = __importDefault(require("./room.mongo"));
const roomModel = {
    createRoom
};
async function createRoom(room) {
    try {
        let resp = await room_mongo_1.default.collection.insertOne(room);
        return { status: 200, id: resp.insertedId, message: 'ok' };
    }
    catch (error) {
        return { status: 400, id: -1, message: error };
    }
}
exports.default = roomModel;
