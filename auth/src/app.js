import express from 'express'
import http from 'http'
import routes from './route/index'
import bodyParser from 'body-parser'
import { connectRedis } from './redis'
import cors from 'cors'
import { connectMysql } from './mysql'
const app = express()
const PORT = '3000'

http.createServer(app).listen(PORT, async () => {
  await connectMysql()
  connectRedis()
})

app.use(bodyParser.json())
app.use(cors())
app.use(routes)
app.use(bodyParser.urlencoded({ extended: true }))
