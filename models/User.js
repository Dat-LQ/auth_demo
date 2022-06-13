import mongooseConnection from '../config/db/mongodb'
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
});

export default mongooseConnection.model('User', User)