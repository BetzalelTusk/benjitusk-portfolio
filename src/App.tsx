// import AboutSection from './AboutSection';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import { useTheme } from '@heroui/use-theme';
function App() {
	const { theme } = useTheme();
	return (
		<div className={`min-h-screen bg-background text-foreground flex flex-col ${theme}`}>
			<Header />
			<main className="flex-1">
				<HeroSection />
				{/* <AboutSection /> */}
			</main>
			<Footer />
		</div>
	);
}

export default App;
