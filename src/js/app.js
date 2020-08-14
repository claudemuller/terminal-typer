(function () {
	jQuery(document).ready(function ready() {
		'use strict';

		const typed = new Typed('#prompt', {
			startDelay: 3000,
			stringsElement: '#terminal-data',
			typeSpeed: 50,
			backDelay: 2000,
			cursorChar: '&block;',
			onComplete: self => {
				setTimeout(() => {
					self.reset();
				}, 4000);
			}
		});

	});
})();
