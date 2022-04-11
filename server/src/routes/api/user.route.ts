import express from 'express';
import userController from '../../controllers/user.controller';
import { validateUser, validateUserUpdate } from '../../validation/user.validation';

const userRouter = express.Router();

userRouter.post(`/${process.env.API_PREFIX!}/user/create`, validateUser ,userController.createAsync);
userRouter.post(`/${process.env.API_PREFIX!}/user/update`, validateUserUpdate, userController.updateAsync);
userRouter.delete(`/${process.env.API_PREFIX!}/user/delete`, userController.deleteAsync);
userRouter.get(`/${process.env.API_PREFIX!}/user/:userId`, userController.getOneAsync);

export default userRouter;