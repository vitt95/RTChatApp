import { Schema, model } from 'mongoose';

const messageSchema = new Schema<IMessage>({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  room: {type: Schema.Types.ObjectId, ref: 'Room', required: true},
  body: {type: String, required: true},
  created_at: {type: Date, required: true},
  status: { type: Number, required: true, enum: MESSAGE_STATUS}
});

const Message = model('Message', messageSchema);

export default Message;