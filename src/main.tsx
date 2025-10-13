import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import './index.css';
import App from './App.tsx';
import { initGA, trackPageview, GA_MEASUREMENT_ID } from './lib/ga';

export function RootApp() {
	useEffect(() => {
		if (GA_MEASUREMENT_ID) {
			initGA();
			trackPageview();
		}
	}, []);
	return (
		<HeroUIProvider>
			<App />
		</HeroUIProvider>
	);
}

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RootApp />
	</StrictMode>
);
