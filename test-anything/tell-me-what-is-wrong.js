var assert = require('assert');
var isCoolNumber = require(process.argv[2]);

assert.equal(true, isCoolNumber(42));
