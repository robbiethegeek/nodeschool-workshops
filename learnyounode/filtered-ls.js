const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const fileExt = process.argv[3];

fs.readdir(dirPath, 'utf-8', (err, files) => {
  files.forEach((file) => {
    if (path.extname(file) === `.${fileExt}`) {
      console.log(file);
    }
  })
})