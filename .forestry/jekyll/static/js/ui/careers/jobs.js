(function() {
    'use strict';


    if(!window.azliquidjs) {
        console.error('[!] window.azliquidjs not loaded. It is a dependencie');
        return;
    }


    var DOM = {};

    DOM.careersJobView = document.querySelector('#careersJobsView');
    if(!DOM.careersJobView) {
        console.warn('[!] Invalid DOM element - document.querySelector("#careersJobsView") :: ', DOM.careersJobVire);
        return;
    }

    DOM.jobCategoryContent = DOM.careersJobView.querySelector('#jobCategoryContent');
    if(!DOM.jobCategoryContent) {
        console.warn('[!] Invalid DOM element - document.querySelector("#jobCategoryContent") :: ', DOM.jobCategoryContent);
        return;
    }


    DOM.filterJobsForm = DOM.careersJobView.querySelector('#careersSearch');
    DOM.filterJobsFormBtn = DOM.filterJobsForm.querySelector('.btn-brand');
    DOM.filterJobsContent = DOM.careersJobView.querySelector('#filterJobs');
    // DOM.inputTitle = DOM.filterJobsContent.querySelector('input[name="title"]');
    DOM.selectArea = DOM.filterJobsContent.querySelector('select[name="area"]');
    DOM.locations = DOM.filterJobsContent.querySelector('select[name="location"]');


    //////////////////////
    // FUNCTION HELPERS //
    //////////////////////


    function filterSearchParams() {
        var urlSearchParams = new URLSearchParams(window.location.search);
        var searchParams = {
            // title: urlSearchParams.get('title') || null,
            area: urlSearchParams.get('area') || null,
            location: urlSearchParams.get('location') || null
        };

        return searchParams;
    };


    function setFilterBySearchParams() {
        var searchParams = filterSearchParams();

        // DOM.inputTitle.value = searchParams.title ? searchParams.title : ''

        if(searchParams.area) {
            var selected = DOM.selectArea.querySelector('option[selected=""]');
            var optValued = DOM.selectArea.querySelector('option[value="' + searchParams.area + '"]');

            if(selected) selected.removeAttribute('selected')
            if(optValued) optValued.setAttribute('selected', '');
        }

        if(searchParams.location) {
            var lSelected = DOM.locations.querySelector('option[selected=""]');
            var lOptValued = DOM.locations.querySelector('option[value="' + searchParams.location + '"]');

            if(lSelected) lSelected.removeAttribute('selected');
            if(lOptValued) lOptValued.setAttribute('selected', '');
        }
    };


    function whichFilterValue() {
        return {
            // title: DOM.inputTitle.value,
            area: DOM.selectArea.value !== 'all' ? DOM.selectArea.value : '',
            location: DOM.locations.value !== 'all' ? DOM.locations.value : ''
        }
    };


    /////////////////////////
    // RENDERING FUNCTIONS //
    /////////////////////////


    function clearContent() {
        DOM.jobCategoryContent.innerHTML = '';
    }


    function render(tplName, department, querie) {
        var q = 'department/'+department;

        if(querie) {
            q += ('/'+querie);
        }

        //'department/'+department
        return window.azcareers.pull.jobs(q).then(function(jobs) {
            clearContent();

            return window.azliquidjs.render(
                DOM.jobCategoryContent,
                tplName,
                {
                    lang: window.azsitelang,
                    categorie: department,
                    jobList: jobs
                }
            ).catch(function(error) {
                console.error('[!] careers/filter-jobs error rendered: ', error);
            });
        }).catch(function(error) {
            console.error('[!] window.azcareers.pull.jobs exec/request error: ', error);

            return window.azliquidjs.renderAppend(
                DOM.jobCategoryContent,
                tplName,
                {
                    lang: window.azsitelang,
                    categorie: department,
                    error: window.azsitelang != 'pt-br' ? 'Sorry, something wrong. Please try again.' : 'Desculpe, algo errado. Por favor, tente novamente.'
                }
            ).catch(function(error) {
                console.error('[!] careers/filter-jobs error rendered: ', error);
            });
        });
    }


    function renderAppend(tplName, department, querie) {
        var q = 'department/'+department;

        if(querie) {
            q += ('/'+querie);
        }

        //'department/'+department
        return window.azcareers.pull.jobs(q).then(function(jobs) {
            return window.azliquidjs.renderAppend(
                DOM.jobCategoryContent,
                tplName,
                {
                    lang: window.azsitelang,
                    categorie: department,
                    jobList: jobs
                }
            ).catch(function(error) {
                console.error('[!] careers/filter-jobs error rendered: ', error);
            });
        }).catch(function(error) {
            console.error('[!] window.azcareers.pull.jobs exec/request error: ', error);

            return window.azliquidjs.renderAppend(
                DOM.jobCategoryContent,
                tplName,
                {
                    lang: window.azsitelang,
                    categorie: department,
                    error: window.azsitelang != 'pt-br' ? 'Sorry, something wrong. Please try again.' : 'Desculpe, algo errado. Por favor, tente novamente.'
                }
            ).catch(function(error) {
                console.error('[!] careers/filter-jobs error rendered: ', error);
            });
        });
    }


    function renderMultipleAppend(list) {
        var promiseList = [];
        if(!list) list = [];

        for(var i = 0; i < list.length; i++) {
            var item = list[i];
            var q = 'department/' + item.department;

            if(item.querie) q += ('/'+ item.querie);

            promiseList.push( window.azcareers.pull.jobs(q) );
        }

        Promise.all(promiseList).then(function(res) {
            var listToRender = [];

            for(var j = 0; j < res.length; j++) {
                if(!res[j].length) continue;

                listToRender.push({
                    department: list[j].department,
                    tplname: list[j].tpl,
                    jobList: res[j]
                });
            }

            clearContent();

            if(!listToRender.length) {
                window.azliquidjs.renderAppend(
                    DOM.jobCategoryContent,
                    'careers/no-criteria-filter-all',
                    {
                        message: window.azsitelang != 'pt-br' ? "We currently don't have jobs matching your criteria :(" : "No momento, não temos vagas que correspondentes aos critérios de busca:("
                    }
                ).catch(function(error) {
                    console.error('[!] careers/filter-jobs error rendered: ', error);
                });

                return;
            }

            for(var k = 0; k < listToRender.length; k++) {
                window.azliquidjs.renderAppend(
                    DOM.jobCategoryContent,
                    listToRender[k].tplname,
                    {
                        lang: window.azsitelang,
                        categorie: listToRender[k].department,
                        jobList: listToRender[k].jobList
                    }
                ).catch(function(error) {
                    console.error('[!] careers/filter-jobs error rendered: ', error);
                });
            }
        }).catch(function(error) {
            console.error('[!] ERRR: Promise.all request serealize: ', error);
        });
    }


    function getQuerieSearchParams() {
        var qs = '';
        var whichFilterVal = whichFilterValue();
        var lctSplVal = whichFilterVal.location.split('-');

        // if(whichFilterVal.title) {
        //     qs += 'title/' + whichFilterVal.title + '/';
        // }

        if(lctSplVal.length === 3) {
            qs += 'city/'+ lctSplVal[0] + '/state/' + lctSplVal[1];
        } else if (lctSplVal.length >= 2) {
            var finalQS = '';

            if(lctSplVal[0] === 'Remote') {
                if(lctSplVal[1] === 'Brazil') {
                    finalQS = '/state/RS';
                } else if(lctSplVal[1] === 'USA') {
                    finalQS = '/state/CA';
                }
            }

            qs += 'city/'+ lctSplVal[0] + finalQS;
        }

        return qs;
    };


    function execRender() {
        var querie = getQuerieSearchParams();
        var whichFilterVal = whichFilterValue();
        var locationSplitedValue = whichFilterVal.location.split('-');

        if(whichFilterVal.area.length) {
            render('careers/jobs', whichFilterVal.area, querie);
        } else {
            renderMultipleAppend([
                {lang: window.azsitelang, tpl: 'careers/jobs-by-category', department: 'Engineering', querie: querie},
                {lang: window.azsitelang, tpl: 'careers/jobs-by-category', department: 'Operations',  querie: querie},
                {lang: window.azsitelang, tpl: 'careers/jobs-by-category', department: 'Products',    querie: querie},
                {lang: window.azsitelang, tpl: 'careers/jobs-by-category', department: 'Revenue',     querie: querie},
                {lang: window.azsitelang, tpl: 'careers/jobs-by-category', department: 'Security',    querie: querie}
            ]);
        }
    }


    ////////////////
    //   INIT    //
    ///////////////


    if(/*DOM.inputTitle &&*/ DOM.selectArea && DOM.locations) {
        setFilterBySearchParams();

        DOM.filterJobsFormBtn.addEventListener('click', function(e) {
            e.preventDefault();

            var querie = '';
            var whichFilterVal = whichFilterValue();
            var hasTitleLength = 0; //whichFilterVal.title.length;
            var hasAreaLength = whichFilterVal.area.length;
            var hasLocationLength = whichFilterVal.location.length;

            querie += hasTitleLength ? 'title=' + whichFilterVal.title + '' : '';
            querie += hasAreaLength ? ''+(hasTitleLength ? '&' : '') + 'area=' + whichFilterVal.area + '' : '';
            querie += hasLocationLength ? ''+(hasAreaLength ? '&' : '') + 'location=' + whichFilterVal.location + '' : '';

            window.location.href = encodeURI(window.location.pathname + (querie.length ? '?' : '') + querie);
        });
    }

    execRender();
})();
