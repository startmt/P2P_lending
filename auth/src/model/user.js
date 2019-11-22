import mongoose from 'mongoose'

const Schema = mongoose.Schema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    unique: false,
  },
  isIdentify: {
    type: Boolean,
    unique: false,
  },
  role:{
    type: String,
    unique: false
  },
  scbRefresh: {
    type: String,
    unique: true
  },
  
})

const User = mongoose.model('User', userSchema)

export default User
