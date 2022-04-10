"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const path_1 = __importDefault(require("path"));
const tls_1 = __importDefault(require("tls"));
const fs_1 = __importDefault(require("fs"));
const seeder_1 = require("./database/seeder");
const connection_1 = require("./database/connection");
tls_1.default.DEFAULT_MIN_VERSION = 'TLSv1.3';
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
https_1.default.createServer({
    cert: fs_1.default.readFileSync(path_1.default.join(__dirname, '..', 'cert.pem')),
    key: fs_1.default.readFileSync(path_1.default.join(__dirname, '..', 'key.pem')),
    handshakeTimeout: 2000,
}, app).listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
async function setUp() {
    await (0, connection_1.mongoConnect)();
    //await seedFakeUsers();
    //await seedFakeRooms();
    await (0, seeder_1.seedFakeMessages)();
}
setUp();
