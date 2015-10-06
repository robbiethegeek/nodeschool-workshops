var Hapi = require('hapi');
var path = require('path');
var server = new Hapi.Server();


server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(require('inert'), function(err){
  if (err) throw err;

  server.route({
    path: '/',
    method: 'GET',
    handler: {
      file: path.join(__dirname, '/public/index.html')
    }
  });
  server.start(function(err){
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
  });
});
