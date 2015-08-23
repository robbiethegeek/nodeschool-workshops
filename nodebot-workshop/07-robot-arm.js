var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  var sensor = new five.Sensor("A2");
  var servo = new five.Servo(9);
  //servo.sweep();
  sensor.on("data", function(){
    var position = five.Fn.map(this.value, 0,1023, 0,179);
    servo.to(position);
  })
});