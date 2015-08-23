'use strict'
var combine = require('stream-combiner');
var through = require('through2').obj;
var duplexer = require('duplexer');
var zlib = require('zlib');	

module.exports = function () {
	var grouper = through(write, end);
	var current;
	
    return combine(
        // read newline-separated json,
        // group books into genres,
        // then gzip the output
    )
}