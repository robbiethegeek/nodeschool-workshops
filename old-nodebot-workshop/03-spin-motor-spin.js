var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
	var motor = new five.Motor(9);
	motor.forward(200);
	board.wait(1000, function(){
		motor.stop();
		board.wait(5000, function(){
			motor.start(200);
			board.wait(1000, function(){
				motor.stop();
			});
		})
	})
});