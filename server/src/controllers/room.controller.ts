/**
 * Room controller file
 */
import roomModel from '../models/room.model';
import { check } from 'express-validator';


const roomController = {
  createAsync,
  updateAsync
}

async function createAsync(req: ExpressReq, res: ExpressRes): Promise<any> {

  console.log(req.body.roomName);
  
  let room: IRoom = {
    owner: req.body.uid,
    name: !req.body.roomName ? 'randomName' : req.body.roomName,
    users: [req.body.uid],
    created_at: new Date(Date.now())
  }

  const resp = await roomModel.createRoom(room);

  if (resp.status !== 400) {
    return res.json(resp);
  }
}

async function updateAsync(req: ExpressReq, res: ExpressRes): Promise<any> {

}

export default roomController;
