var test = require('tape');
var repeatedCallback = process.argv[2];

test('test repeatedCallback is called multiple times', function(t){
    t.plan(4);
    repeatedCallback(4, function(){
      t.pass('callback called.');
    })
});
