import User from "./user.mongo";

const userModel = {
  createUser
}

async function createUser(user: IUser): Promise<OperationResponse> {

  try {
    let resp = await User.collection.insertOne(user);
    return {status: 200, id: resp.insertedId ,message: "ok"}
  } catch (error) {
    return {status: 400, id: -1, message: error}
  }
}

export default userModel;