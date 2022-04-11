import { HTTP_STATUS } from "../enum/http.status";
import User from "./user.mongo";

const userModel = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
}

async function createUser(user: IUser): Promise<OperationResponse | IUserUpdate> {
  try {
    let resp = await User.collection.insertOne(user);
    const retUser: IUserUpdate = {
      id: resp.insertedId.toString(),
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      avatar: user.avatar,
      dob: user.dob
    }

    return retUser;

  } catch (error) {
    return { id: -1, status: HTTP_STATUS.BAD_REQUEST, message: error }
  }
}

async function updateUser(user: IUserUpdate): Promise<OperationResponse | IUserUpdate> {
  try {
    let resp = await User.findByIdAndUpdate(user.id, {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      dob: user.dob,
      avatar: user.avatar
    });

    let retUser: IUserUpdate = {
      name: user?.name,
      lastname: user?.lastname,
      email: user?.email,
      dob: user?.dob,
      avatar: user?.avatar
    };

    return retUser;

  } catch (error) {
    return { id: -1, status: HTTP_STATUS.NOT_FOUND, message: error }
  }
}

async function deleteUser(userId: string): Promise<OperationResponse> {
  try {
    let resp = await User.findByIdAndDelete(userId);
    return { id: resp?._id, status: 200, message: "ok" }
  } catch (error) {
    return { id: -1, status: 400, message: error }
  }
}

async function getUser(userId: string): Promise<IUser | IUserUpdate | OperationResponse> {
  try {
    let resp = await User.findById(userId);
    let user: IUserUpdate = {
      id: resp?.id,
      name: resp?.name,
      lastname: resp?.lastname,
      avatar: resp?.avatar,
      dob: resp?.dob,
      email: resp?.email
    }
    return user;
  } catch (error) {
    return { id: -1, status: HTTP_STATUS.BAD_REQUEST as number, message: error }
  }
}



export default userModel;