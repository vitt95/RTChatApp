/**
 * Validation user input
 */
import { body, check, validationResult } from 'express-validator';

enum RoomInput {
  roomName = 'roomName',
  name = 'name',
  topic = 'topic'
};

export const validateRoom = [
  body(RoomInput.roomName).escape(),
  body(RoomInput.name).escape(),
  body(RoomInput.topic).escape(),
  
  (req: ExpressReq, res: ExpressRes, next: Function) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(422).json({errors: errors.array()});
    }
    next();
  }
]