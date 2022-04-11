"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Room controller file
 */
const room_model_1 = __importDefault(require("../models/room.model"));
const roomController = {
    createAsync,
    updateAsync
};
async function createAsync(req, res) {
    console.log(req.body.roomName);
    let room = {
        owner: req.body.uid,
        name: !req.body.roomName ? 'randomName' : req.body.roomName,
        users: [req.body.uid],
        created_at: new Date(Date.now())
    };
    const resp = await room_model_1.default.createRoom(room);
    if (resp.status !== 400) {
        return res.json(resp);
    }
}
async function updateAsync(req, res) {
}
exports.default = roomController;
