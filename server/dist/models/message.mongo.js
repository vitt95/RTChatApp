"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const messageSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    room: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Room', required: true },
    body: { type: String, required: true },
    created_at: { type: Date, required: true },
    status: { type: Number, required: true, enum: MESSAGE_STATUS }
});
const Message = (0, mongoose_1.model)('Message', messageSchema);
exports.default = Message;
