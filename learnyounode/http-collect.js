const http = require('http');

let input = '';
http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  res.on('data', (data) => {
      input += data;
  })
  res.on('end', () => {
    console.log(input.length);
    console.log(input);
  })
});