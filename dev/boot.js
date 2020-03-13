import window from 'window';
import { progressJs } from '../vendors/Progress.js/src/progress.js';

window.progressJs = window.progressJs || progressJs();

window.progressJs.onbeforeend(() => {
	const _$ = window.$;
	if (_$) {
		try {
			_$('.progressjs-container').hide();
			window.setTimeout(() => {
				_$('.progressjs-container').remove();
			}, 200); // eslint-disable-line no-magic-numbers
		} catch (e) {} // eslint-disable-line no-empty
	}
});

require('Common/Booter');

if (window.__runBoot) {
	window.__runBoot();
}
