import { Schema, model, connect } from 'mongoose';
import User from './user.mongo';

const roomSchema = new Schema<IRoom>({
  name: {type: String, required: true},
  topic: {type: String},
  owner: {type: String},
  users: [{type: Schema.Types.ObjectId, ref: 'User'}],
  messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
  created_at: {type: Date, required: true},
  updated_at: {type: Date},
  deleted_at: {type: Date},
})

const Room = model('Room', roomSchema);

export default Room;