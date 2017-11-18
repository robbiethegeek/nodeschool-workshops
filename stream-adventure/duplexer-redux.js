const duplexer = require('duplexer2');
const through = require('through2').obj;


module.exports = (counter) => {
  let counts = {};
  const write = (buf, enc, next) => {
    counts[buf.country] = (counts[buf.country] || 0) + 1;
    next();
  }
  const end = (done) => { counter.setCounts(counts); done(); }
  const input = through(write, end);
  return duplexer({objectMode: true}, input, counter);

}