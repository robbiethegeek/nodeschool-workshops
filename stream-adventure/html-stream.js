const through = require('through2');
const tr = require('trumpet')();


const stream = tr.select('.loud').createStream();
  stream.pipe(through(function(buf, enc, next){
  this.push(buf.toString().toUpperCase());
  next();
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);