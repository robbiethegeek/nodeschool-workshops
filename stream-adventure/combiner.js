const combine = require('stream-combiner');
const split = require('split');
const through = require('through2');
const zlib = require('zlib');

module.exports = () => {
  const write = function(line, _ , next){
    if (line.length === 0) { next(); }
    const jsonObj = JSON.parse(line);
    console.log(jsonObj)
    
    this.push(jsonObj);
    next();
  };
  const end = (done) => { done(); };  
  const grouper = through(write, end);

  return combine(split(), grouper, zlib.createGzip()
      // read newline-separated json,
      // group books into genres,
      // then gzip the output
  )
}