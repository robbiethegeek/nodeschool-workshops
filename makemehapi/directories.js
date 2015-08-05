var Hapi = require('hapi');
var path = require('path');
var server = new Hapi.Server();


server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: '/foo/bar/baz/{filename}',
  method: 'GET',
  handler: {
    directory: {
      path: path.join(__dirname, '/public')
    }
  }
});

server.start();