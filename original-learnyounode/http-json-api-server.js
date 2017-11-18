const http = require('http');
const url = require('url');


const parseTime = (req, res, urlParts) => {
  const iso = new Date(urlParts.query.split('=')[1]);
  const result = {
    hour: iso.getHours(),
    minute: iso.getMinutes(),
    second: iso.getSeconds()
  }
  
  res.writeHead(200, {'Content-Type': 'applicaition/json'});
  res.write(JSON.stringify(result));
  res.end();
};
const unixTime = (req, res, urlParts) => {
  const iso = new Date(urlParts.query.split('=')[1]);
  const result = {
    unixtime: iso.getTime()
  }
  
  res.writeHead(200, {'Content-Type': 'applicaition/json'});
  res.write(JSON.stringify(result));
  res.end();
};
const server = http.createServer((req, res) => {
  if (req.method === 'GET'){
    const urlParts = url.parse(req.url);
    switch (urlParts.pathname) {
      case '/api/parsetime':
        parseTime(req, res, urlParts);
        break;
      case '/api/unixtime':
        unixTime(req, res, urlParts);
        break;
    
      default:
        break;
    };
  }
})

server.listen(process.argv[2]);