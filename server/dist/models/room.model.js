"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("./../enum/http.status");
const room_mongo_1 = __importDefault(require("./room.mongo"));
const roomModel = {
    createRoom,
    updateRoom
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
async function updateRoom(room) {
    try {
        const resp = await room_mongo_1.default.findByIdAndUpdate({ _id: room.id }, {
            name: room.name,
            topic: (!!room.topic) && room.topic,
            updated_at: room.updated_at
        });
        const retRoom = {
            name: !room.name ? resp.name : room.name,
            topic: !room.topic ? resp.topic : room.topic,
            created_at: !room.created_at ? resp.created_at : room.created_at,
            id: !room.id ? resp.id : room.id,
            deleted_at: !room.deleted_at ? resp.deleted_at : room.deleted_at,
            owner: !room.owner ? resp.owner : room.owner,
            updated_at: !room.updated_at ? resp.updated_at : room.updated_at,
            users: !room.users ? resp.users : room.users
        };
        return retRoom;
    }
    catch (error) {
        return { id: -1, status: http_status_1.HTTP_STATUS.BAD_REQUEST, message: error };
    }
}
exports.default = roomModel;
