var net = require('net');

var server = net.createServer(function(socket){
	var date = new Date();
	//"2013-07-06 17:42"
	var output = date.getFullYear() + "-" + date.getMonth() + 1  + "-" + date.getDate() +
		" " + date.getHours() + ":" + date.getMinutes() + "\n"
	socket.write(output);
	socket.end();
});
server.listen(process.argv[2]);