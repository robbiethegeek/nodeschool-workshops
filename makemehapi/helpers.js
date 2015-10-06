var Hapi = require('hapi');
var server = new Hapi.Server();
var Vision = require('vision');
var Path = require('path');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080)
});

server.register(Vision, function(err){
  if (err) throw err;

  server.route({
    path: '/',
    method: 'GET',
    handler: {
      view: 'index-helper.html'
    }
  });

  server.views({
    engines: {
      html: require('handlebars')
    },
    path: Path.join(__dirname + '/templates'),
    helpersPath: 'helpers'
  });
  server.start(function*(err){
    if (err) throw err;
    console.log("Server running on: " + server.info.uri);
  })
});
