const split = require('split');
const through = require('through2');

let count = 0;

process.stdin.pipe(split()).pipe(through(function(line, _, next){
  count++;
  const stringLine = line.toString();
  this.push((count % 2) ? 
    `${stringLine.toLowerCase()}\n` : `${stringLine.toUpperCase()}\n`);
  next();
})).pipe(process.stdout)