import express from 'express';
import 'dotenv/config';

import roomController from '../../controllers/room.controller';

const URL_PREFIX = process.env.APIV1_PREFIX;

const apiRouter = express.Router();

apiRouter.post(`/${URL_PREFIX}/create-room`, roomController.createAsync);



export default apiRouter;