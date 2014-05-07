/* global Reveal */

(function() {
	
	function addBackgroundExtra(config) {
		var backgrounds = document.querySelectorAll('.slide-background');
		
		for (var classname in config) {
			if (!config.hasOwnProperty(classname)) {
				continue;
			}
			
			Array.prototype.forEach.call(backgrounds,
				function(backgroundElement) {
					if (backgroundElement.querySelector('.slide-background')) return;
					
					var logoElement = document.createElement('div');
					logoElement.className = 'background-extra' + ' ' + classname;
					logoElement.innerHTML = config[classname] || '';
	
					backgroundElement.appendChild(logoElement);
				}
			);	
		}
	}
	
	Reveal.addBackgroundExtra = addBackgroundExtra;
})();