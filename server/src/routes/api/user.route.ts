import express from 'express';
import userController from '../../controllers/user.controller';
import { validateUser } from '../../utils/user.validation';

const userRouter = express.Router();

userRouter.post(`/${process.env.API_PREFIX!}/user/create-user`, validateUser ,userController.createUserAsync);


export default userRouter;