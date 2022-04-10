"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const room_controller_1 = __importDefault(require("../../controllers/room.controller"));
const URL_PREFIX = process.env.APIV1_PREFIX;
const apiRouter = express_1.default.Router();
apiRouter.post(`/${URL_PREFIX}/create-room`, room_controller_1.default.createAsync);
exports.default = apiRouter;
