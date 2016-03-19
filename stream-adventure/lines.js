'use strict';

const split = require('split');
const through = require('through2');

const end = function(done) {
    done();
}
let lineCount = 0;
const write = function(buffer, encoding, next) {
    if (lineCount % 2){
        buffer = buffer.toString().toUpperCase();
    } else {
        buffer = buffer.toString().toLowerCase()
    }
    this.push(buffer);
    lineCount++;
    next();
};

const tr = through(write, end);
process.stdin.pipe(tr).pipe(process.stdout);