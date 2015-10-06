var Hapi = require('hapi');
var server = new Hapi.server();
var fs = require('module');

server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 8080);
})
