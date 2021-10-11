(function() {
	'use strict';


	/*
	This set the target=_blank attribute on links using
	inner text equal ['Edite no GitHub', 'Edit on GitHub']
	*/


	var rgxHref = /https?\:\/\/github\.com\/aziontech\/(docs_en|docs_pt)\/edit\/master\/.*\/index\.md/gi;
	var aTag = document.querySelectorAll('a');
	var atagContentList = ['Edite no GitHub', 'Edit on GitHub'];

	for(var i = 0; i < aTag.length; i++) {
		var a = aTag[i];

		if(atagContentList.indexOf(a.innerText) && a.href.match(rgxHref)) {
			a.setAttribute('target', '_blank');
		}
	}
})();
