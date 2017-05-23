(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Clock() {

}

Clock.prototype.getTime = function () {
  return moment().format('MMMM Do YYYY h:mm:ss A ');
};



exports.alarm = Clock;

},{}],2:[function(require,module,exports){
var Clock = require('./../js/alarmclock.js').alarm;

$(document).ready(function(){
  var currentTime = new Clock();
  var displayTime = function() {
    var output = currentTime.getTime();
    $('#time').text(output);
  };


setInterval(displayTime, 1000);

});

$(document).ready(function(){
   $('#form1').submit(function(event) {
     event.preventDefault();
     var hours = parseInt($('.hours').val());
     var mins = parseInt($('#alarm').val());
     var amPm = $('.am-pm').val();

     var alarmTime = function() {
       var currentHour = parseInt(moment().format('h'));
       var currentMins = parseInt(moment().format('mm'));
       var currentAmpm = moment().format('A');
       if ((amPm === currentAmpm) && (hours === currentHour) && (mins === currentMins)) {
         $("#clock").show();
       }
       else {
         $("#clock").hide();
       }
     };
   setInterval(alarmTime, 1000);
   });
});

},{"./../js/alarmclock.js":1}]},{},[2]);
