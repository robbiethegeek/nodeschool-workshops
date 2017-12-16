const fs = require('fs');
const path = require('path');

module.exports = (directory, fileExt, callback) => {
  const fullExt = `.${fileExt}`;

  fs.readdir(directory, (err, files) => {
    if (err) {
      return callback(err);
    }
    const filteredFiles = files.filter((file) => {  
      return path.extname(file) == fullExt;
    });
    callback(null, filteredFiles);
  });
};