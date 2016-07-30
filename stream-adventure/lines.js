'use strict';

const split = require('split');
const through = require('through2');

const end = function(done) {
    done();
}
let lineCount = 1;
const write = function(buffer, encoding, next) {
  let line = buffer.toString();
  console.log(`${lineCount}:  ${line}`)
  if (lineCount % 2) {
    line = line.toLowerCase();
  } else {
    line = line.toUpperCase();
  }
    this.push(buffer);
    lineCount++;
    next();
};

const tr = through(write, end);
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);