var fs = require('fs');
var path = require('path')
var fileExtension = process.argv[3];
var filePath = process.argv[2];

fs.readdir(filePath, function(err, list){
    list.forEach(function(file){
        if (path.extname(file) === "." + fileExtension){
            console.log(file);
        }
    });

})