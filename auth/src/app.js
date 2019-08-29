import express from 'express'
import http from 'http'
import routes from './route/index'
import bodyParser from 'body-parser'
import connectMongo from './mongo'
import { connectRedis } from './redis'

const app = express()
const PORT = "3000"


http.createServer(app).listen(3000, () => {
     console.log("server status : running")
     console.log(`run on port : ${PORT}`)
     connectMongo()
     connectRedis()
})

app.use(bodyParser.json())
app.use(routes)