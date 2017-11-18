const http = require('http');

let results = [];
let count = 0;
for (let i = 2; i < 5; i++) {
  http.get(process.argv[i], (res) => {
    res.setEncoding('utf8');
    let result = '';
    res.on('data', (data) => {
      result += data;
    });
    res.on('end', () => {
      results[i - 2] = result;
      count++
      if (count === 3) {
        results.map((result) => {
          console.log(result)
        });
      }
    });
  })
}