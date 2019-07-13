import express from 'express'
import http from 'http'
import routes from './route/index'
import bodyParser from 'body-parser'
const app = express()
const PORT = "3000"
http.createServer(app).listen(3000, () => {
     console.log("server status : running")
     console.log(`run on port : ${PORT}`)
});

app.use(bodyParser.json())
app.use(routes)