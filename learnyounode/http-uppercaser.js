var http = require('http');

console.log(process.argv);
var server = http.createServer(function(req, res){
	http.post(function(req, res){
		req.pipe(function(response){
			response.on('data', function(data){
				console.log(data.toString())
			});
		});
	});
}).listen(process.argv[2]);	

