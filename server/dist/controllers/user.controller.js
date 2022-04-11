"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
/**
 * User controller file
 */
const userController = {
    createUserAsync
};
async function createUserAsync(req, res) {
    const user = {
        name: req.body.name,
        lastname: req.body.lastname,
        password: bcrypt_1.default.hashSync(req.body.password, 10),
        email: req.body.email,
        dob: req.body.dob,
        avatar: !req.body.avatar ? 'url-avatar' : req.body.avatar,
    };
    let resp = await user_model_1.default.createUser(user);
    return res.status(resp.status).json(resp);
}
exports.default = userController;
