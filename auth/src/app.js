import express from 'express';
import http from 'http';
const app = express();
const PORT = "3000";
http.createServer(app).listen(3000, () => {
     console.log("server status : running");
     console.log(`run on port : ${PORT}`);
});
app.use("*", (req, res) => {
     console.log("enter route");
     let text = "Hi <a href='https://medium.com/bakatest-          me'>https://medium.com/bakatest-me</a>";
     return res.send(text);
})