(function() {
    'use strict';


    function bindingClickEvent() {
        var featureBlockContent = document.querySelector('#featureBlockContent');

        if(!featureBlockContent) {
            console.log('[!] Not found #featureBlockContent element.');
            return;
        }

        featureBlockContent.addEventListener('click', function(e) {
            var target = e.target;

            while(true) {
                if(target.tagName === 'BODY') {
                    break;
                }

                if(target.tagName === 'A' && target.classList.contains('btn-features')) {
                    var isActive = target.parentElement.classList.contains('active');
                    var elementToActive = target.parentElement.classList;

                    if(isActive) {
                        elementToActive.remove('active')
                    } else {
                        elementToActive.add('active')
                    }

                    break;
                }

                target = target.parentElement;
            }
        });
    };


    function renderAppend(tplName) {
        try {
            return new Promise(function(resolve, reject) {
                var Liquid = window.liquidjs.Liquid;
                var engine = new Liquid({extname: '.html', cache: false});
                var tableBoxContent = document.querySelector('#tableBoxContent');

                if(!tableBoxContent) {
                    console.log('[!] Not found #tableBoxContent element.');
                    return;
                }

                engine.parseAndRender(
                    "{% include '/static/templates/support/" + tplName + ".html' %}",
                    window.liquidjstpl.support || {}
                ).then(function(html) {
                    tableBoxContent.innerHTML = html;
                    resolve();
                });
            });
        } catch(e) {
            console.error(error);
        }
    };


    window.addEventListener('small', function() {
        renderAppend('block').then(function() {
            bindingClickEvent();
        });
    });

    window.addEventListener('medium', function() {
        renderAppend('block').then(function() {
            bindingClickEvent();
        });
    });

    window.addEventListener('large', function() {
        renderAppend('table');
    });

    window.addEventListener('xlarge', function() {
        renderAppend('table');
    });

    window.addEventListener('xxlarge', function() {
        renderAppend('table');
    });

    window.addEventListener('xxxlarge', function() {
        renderAppend('table');
    });
})();
