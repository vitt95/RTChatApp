import { HTTP_STATUS } from './../enum/http.status';
/**
 * Room controller file
 */
import roomModel from '../models/room.model';



const roomController = {
  createAsync,
  updateAsync
}

async function createAsync(req: ExpressReq, res: ExpressRes): Promise<ExpressRes> {  
  let room: IRoom = {
    owner: req.body.uid,
    name: !req.body.roomName ? 'randomName' : req.body.roomName,
    users: [req.body.uid],
    created_at: new Date(Date.now())
  }
  const resp = await roomModel.createRoom(room);

  if (resp.id !== -1) {
    return res.status(HTTP_STATUS.CREATED).json(resp);
  }

  return res.status(HTTP_STATUS.BAD_REQUEST).json(resp);
}

async function updateAsync(req: ExpressReq, res: ExpressRes): Promise<ExpressRes> {
  let room: IRoom = {
    id: req.body.rid,
    name: req.body.roomName,
    topic: (!!req.body.topic) && req.body.topic,
    updated_at: new Date(Date.now()),
  };

  const resp = await roomModel.updateRoom(room);

  if(resp.id !== -1){
    return res.status(HTTP_STATUS.ACCEPTED).json(resp);
  }

  return res.status(HTTP_STATUS.NOT_ACCEPTABLE).json(resp);
}

export default roomController;
