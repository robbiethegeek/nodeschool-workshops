var Hapi = require('hapi');
var path = require('path');
var server = new Hapi.Server();

var Inert = require('inert');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});
server.register(Inert, function(err){
  if (err) throw err;
})
server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: path.join(__dirname, '/index.html')
  }

});

server.start();
