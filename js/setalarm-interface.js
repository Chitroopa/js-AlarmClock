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
