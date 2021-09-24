(function() {
    'use strict';

    function regressiveCounter() {
        var targetDate = new Date("january 15, 2021").getTime();
        var days, hours, minutes, seconds;
        var current_date = new Date().getTime();
        var seconds_f = (targetDate - current_date) / 1000;

        days = parseInt(seconds_f / 86400);
        seconds_f = seconds_f % 86400;

        hours = parseInt(seconds_f / 3600);
        seconds_f = seconds_f % 3600;

        minutes = parseInt(seconds_f / 60);
        seconds = parseInt(seconds_f % 60);

        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
    }

    // setInterval(function () {
        // document.getElementById('dia').innerHTML = days;
        // document.getElementById('hora').innerHTML = hours;
        // document.getElementById('minuto').innerHTML = minutes;
        // document.getElementById('segundo').innerHTML = seconds;
    // }, 1000);
})();
