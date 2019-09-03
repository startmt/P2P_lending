import express from 'express'
import http from 'http'
import routes from './route/index'
import bodyParser from 'body-parser'
import connectMongo from './mongo'
import { connectRedis } from './redis'

const app = express()
const PORT = '3000'


http.createServer(app).listen(PORT, () => {
  connectMongo()
  connectRedis()
})

app.use(bodyParser.json())
app.use(routes)