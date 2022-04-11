"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("../enum/http.status");
const user_mongo_1 = __importDefault(require("./user.mongo"));
const userModel = {
    createUser,
    updateUser,
    deleteUser,
    getUser,
};
async function createUser(user) {
    try {
        let resp = await user_mongo_1.default.collection.insertOne(user);
        const retUser = {
            id: resp.insertedId.toString(),
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            avatar: user.avatar,
            dob: user.dob
        };
        return retUser;
    }
    catch (error) {
        return { id: -1, status: http_status_1.HTTP_STATUS.BAD_REQUEST, message: error };
    }
}
async function updateUser(user) {
    try {
        let resp = await user_mongo_1.default.findByIdAndUpdate(user.id, {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            dob: user.dob,
            avatar: user.avatar
        });
        let retUser = {
            name: user === null || user === void 0 ? void 0 : user.name,
            lastname: user === null || user === void 0 ? void 0 : user.lastname,
            email: user === null || user === void 0 ? void 0 : user.email,
            dob: user === null || user === void 0 ? void 0 : user.dob,
            avatar: user === null || user === void 0 ? void 0 : user.avatar
        };
        return retUser;
    }
    catch (error) {
        return { id: -1, status: http_status_1.HTTP_STATUS.NOT_FOUND, message: error };
    }
}
async function deleteUser(userId) {
    try {
        let resp = await user_mongo_1.default.findByIdAndDelete(userId);
        return { id: resp === null || resp === void 0 ? void 0 : resp._id, status: 200, message: "ok" };
    }
    catch (error) {
        return { id: -1, status: 400, message: error };
    }
}
async function getUser(userId) {
    try {
        let resp = await user_mongo_1.default.findById(userId);
        let user = {
            id: resp === null || resp === void 0 ? void 0 : resp.id,
            name: resp === null || resp === void 0 ? void 0 : resp.name,
            lastname: resp === null || resp === void 0 ? void 0 : resp.lastname,
            avatar: resp === null || resp === void 0 ? void 0 : resp.avatar,
            dob: resp === null || resp === void 0 ? void 0 : resp.dob,
            email: resp === null || resp === void 0 ? void 0 : resp.email
        };
        return user;
    }
    catch (error) {
        return { id: -1, status: http_status_1.HTTP_STATUS.BAD_REQUEST, message: error };
    }
}
exports.default = userModel;
