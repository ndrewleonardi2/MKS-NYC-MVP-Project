var express = require('express');
var path = require('path');

var app = express();

var rootPath = path.normalize(__dirname +'./../client')

app.use(express.static('client'));

app.get('/', function(request, response){
  response.sendFile(path.join(rootPath + '/index.html'));
})

app.listen(8000);
console.log('Listening on port 8000!')
