const http = require('http');

const urls = process.argv.slice(2);
let count = 0;
let output = [];

urls.forEach((url, index) => {
  http.get(url, (res) => {
    let siteData = '';
    res.setEncoding('utf8');
    res.on('data', (data) => {
      siteData += data;
    });
    res.on('end', () => {
      count++;
      output[index] = siteData;
      if (count === 3) {
        output.forEach((data) => {
          console.log(data);
        })
      }
    });
  })
}); 