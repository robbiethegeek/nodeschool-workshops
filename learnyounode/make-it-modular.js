const myModule = require('./mymodule.js');

myModule(process.argv[2], process.argv[3], (err, files) => {
  if (err) {
    return console.error('There was an error:', err);
  } 
  files.forEach((file) => { 
    console.log(file);
  });
});