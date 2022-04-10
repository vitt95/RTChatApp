import { dummyUsers } from './../dummy/users.dummy';
import { dummyRooms } from './../dummy/rooms.dummy';
import { dummyMessages } from './../dummy/messages.dummy';
import User from "../models/user.mongo";
import Room from '../models/room.mongo';
import Message from '../models/message.mongo';



export async function seedFakeUsers() {

  User.collection.insertMany(dummyUsers, (err, docs) => {
    if(err){
      return console.error(err);
    }else console.log('Multiple Users inserted to Collection..');
  })
}

export async function seedFakeRooms(){
  Room.collection.insertMany(dummyRooms, (err, docs) => {
    if(err){
      return console.error(err);
    }else console.log('Multiple Rooms inserted to Collection..');
  })
} 

export async function seedFakeMessages(){
  Message.collection.insertMany(dummyMessages, (err, docs) => {
    if(err){
      return console.error(err);
    }else console.log('Multiple Messages inserted to Collection');
  })
}



