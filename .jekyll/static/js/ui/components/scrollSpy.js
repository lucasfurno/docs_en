class ScrollSpy {
    constructor(settings) {
        this.spySections = document.querySelectorAll(settings.spySections);
        this.spyOptions = settings.spyOptions;
        this.stopWorkingBiggerThan = settings.stopWorkingBiggerThan;
        this.observeUI(this);
    }
    observeUI(self) {
        function handleObserve(entry, obs) {
            if (window.innerWidth <= self.stopWorkingBiggerThan) return;
            if (entry[0].isIntersecting && window.innerWidth >= 960) {
                const sectionId = entry[0].target.id;
                self.handleUI(sectionId);
            }
        }

        const spy = new IntersectionObserver(handleObserve, self.spyOptions)

        this.spySections.forEach(spySection => {
            spy.observe(spySection);
        })
    }

    handleUI(sectionId) {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('a[href*=' + sectionId + ']').classList.add('active');
    }
}