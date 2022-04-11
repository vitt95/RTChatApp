"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = require("../enum/http.status");
const user_model_1 = __importDefault(require("../models/user.model"));
/**
 * User controller file
 */
const userController = {
    createAsync,
    updateAsync,
    deleteAsync,
    getOneAsync,
};
async function getOneAsync(req, res) {
    const userId = req.params.userId;
    const resp = await user_model_1.default.getUser(userId);
    if (resp.id !== -1) {
        return res.status(http_status_1.HTTP_STATUS.OK).json(resp);
    }
    return res.status(http_status_1.HTTP_STATUS.BAD_REQUEST).json({ message: "User not found" });
}
async function createAsync(req, res) {
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        password: bcrypt_1.default.hashSync(req.body.password, 10),
        email: req.body.email,
        dob: req.body.dob,
        avatar: !req.body.avatar ? 'url-avatar' : req.body.avatar,
    };
    let resp = await user_model_1.default.createUser(user);
    if (resp.id !== -1) {
        return res.status(http_status_1.HTTP_STATUS.CREATED).json(resp);
    }
    return res.status(http_status_1.HTTP_STATUS.NOT_ACCEPTABLE).json(resp);
}
async function updateAsync(req, res) {
    const user = {
        id: req.body.uid,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        dob: req.body.dob,
        avatar: req.body.avatar,
    };
    const resp = await user_model_1.default.updateUser(user);
    if (resp.id !== -1) {
        return res.status(http_status_1.HTTP_STATUS.ACCEPTED).json(resp);
    }
    return res.status(http_status_1.HTTP_STATUS.NOT_FOUND).json(resp);
}
async function deleteAsync(req, res) {
    const userId = req.body.uid;
    const resp = await user_model_1.default.deleteUser(userId);
    if (resp.id !== -1) {
        return res.status(http_status_1.HTTP_STATUS.OK).json(resp);
    }
    return res.status(http_status_1.HTTP_STATUS.NOT_FOUND).json({ message: "User not found" });
}
exports.default = userController;
