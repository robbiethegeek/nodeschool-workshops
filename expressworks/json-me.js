var express = require('express');
var app = express();
var fs = require('fs');

var file = fs.readFileSync(process.argv[3]);
app.get('/books', function(req, res){
  res.json(JSON.parse(file.toString()));
});
app.listen(process.argv[2]);
