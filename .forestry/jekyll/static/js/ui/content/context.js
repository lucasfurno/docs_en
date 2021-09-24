(function() {
    'use strict';

    (function appRegressiveCounter() {
        function numberToArray(n) {
            return Array.from(String(n), Number);
        };

        function regressiveCounter(data) {
            //data.date = 'October 28, 2020 14:00:00'
            if(!data || !data.date) {
                console.log('[!] Invalid regressiveCounter data param :: ', data);
                return;
            }

            var targetDate = new Date(data.date).getTime();
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
                days: days < 0 ? 0 : days,
                hours: hours < 0 ? 0 : hours,
                minutes: minutes < 0 ? 0 : minutes,
                seconds: seconds < 0 ? 0 : seconds
            }
        }

        function innerHTMLTime() {
            var c = document.querySelector('#regressiveCounter');

            if(!c || !c.getAttribute('data-date')) {
                console.log('[!] Invalid #regressiveCounter element :: ', c)
                return;
            }

            var d = regressiveCounter({date: c.getAttribute('data-date') || null});

            if(!d) {
                console.log('[!] Invalid regressiveCounter calcule :: ', d)
                return;
            }

            var daysContent = c.querySelector('#days');
            var hoursContent = c.querySelector('#hours');
            var minutesContent = c.querySelector('#minutes');
            var secondsContent = c.querySelector('#seconds');

            var nListDays = numberToArray(d.days);
            var nListHours = numberToArray(d.hours);
            var nListMinutes = numberToArray(d.minutes);
            var nListSeconds = numberToArray(d.seconds);

            daysContent.querySelectorAll('span')[0].innerHTML = (nListDays.length > 1) ? nListDays[0] : 0;
            daysContent.querySelectorAll('span')[1].innerHTML = (nListDays.length > 1)  ? nListDays[1] : nListDays[0];

            hoursContent.querySelectorAll('span')[0].innerHTML = (nListHours.length > 1) ? nListHours[0] : 0;
            hoursContent.querySelectorAll('span')[1].innerHTML = (nListHours.length > 1) ? nListHours[1] : nListHours[0];

            minutesContent.querySelectorAll('span')[0].innerHTML = (nListMinutes.length > 1) ? nListMinutes[0] : 0;
            minutesContent.querySelectorAll('span')[1].innerHTML = (nListMinutes.length > 1) ? nListMinutes[1] : nListMinutes[0];

            secondsContent.querySelectorAll('span')[0].innerHTML = (nListSeconds.length > 1) ? nListSeconds[0] : 0;
            secondsContent.querySelectorAll('span')[1].innerHTML = (nListSeconds.length > 1) ? nListSeconds[1] : nListSeconds[0];
        };

        var c = document.querySelector('#regressiveCounter');
        if(c) {
            setInterval(function () {
                innerHTMLTime();
            }, 1000);
        }
    })();

    function renderAppend(tplName) {
        try {
            return new Promise(function(resolve, reject) {
                var Liquid = window.liquidjs.Liquid;
                var engine = new Liquid({extname: '.html', cache: false});
                var content = document.querySelector('#boxListContent');

                if(!content) {
                    console.log('[!] Not found #boxListContent element.');
                    return;
                }

                engine.parseAndRender(
                    "{% include '/static/templates/content/" + String(window.liquidjstpl.content.id || 'unknown') + "/" + tplName + ".html' %}",
                    window.liquidjstpl.content || {}
                ).then(function(html) {
                    content.innerHTML = html;
                    resolve();
                });
            });
        } catch(e) {
            console.error(error);
        }
    };

    window.addEventListener('small', function() {
        renderAppend('slide').then(function() {
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination'
                },
            });
        });
    });

    window.addEventListener('medium', function() {
        renderAppend('slide').then(function() {
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination'
                },
            });
        });
    });

    window.addEventListener('large', function() {
        renderAppend('list');
    });

    window.addEventListener('xlarge', function() {
        renderAppend('list');
    });

    window.addEventListener('xxlarge', function() {
        renderAppend('list');
    });

    window.addEventListener('xxxlarge', function() {
        renderAppend('list');
    });
})();
