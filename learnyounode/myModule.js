const fs = require('fs');
const path = require('path');

module.exports = (filePath, ext, callback) => {
  fs.readdir(filePath, (err, files) => {
    if (err) return callback(err);
    filterFiles = files.filter((file) => {
      return path.extname(file) === `.${ext}`;
    })
    callback(null, filterFiles);
  })
};
