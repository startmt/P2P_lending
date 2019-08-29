import mongoose from 'mongoose'

const { MONGO_HOST } = process.env

const uri = `mongodb://${MONGO_HOST}:27017/test?retryWrites=true`

const connectMongo = () => {
  mongoose.connect(uri, { useNewUrlParser: true })
  var db = mongoose.connection
  db.on('connected', function() {
    console.log('mongo connected')
  })
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
}

export default connectMongo