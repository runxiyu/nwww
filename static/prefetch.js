document.addEventListener('DOMContentLoaded', function() {
	const cache = new Map();

	function fetchPage(url) {
		console.log(`Fetching ${url}`);
		return fetch(url)
			.then(response => response.text())
			.then(html => {
				cache.set(url, html);
				return html;
			})
			.catch(error => console.error(`Failed to fetch ${url}:`, error));
	}

	function replaceDOM(html, url) {
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');
		document.documentElement.innerHTML = doc.documentElement.innerHTML;
		document.dispatchEvent(new Event('DOMContentLoaded')); // Make sure event listeners are still attached
	        window.scrollTo(0, 0);
	        history.pushState(null, '', url);
	}

	document.querySelectorAll('a').forEach(anchor => {
		anchor.addEventListener('mouseover', function() {
			const url = anchor.href;
			if (url && !cache.has(url)) {
				fetchPage(url);
			}
		});

		anchor.addEventListener('click', function(event) {
			event.preventDefault();
			const url = anchor.href;
			if (url && cache.has(url)) {
				replaceDOM(cache.get(url), url);
			} else {
				fetchPage(url).then(html => replaceDOM(html, url));
			}
		});
	});
});
