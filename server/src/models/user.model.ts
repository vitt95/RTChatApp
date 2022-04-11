import User from "./user.mongo";

const userModel = {
  createUser,
  updateUser,
}

async function createUser(user: IUser): Promise<OperationResponse> {

  try {
    let resp = await User.collection.insertOne(user);
    return {status: 200, id: resp.insertedId ,message: "ok"}
  } catch (error) {
    return {status: 400, id: -1, message: error}
  }
}

async function updateUser(user: IUserUpdate): Promise<OperationResponse> {
  try {
    console.log(user.id);
    let resp = await User.findByIdAndUpdate(user.id, {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      dob : user.dob,
      avatar: user.avatar
    });
    console.log(resp);
    return {id: resp?._id, status: 200, message: "ok"}
  } catch (error) {
    return {id: -1, status: 400, message: error}
  }
}



export default userModel;