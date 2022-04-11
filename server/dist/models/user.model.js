"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_mongo_1 = __importDefault(require("./user.mongo"));
const userModel = {
    createUser
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
exports.default = userModel;
