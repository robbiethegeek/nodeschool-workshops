const http = require('http');
const fs = require('fs');
const through = require('through2');

const write = function(buff, encoding, next){
  this.push(buff.toString().toUpperCase());
  next();
};

const end = (done) => { done() };
const tr = through(write, end);

const server = http.createServer((req, res) => {
  if (req.method === 'POST'){
    req.pipe(tr).pipe(res);
  }
});

server.listen(process.argv[2]);