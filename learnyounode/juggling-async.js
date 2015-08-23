var http = require('http');
var bl = require('bl');

var results = [];
var count = 0;


var httpGet = function(index){
	http.get(process.argv[index + 2], function(result){
		result.pipe(bl(function(err, data){
			if (err){
				console.error(err);
			}
			results[index] = data.toString();
			count += 1;
			if (count == 3) {
				for (var i = 0; i < 3; i++){
					console.log(results[i]);
				}
			}
		}));

	});	
};

for (var i = 0; i < 3; i++){
	httpGet(i);
}