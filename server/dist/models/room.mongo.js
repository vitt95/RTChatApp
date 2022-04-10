"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    topic: { type: String },
    owner: { type: String },
    users: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Message' }],
    created_at: { type: Date, required: true },
    updated_at: { type: Date },
    deleted_at: { type: Date }
});
const Room = (0, mongoose_1.model)('Room', roomSchema);
exports.default = Room;
