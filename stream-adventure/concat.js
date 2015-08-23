'use strict'

var concat = require('concat-stream');
var string = '';
process.stdin.pipe(concat(function(buf){
	string += buf.toString().split('').reverse().join('');
	console.log(string)
}));
