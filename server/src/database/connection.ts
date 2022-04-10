import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready! ');
})

mongoose.connection.on('error', (err) => {
  console.log('Error', err);
})

export async function mongoConnect() : Promise<typeof mongoose>{
  return await mongoose.connect(process.env.MONGO_URL!);
}

export async function mongoDisconnect(): Promise<void>{
  return await mongoose.disconnect();
}