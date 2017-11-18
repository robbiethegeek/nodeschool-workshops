const filterFiles = require('./myModule');

filterFiles(process.argv[2], process.argv[3], (err, files) => {
  if (err) console.log(err);
  files.map((file) => console.log(file));
});