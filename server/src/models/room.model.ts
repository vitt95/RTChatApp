import Room from "./room.mongo";

const roomModel = {
  createRoom
}

async function createRoom(room: IRoom) : Promise<OperationResponse>{
  try {
    let resp = await Room.collection.insertOne(room);
    return {status: 200, id: resp.insertedId ,message: 'ok'};
  } catch (error) {
    return {status: 400, id: -1, message: error}
  }
}


export default roomModel;