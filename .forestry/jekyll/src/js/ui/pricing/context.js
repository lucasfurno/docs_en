(function () {
    //monitors the screen position and changes `active` class on table sidebar
    new ScrollSpy({
        spySections: ".product-content-area",
        stopWorkingBiggerThan: 960,
        spyOptions: {
            rootMargin: "200px",
            threshold: 0.75,
        },
    });

    //dropdown for product table area
    new DropdownToggle({
        dropdownLinks: ".dropdown-button",
        dropdownAreas: ".dropdown-content",
    });

    //dropdown sticky table sidebar menu under 960
    new DropdownSticky({
        dropdownLinks: ".sidebar-button-mobile",
        dropdownAreas: ".sticky-sidebar",
        stickyElementParentOffest: "64px",
        stickyChildLinks: ".sidebar-link",
    });
})();
