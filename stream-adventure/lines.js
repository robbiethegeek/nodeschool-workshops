'use strict'

var through = require('through');
var split = require('split');
var count = 0;
var tr = through(function(line){
	if (count % 2){
		this.queue(line.toString().toUpperCase() + '\n');
	} else {
		this.queue(line.toString().toLowerCase() + '\n');
	}
	++count;
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
