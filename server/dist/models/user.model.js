"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_mongo_1 = __importDefault(require("./user.mongo"));
const userModel = {
    createUser,
    updateUser,
};
async function createUser(user) {
    try {
        let resp = await user_mongo_1.default.collection.insertOne(user);
        return { status: 200, id: resp.insertedId, message: "ok" };
    }
    catch (error) {
        return { status: 400, id: -1, message: error };
    }
}
async function updateUser(user) {
    try {
        console.log(user.id);
        let resp = await user_mongo_1.default.findByIdAndUpdate(user.id, {
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            dob: user.dob,
            avatar: user.avatar
        });
        console.log(resp);
        return { id: resp === null || resp === void 0 ? void 0 : resp._id, status: 200, message: "ok" };
    }
    catch (error) {
        return { id: -1, status: 400, message: error };
    }
}
exports.default = userModel;
