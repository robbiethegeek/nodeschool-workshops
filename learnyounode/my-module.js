var fs = require('fs');
var path = require('path');

var files = [];
module.exports = function(filePath, fileExt, callback){
    fs.readdir(filePath, function(err, list){
        if (err){
           return callback(err, null);
        }
        list = list.filter(function(file){
            return path.extname(file) === "." + fileExt;
        });
        callback(null, list);
    });

}