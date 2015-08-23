var fs = require('fs');

var file = process.argv[2];
var fileBuffer = fs.readFileSync(file);
var fileContents = fileBuffer.toString();
var fileLines = fileContents.split('\n');
console.log(fileLines.length - 1);