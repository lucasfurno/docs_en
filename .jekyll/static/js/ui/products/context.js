(function() {
	///////////////////////////////////////////
    // PRODUCTS TAB WEBPAGE AND URL BEHAVIOR //
    ///////////////////////////////////////////


    function openTabContent(idTab) {
        if(!idTab) {
            console.log('[!] idTab invalid', idTab);
            return;
        }

        var contentFromTab = document.querySelector('#' + idTab);
        var tab = document.querySelectorAll('.tabs-title[data-tabs-target='+idTab+']')[0] || null;

        if(tab && contentFromTab) {
            contentFromTab.classList.add('is-active');
            tab.classList.add('is-active');
        }
    }

    function resetActivePanel() {
        var tabContent = document.querySelector('#tabContent');
        var allTabActive = tabContent.querySelectorAll('.is-active');

        for(var i = 0; i < allTabActive.length; i++) {
            allTabActive[i].classList.remove('is-active');
        }


        var tabsContent = document.querySelector('#tabsContent');
        var allTabsContentActive = tabsContent.querySelectorAll('.is-active');

        for(var i = 0; i < allTabsContentActive.length; i++) {
            allTabsContentActive[i].classList.remove('is-active');
        }
    }

    function bindTabClickEvent() {
        var tabContent = document.querySelector('#tabContent');

        tabContent.addEventListener('click', function(e) {
            var clickedAttr = e.target.getAttribute('data-tabs-target');

            history.pushState({id: clickedAttr}, '', '#' + clickedAttr);
        });
    };

    function pageComingFrom() {
        var referrer = document.referrer.length ? document.referrer.split('/') : [];
        var comingFrom = referrer[referrer.indexOf('products')] || referrer[referrer.indexOf('produtos')] || referrer[referrer.indexOf('pricing')] || referrer[referrer.indexOf('precos')];

        return comingFrom || '';
    };

    (function(global) {
        var isPricingOrProducts = document.querySelector('#ProductView');

        if(!isPricingOrProducts) {
            return;
        }

        var locationHREF = window.location.href;
        var isLangEn = /\/en\//.test(locationHREF);
        var isLangPTBR = /\/pt-br\//.test(locationHREF);
        var isOverview = /#overview|#visao-geral/.test(locationHREF);
        var isPricing = /#pricing|precos/.test(locationHREF);
        var comingFrom = pageComingFrom();
        var idOpened;

        if(comingFrom.length) {
            // when it has document.referrer
            if(isLangEn) {
                idOpened = (comingFrom === 'products' || comingFrom === 'produtos') ? 'overview' : comingFrom === 'pricing' ? 'pricing' : '';
            } else if (isLangPTBR) {
                idOpened = (comingFrom === 'produtos' || comingFrom === 'products') ? 'visao-geral' : comingFrom === 'precos' ? 'precos' : '';
            }
        } else if(isOverview) {
            idOpened = isLangEn ? 'overview' : 'visao-geral';
        }else if(isPricing) {
            idOpened = isLangEn ? 'pricing' : 'precos';
        } else {
            // no document.referrer
            // no anchor in the url
            idOpened = isLangEn ? 'overview' : 'visao-geral';
        }

        bindTabClickEvent();
        openTabContent(idOpened);

        global.onpopstate = function(e) {
            resetActivePanel();
            openTabContent(e.state ? e.state.id : idOpened);
        };

    })(window);
})();

