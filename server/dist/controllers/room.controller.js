"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("./../enum/http.status");
/**
 * Room controller file
 */
const room_model_1 = __importDefault(require("../models/room.model"));
const roomController = {
    createAsync,
    updateAsync
};
async function createAsync(req, res) {
    let room = {
        owner: req.body.uid,
        name: !req.body.roomName ? 'randomName' : req.body.roomName,
        users: [req.body.uid],
        created_at: new Date(Date.now())
    };
    const resp = await room_model_1.default.createRoom(room);
    if (resp.id !== -1) {
        return res.status(http_status_1.HTTP_STATUS.CREATED).json(resp);
    }
    return res.status(http_status_1.HTTP_STATUS.BAD_REQUEST).json(resp);
}
async function updateAsync(req, res) {
    let room = {
        id: req.body.rid,
        name: req.body.roomName,
        topic: (!!req.body.topic) && req.body.topic,
        updated_at: new Date(Date.now()),
    };
    const resp = await room_model_1.default.updateRoom(room);
    if (resp.id !== -1) {
        return res.status(http_status_1.HTTP_STATUS.ACCEPTED).json(resp);
    }
    return res.status(http_status_1.HTTP_STATUS.NOT_ACCEPTABLE).json(resp);
}
exports.default = roomController;
