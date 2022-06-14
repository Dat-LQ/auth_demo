import mongooseConnection from '../config/db/mongodb'
import mongoose from 'mongoose'

const User = new mongoose.Schema({
  username: { type: String, unique: true },
  password:{ type: String},
});

export default mongooseConnection.model('User', User)
