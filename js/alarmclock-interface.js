var Clock = require('./../js/alarmclock.js').alarm;

$(document).ready(function(){
  var currentTime = new Clock();
  var displayTime = function() {
    var output = currentTime.getTime();
    $('#time').text(output);
  };


setInterval(displayTime, 1000);

});
