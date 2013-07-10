var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var str = '';
var filename = 'index.html';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  console.log('OK: ' + filename);
  console.log(data);
  str = data;
});


app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
