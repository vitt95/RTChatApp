/**
 * Room controller file
 */
import { createRoom } from '../models/room.model';

const roomController = {
  createAsync,
}

async function createAsync(req: ExpressReq, res: ExpressRes): Promise<any> {
  let room: IRoom = {
    owner: req.body.uid,
    name: !req.body.roomName ? 'randomName' : req.body.roomName,
    users: [req.body.uid],
    created_at: new Date(Date.now())
  }

  const resp = await createRoom(room);

  if(resp.status !== 400){
    return res.json(resp);
  }
}

export default roomController;
