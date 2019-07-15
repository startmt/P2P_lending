import mongoose from 'mongoose'
const uri = "mongodb://localhost:27017/test?retryWrites=true&w=majority"

const connectDatabase = () => {
  mongoose.connect(uri, { useNewUrlParser: true })
  var db = mongoose.connection
  db.on('error', console.error.bind(console, 'MongoDB connection error:'))
}
export default connectDatabase