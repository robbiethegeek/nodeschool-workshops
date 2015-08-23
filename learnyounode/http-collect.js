var http = require('http');
var bl = require('bl');

var url = process.argv[2];
var responseData ='';
http.get(url, function(response){
   response.pipe(bl(function(err, data){
   		if (err) {
   			return console.error(err);
   		}
       responseData = data.toString();
       console.log(responseData.length)
       console.log(responseData)
   }));
    
});

