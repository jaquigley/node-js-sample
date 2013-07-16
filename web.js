var express = require('express');
var fs = require('fs');
var buff = new Buffer(fs.readFileSync('./web.js'));

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fs.readFileSync(buff.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
