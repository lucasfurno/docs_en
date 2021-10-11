(function(global, pageView) {
	'use strict';

	if(!pageView) {
		return;
	}

	var listProductElement = pageView.querySelectorAll('#productsContent > .item');
	var isActiveClass = 'item-active';

	function resetActiveClass() {
		for(var i = 0; i < listProductElement.length; i++) {
			listProductElement[i].classList.remove(isActiveClass)
		}
	}

    function openUmbrella(domel) {
        var umbrellaArrow = document.querySelector('#umbrellaArrow');

        umbrellaArrow.style.left = String(domel.offsetLeft) + 'px';
    }

	function clickEvent(domElement) {
		domElement.addEventListener('click', function(e) {
			if(!domElement.classList.contains(isActiveClass)) {
				resetActiveClass();
				domElement.classList.add(isActiveClass);

                var productsContentItens = document.querySelector('#productsContentItens');
                var attr = domElement.getAttribute('data-category') || null;
                var tplData = window.liquidjstpl.products[attr] || null;

                if(!tplData) {
                   console.warn('[!] attr ::', attr);
                   console.warn('[!] Invalid window.liquidjstpl.products[attr] object ::', tplData);
                   return;
                }

                renderAppend('itens', tplData).then(function() {
                    openUmbrella(domElement, tplData);
                });
			}
		});
	}

    function renderAppend(tplName, data) {
        try {
            return new Promise(function(resolve, reject) {
                var Liquid = window.liquidjs.Liquid;
                var engine = new Liquid({extname: '.html', cache: false});
                var content = document.querySelector('#productsContentItens');

                if(!content) {
                    console.log('[!] Not found #productsContentItens element.');
                    return;
                }

                engine.parseAndRender(
                    "{% include '/static/templates/pricing-products/" + tplName + ".html' %}",
                    data || {}
                ).then(function(html) {
                    content.innerHTML = html;
                    resolve();
                });
            });
        } catch(e) {
            console.error(error);
            return new Promise.reject(error);
        }
    };

	// binding evet
	for(var i = 0; i < listProductElement.length; i++) {
		clickEvent(listProductElement[i]);
	}

    var tplData = window.liquidjstpl.products.edgeComputing;
    renderAppend('itens', tplData).then(function() {
        openUmbrella(
            document.querySelectorAll('.item-edge-computing')[0],
            tplData
        );
    });
})(
	window, document.querySelector('#pricingView') ||
	document.querySelector('#productsView')
);
