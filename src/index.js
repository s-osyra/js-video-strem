const express = require('express');
const port = 3000;
const path = require('path');
const videoService = require ('./utilis/stream-video');
const fs = require('fs');

const app = express();

const publicDirectoryPath =  path.join(__dirname, '/../public');
app.use(express.static(publicDirectoryPath));


app.get('/', function(req, res) {
    res.sendFile('index.html');
  })

app.get ('/video', (req, res) => {

    const videoPath = path.join(__dirname + '/../public/video/sample-mp4-file.mp4');
    videoService(videoPath, req, res);
})



app.listen( port, () => {
    console.log(`Server is listerning at port: ${port}.`); 
})



