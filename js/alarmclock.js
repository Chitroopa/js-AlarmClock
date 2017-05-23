function Clock() {

}

Clock.prototype.getTime = function () {
  return moment().format('MMMM Do YYYY h:mm:ss A ');
};



exports.alarm = Clock;
