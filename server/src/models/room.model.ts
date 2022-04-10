import { ObjectID } from 'bson';
import Room from "./room.mongo";

type OperationResponse = {
  status: number | ObjectID;
  message: string | number | unknown;
}

export async function createRoom(room: IRoom) : Promise<OperationResponse>{

  try {
    let resp = await Room.collection.insertOne(room);
    return {status: resp.insertedId, message: 'ok'};
  } catch (error) {
    return {status: 400, message: error}
  }
}