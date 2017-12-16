const http = require('http');

http.createServer((req, res) => {
  let output = '';
  req.on('data', (data) => {
    output += data.toString().toUpperCase();
  });
  req.on('end', () => {
    res.end(output);
  })
}).listen(process.argv[2]);