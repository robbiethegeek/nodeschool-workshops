var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify fancies up stuff', function(t){
  t.ok(fancify('Hello'), '~*-Hello-*~');
  t.end();
})
