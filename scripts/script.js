// appendRule = (sheet) => {
//     console.log({sheet});
//     const len = sheet.cssRules.length;
//     sheet.insertRule('body{}', len);
//     return sheet.cssRules[len];
// }

// ruleForScroll = appendRule(Array.from(document.styleSheets).slice(-1)[0]);

// randomColor = () => Math.floor(255 * Math.random());

// component = document.querySelector('.left-sidebar--sticky-container.js-sticky-leftnav');

// component.addEventListener("scroll", function wheelStyle() {
//     ruleForScroll.selectorText = '.left-sidebar--sticky-container.js-sticky-leftnav::-webkit-scrollbar-track';
//     ruleForScroll.style["background"] = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
// });

function appendRule(sheet) {
    var len = sheet.cssRules.length;
    sheet.insertRule('*{}', len);
    return sheet.cssRules[len];
}

const scrollbar = window.scrollbars;

window.addEventListener("scroll", function show() {
    var rule = appendRule(document.styleSheets[0]);
    rule.selectorText = '::-webkit-scrollbar-thumb';
    rule.style.display = 'initial'
    rule.style.opacity = 0.5;
});

scrollStop(function () {
    setInterval(hide, 2000);
});


function hide() {
    var rule = appendRule(document.styleSheets[0]);
    rule.selectorText = '::-webkit-scrollbar-thumb';
    rule.style.display = 'none';
}

/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The callback function to run after scrolling
 * @param  {Integer}  refresh  How long to wait between scroll events [optional]
 */
function scrollStop (callback, refresh = 66) {

	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return;

	// Setup scrolling variable
	let isScrolling;

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {

		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(callback, refresh);

	}, false);

}