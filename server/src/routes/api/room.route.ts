import express from 'express';
import 'dotenv/config';
import { validateRoom } from '../../utils/room.validation';

import roomController from '../../controllers/room.controller';

const roomRouter = express.Router();

roomRouter.post(`/${process.env.API_PREFIX!}/room/create-room`, validateRoom, roomController.createAsync);



export default roomRouter;