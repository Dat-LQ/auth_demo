import mongoose from 'mongoose'
const mongooseConnection = mongoose.createConnection(process.env.MONGO_DB_URL)
// console.log(mongooseConnection)

export default mongooseConnection
