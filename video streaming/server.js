const express = require("express");
const app = express();

const port = 3000

const routerVideo = require("./video.js")

app.get("/",routerVideo)

app.listen(port,()=>{
    console.log("server running on port : " + port);
    console.log("http://localhost:"+port)
})