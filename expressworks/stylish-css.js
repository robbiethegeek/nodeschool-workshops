var express = require('express');
var path = require('path');
var app = express();

app.use(require('stylus').middleware(path.join(process.argv[3], '*.styl')));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2] || 3000);
