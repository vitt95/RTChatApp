import express from 'express';
import userController from '../../controllers/user.controller';
import { validateUser, validateUserUpdate } from '../../utils/user.validation';

const userRouter = express.Router();

userRouter.post(`/${process.env.API_PREFIX!}/user/create-user`, validateUser ,userController.createAsync);
userRouter.post(`/${process.env.API_PREFIX!}/user/update-user`, validateUserUpdate, userController.updateAsync);


export default userRouter;