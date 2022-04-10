import { Schema , model, connect } from 'mongoose';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true},
  lastname: {type: String, required: true},
  email: { type: String, required: true, unique: true},
  password: {type: String, required: true},
  avatar: {type: String},
});

// Get mongoose's model
const User = model('User', userSchema);

export default User;