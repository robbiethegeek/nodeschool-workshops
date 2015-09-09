var crypto = require('crypto');
var tar = require('tar');
var parser = tar.Parse();
var zlib = require('zlib');
var concat = require('concat-stream');


var gunzip = zlib.createGunzip();

var cipherName = process.argv[2];
var cipherPassphrase = process.argv[3];

parser.on('entry', function(entry){
  var hasher = crypto.createHash('md5', {encoding: 'hex'});
  if (entry.type !== 'File'){
    return;
  }
  entry.pipe(hasher).pipe(concat(function(hash){
      console.log(hash + ' ' + entry.path);
  }));
});

var cipher = crypto.createDecipher(cipherName, cipherPassphrase);

process.stdin.pipe(cipher).pipe(gunzip).pipe(parser);
