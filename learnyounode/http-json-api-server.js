const http = require('http');
const url = require('url');
const dateFromQuerystring = ((queryString) => {
  return (new Date(queryString.split('=').pop()));
});

http.createServer((req, res) => {
  const urlData = url.parse(req.url);
  const date = new Date(urlData.query.iso);
  switch (urlData.pathname){
    case '/api/parsetime':
      res.writeHead(200, {'Content-Type': 'application/json'});
      const dateParse = dateFromQuerystring(urlData.query);
      const responseData = {
        hour: dateParse.getHours(),
        minute: dateParse.getMinutes(),
        second: dateParse.getSeconds()
      }
      res.end(JSON.stringify(responseData));
      break;
    case '/api/unixtime':
      res.writeHead(200, {'Content-Type': 'application/json'});
      const date = dateFromQuerystring(urlData.query);
      const respondData = {
        unixtime: date.getTime()
      }
      res.end(JSON.stringify(respondData));
      break;
    default:
      res.statusCode(404);
      res.end();
      break;
  }
}).listen(process.argv[2]);