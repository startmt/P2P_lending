import mongoose from 'mongoose'

const Schema = mongoose.Schema
const tokenSchema = new Schema({
  jwt: {
    type: String,
    unique: true,
  }
});

const Token = mongoose.model('Token', tokenSchema)

export default Token