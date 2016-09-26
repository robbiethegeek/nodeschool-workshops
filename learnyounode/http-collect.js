const http = require('http');

let results = '';
http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  res.on('data', (data) => {
    results += data;
  });
  res.on('end', () => {
    console.log(`${results.length}\n${results}`);
  })
})