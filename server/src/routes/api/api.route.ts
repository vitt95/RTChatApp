import express from 'express';
import 'dotenv/config';
import { body } from 'express-validator';
import { validateRoom } from '../../utils/room.validation';

import roomController from '../../controllers/room.controller';

const URL_PREFIX = process.env.APIV1_PREFIX;

const apiRouter = express.Router();

apiRouter.post(`/${URL_PREFIX}/create-room`, validateRoom, roomController.createAsync);



export default apiRouter;