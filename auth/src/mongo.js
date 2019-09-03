import mongoose from 'mongoose'
import env from './config'

const uri = `mongodb://${env.MONGO_HOST}:27017/test?retryWrites=true`

const connectMongo = () => {
  mongoose.connect(uri, { useNewUrlParser: true })
  // var db = mongoose.connection
  // db.on('connected', function() {
  //   console.log('mongo connected')
  // })
  // db.on('error', console.error.bind(console, 'MongoDB connection error:'))
}

export default connectMongo
