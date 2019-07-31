import mongoose from 'mongoose'
import redis from 'redis'
const uri = "mongodb://localhost:27017/test?retryWrites=true&w=majority"
const redisClient = redis.createClient()
const connectDatabase = () => {
  mongoose.connect(uri, { useNewUrlParser: true })
  var db = mongoose.connection
  redisClient.on('connect', function() {
    console.log('redis connected')
  })
  db.on('connected', function() {
    console.log('mongo connected')
  })
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
}
export default connectDatabase