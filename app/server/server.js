var express = require('express');
var multer = require('multer');
var path = require('path');
var vidConverter = require("'__dirname +'./../../bower_components/frame-player/converter/nodejs_one");

var rootPath = path.normalize(__dirname +'./../client')

var app = express();

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({ storage : storage}).single('userVideo');

app.use(express.static(__dirname + '/../client'));

app.get('/',function(req,res){
      res.sendFile(path.join(rootPath + '/index.html'));
});

app.post('/app/uploads',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});

app.listen(8000);
console.log('Listening on port 8000!')
