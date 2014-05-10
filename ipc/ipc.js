(function() {
	Reveal.addEventListener('ready', function() {
		if (window.location.search.match( /print-pdf/gi )) {
			Array.prototype.forEach.call(document.getElementsByTagName('section'), function(section) {
				var style = section.getAttribute('style') || '';
				
				section.setAttribute('style',  style + ';' + 'padding-top: 2.5cm !important');
				
			});
		}
});
})();