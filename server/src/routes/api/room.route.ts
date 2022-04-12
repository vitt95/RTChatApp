import express from 'express';
import 'dotenv/config';
import { validateRoom } from '../../validation/room.validation';

import roomController from '../../controllers/room.controller';

const roomRouter = express.Router();

roomRouter.post(`/${process.env.API_PREFIX!}/room/create`, validateRoom, roomController.createAsync);
roomRouter.post(`/${process.env.API_PREFIX!}/room/update`, validateRoom, roomController.updateAsync);


export default roomRouter;