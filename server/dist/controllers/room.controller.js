"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Room controller file
 */
const room_model_1 = require("../models/room.model");
const roomController = {
    createAsync,
};
async function createAsync(req, res) {
    let room = {
        owner: req.body.uid,
        name: !req.body.roomName ? 'randomName' : req.body.roomName,
        users: [req.body.uid],
        created_at: new Date(Date.now())
    };
    const resp = await (0, room_model_1.createRoom)(room);
    if (resp.status !== 400) {
        return res.json(resp);
    }
}
exports.default = roomController;
