import { HTTP_STATUS } from './../enum/http.status';
import Room from "./room.mongo";

const roomModel = {
  createRoom,
  updateRoom
}

async function createRoom(room: IRoom): Promise<OperationResponse>{
  try {
    let resp = await Room.collection.insertOne(room);
    return {status: 200, id: resp.insertedId, message: 'ok'};
  } catch (error) {
    return {status: 400, id: -1, message: error}
  }
}

async function updateRoom(room: IRoom): Promise<IRoom | OperationResponse>{
  try {
    const resp = await Room.findByIdAndUpdate({_id: room.id!}, {
      name: room.name,
      topic: (!!room.topic) && room.topic,
      updated_at: room.updated_at
    });

    const retRoom: IRoom = {
      name: !room.name ? resp!.name : room.name,
      topic: !room.topic ? resp!.topic : room.topic,
      created_at: !room.created_at ? resp!.created_at : room.created_at,
      id: !room.id ? resp!.id : room.id,
      deleted_at: !room.deleted_at ? resp!.deleted_at : room.deleted_at,
      owner: !room.owner ? resp!.owner : room.owner,
      updated_at: !room.updated_at ? resp!.updated_at : room.updated_at,
      users: !room.users ? resp!.users : room.users
    }

    return retRoom;

  } catch (error) {
    return {id: -1, status: HTTP_STATUS.BAD_REQUEST, message: error}
  }
}


export default roomModel;