window.addEventListener('scroll', function (ev) {

    var ctaHeader = document.getElementById('btn-cta-header');
    var btnHero = document.getElementById('btn-hero');
    var distanceToTop = btnHero.getBoundingClientRect().top;

    if (distanceToTop <= 0) {
        ctaHeader.style.visibility = 'visible';
        ctaHeader.style.opacity = '1';
    } else {
        ctaHeader.style.visibility = 'hidden';
        ctaHeader.style.opacity = '0';
    }

});