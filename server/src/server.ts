import express from 'express';
import https from 'https';
import helmet from 'helmet';
import passport from 'passport';
import path from 'path';
import tls from 'tls';
import fs from 'fs';
//import { seedFakeRooms, seedFakeUsers , seedFakeMessages} from './database/seeder';
import { mongoConnect } from './database/connection';

tls.DEFAULT_MIN_VERSION = 'TLSv1.3'

const PORT = process.env.PORT || 8000;

const app = express();

https.createServer({
  cert: fs.readFileSync(path.join(__dirname, '..', 'cert.pem')),
  key: fs.readFileSync(path.join(__dirname, '..', 'key.pem')),
  handshakeTimeout: 2000,
}, app).listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

async function setUp(): Promise<void>{
  await mongoConnect();
  //await seedFakeUsers();
  //await seedFakeRooms();
  //await seedFakeMessages();
}

setUp();


