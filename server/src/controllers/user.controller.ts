import bcrypt from 'bcrypt';
import userModel from '../models/user.model';
/**
 * User controller file
 */

const userController = {
  createAsync,
  updateAsync
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
  
  return res.status(resp.status).json(resp);
}

async function updateAsync(req: ExpressReq, res: ExpressRes) : Promise<ExpressRes> {
  console.log(req.body);
  const user: IUserUpdate = {
    id: req.body.id,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    dob: req.body.dob,
    avatar: req.body.avatar,
  };

  const resp = await userModel.updateUser(user);

  return res.status(resp.status).json(resp);
}

export default userController;