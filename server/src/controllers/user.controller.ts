import bcrypt from 'bcrypt';
import { HTTP_STATUS } from '../enum/http.status';
import userModel from '../models/user.model';
/**
 * User controller file
 */

const userController = {
  createAsync,
  updateAsync,
  deleteAsync,
  getOneAsync,
}

async function getOneAsync(req: ExpressReq, res: ExpressRes): Promise<ExpressRes> {
  const userId = req.params.userId;
  const resp = await userModel.getUser(userId);
  if(resp.id !== -1){
    return res.status(HTTP_STATUS.OK).json(resp);
  }

  return res.status(HTTP_STATUS.BAD_REQUEST).json({message: "User not found"});
}

async function createAsync(req: ExpressReq, res: ExpressRes): Promise<ExpressRes> {
  const user: IUser = {
    name: req.body.name,
    lastname: req.body.lastname,
    password: bcrypt.hashSync(req.body.password, 10),
    email: req.body.email,
    dob: req.body.dob,
    avatar: !req.body.avatar ? 'url-avatar' : req.body.avatar,
  }

  let resp = await userModel.createUser(user);
  
  if(resp.id !== -1){
    return res.status(HTTP_STATUS.CREATED).json(resp);
  }

  return res.status(HTTP_STATUS.NOT_ACCEPTABLE).json(resp);

}

async function updateAsync(req: ExpressReq, res: ExpressRes) : Promise<ExpressRes> {
  const user: IUserUpdate = {
    id: req.body.uid,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    dob: req.body.dob,
    avatar: req.body.avatar,
  };

  const resp = await userModel.updateUser(user);
  if(resp.id !== -1){
    return res.status(HTTP_STATUS.ACCEPTED).json(resp);
  }

  return res.status(HTTP_STATUS.NOT_FOUND).json(resp);
}

async function deleteAsync(req: ExpressReq, res: ExpressRes): Promise<ExpressRes>{
  const userId = req.body.uid;
  const resp = await userModel.deleteUser(userId);
  if(resp.id !== -1){
    return res.status(HTTP_STATUS.OK).json(resp);
  }

  return res.status(HTTP_STATUS.NOT_FOUND).json({message: "User not found"});
  
}


export default userController;