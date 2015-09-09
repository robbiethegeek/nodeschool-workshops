var http = require('http');
var fs = require('fs');
var through = require('through2');

var server = http.createServer(function(req, res){
	if (req.method === 'POST'){
		req.pipe(through(write, end)).pipe(res);
	} else {
		res.end("send me POSTs")
	}
}).listen(parseInt(process.argv[2]));

var write = function(buf, _, next){
	this.push(buf.toString().toUpperCase());
	next();
}

var end = function(done){
	done();
}
