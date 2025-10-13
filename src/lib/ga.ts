// Lightweight Google Analytics (Gtag) helper.
// Usage: set VITE_GA_MEASUREMENT_ID in your environment (e.g. .env) to your G-... ID.

export const GA_MEASUREMENT_ID = 'G-X6MECC2BPD';

declare global {
	interface Window {
		dataLayer?: any[];
		gtag?: (...args: any[]) => void;
		gtagInitialized?: boolean;
	}
}

export function initGA() {
	if (!GA_MEASUREMENT_ID) return;
	if (typeof window === 'undefined') return;
	if (window.gtagInitialized) return;

	const s1 = document.createElement('script');
	s1.async = true;
	s1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
	document.head.appendChild(s1);

	const inline = document.createElement('script');
	inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = window.gtag || gtag;
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
  `;
	document.head.appendChild(inline);

	window.gtagInitialized = true;
}

export function trackPageview(path?: string) {
	if (!GA_MEASUREMENT_ID) return;
	if (typeof window === 'undefined') return;
	if (!window.gtag) return;
	const page_path = path ?? window.location.pathname + window.location.search;
	window.gtag('event', 'page_view', { page_path });
}

export function trackEvent(name: string, params: Record<string, any> = {}) {
	if (!GA_MEASUREMENT_ID) return;
	if (typeof window === 'undefined') return;
	if (!window.gtag) return;
	window.gtag('event', name, params);
}
