"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDisconnect = exports.mongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
mongoose_1.default.connection.once('open', () => {
    console.log('MongoDB connection ready! ');
});
mongoose_1.default.connection.on('error', (err) => {
    console.log('Error', err);
});
async function mongoConnect() {
    return await mongoose_1.default.connect(process.env.MONGO_URL);
}
exports.mongoConnect = mongoConnect;
async function mongoDisconnect() {
    return await mongoose_1.default.disconnect();
}
exports.mongoDisconnect = mongoDisconnect;
