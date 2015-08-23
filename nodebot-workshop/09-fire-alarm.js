var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
  var speaker = new five.Piezo(9);
  var led = new five.Led(13);
  var button = new five.Button(5);
  var temp = new five.Sensor("A0");

  var threshold = 24;
  var onFire = false;
  var isReset = false;

  var sirenInterval = null;

  // Sound the alarm
  var soundAlarm = function(){
    if (onFire){
      return;
    }
    onFire = true;
    led.strobe(1000);
    sirenInterval = setInterval(function () {
      speaker.tone(five.Piezo.Notes.c4, 750)
    }, 1000)
  };
  var cancelAlarm = function(){
    console.log("alarm canceling");
    debug();

    onFire = false;
    led.stop().off();
    speaker.noTone();
    clearInterval(sirenInterval);
  };

  temp.on("change", function(){
    temp = ((this.value * 0.004882814) - 0.5) * 100;

    if (temp > threshold){
      if (!isReset){
        debug([{label: "temp", value: temp}])
        soundAlarm();
        onFire = true;
      }
    }
  });
  button.on("press", function(){
    if (!onFire){
      return;
    }
    debug();
    isReset = true;
    cancelAlarm();
    isReset = false;
  });
  var debug = function(outputs){
    console.log("onFire", onFire);
    console.log("isReset", isReset);
    if (outputs != null){

      for (var i = 0; i < outputs.length; ++i){
        console.log(outputs[i].label, outputs[i].value);
      }
    }
  }
});