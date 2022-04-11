"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const room_validation_1 = require("../../validation/room.validation");
const room_controller_1 = __importDefault(require("../../controllers/room.controller"));
const roomRouter = express_1.default.Router();
roomRouter.post(`/${process.env.API_PREFIX}/room/create-room`, room_validation_1.validateRoom, room_controller_1.default.createAsync);
exports.default = roomRouter;
