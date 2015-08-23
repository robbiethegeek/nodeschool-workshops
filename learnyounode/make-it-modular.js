var myModule = require('./my-module.js');

var fileExt = process.argv[3];
var filePath = process.argv[2];

var callback = function(err, data){
    if (err){
        return err;
    }
    data.forEach(function(file){
        console.log(file);
    });
};
myModule(filePath, fileExt, callback)