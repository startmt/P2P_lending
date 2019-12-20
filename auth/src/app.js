import express from 'express'
import http from 'http'
import routes from './route/index'
import bodyParser from 'body-parser'
import connectMongo from './mongo'
import { connectRedis } from './redis'
import cors from 'cors'
const app = express()
const PORT = '3000'

http.createServer(app).listen(PORT, () => {
  connectMongo()
  connectRedis()
})

app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors())
app.use(routes)
app.use(bodyParser.urlencoded({ extended: true }));
