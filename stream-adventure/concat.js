'use strict';

const concat = require('concat-stream');
const http = require('http');

let server = http.createServer((req, res) => {
   if (req.method === 'POST') {
       req.pipe(concat())
   } 
});