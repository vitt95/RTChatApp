"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const user_validation_1 = require("../../validation/user.validation");
const userRouter = express_1.default.Router();
userRouter.post(`/${process.env.API_PREFIX}/user/create`, user_validation_1.validateUser, user_controller_1.default.createAsync);
userRouter.post(`/${process.env.API_PREFIX}/user/update`, user_validation_1.validateUserUpdate, user_controller_1.default.updateAsync);
userRouter.delete(`/${process.env.API_PREFIX}/user/delete`, user_controller_1.default.deleteAsync);
userRouter.get(`/${process.env.API_PREFIX}/user/:userId`, user_controller_1.default.getOneAsync);
exports.default = userRouter;
