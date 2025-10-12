import { Button } from '@heroui/react';
import ShinyText from './components/ShinyText';
import ProfileCard from './components/ProfileCard';
import { MdDownload } from 'react-icons/md';

export default function HeroSection() {
	return (
		<section className="flex flex-row px-10 py-6 bg-gradient-to-b from-background to-primary/10 align-start">
			<div className="flex flex-col py-18 flex-1">
				<h1 className="text-4xl font-bold mb-4 md:text-5xl">
					Hello, my name is <span className="text-primary">Benjamin Tusk</span>.
				</h1>
				<p className="text-lg text-default-600 mb-8">
					I'm a full-stack developer passionate about building <ShinyText text="real tools" /> to
					help <ShinyText text="real people" /> solve <ShinyText text="real problems" />.
				</p>
				<div className="flex gap-4">
					<Button color="primary" size="lg">
						View Projects
					</Button>
					<Button
						variant="bordered"
						color="primary"
						size="lg"
						endContent={<MdDownload size={20} />}
					>
						Download Resumé
					</Button>
				</div>
			</div>
			<div className="flex-1 flex justify-end items-center pr-10">
				<ProfileCard
					name="Benjamin Tusk"
					titles={['Full-Stack Developer', 'CoFounder @ ScheduLearn']}
					handle="benjitusk"
					status="Living the dream"
					contactText="Contact Me"
					avatarUrl="src/assets/profile.jpeg"
					miniAvatarUrl="src/assets/headshot.jpg"
					iconUrl="src/assets/bg.png"
					grainUrl="src/assets/grain.webp"
					showUserInfo={true}
					enableTilt={true}
					enableMobileTilt={false}
					onContactClick={() => console.log('Contact clicked')}
					className="z-50"
				/>

				{/* image is in src/assets
				<img
					src="src/assets/headshot.jpeg"
					alt="Hero Graphic"
					// image should be circular, shifted down and to the right in the container, and half the size of the container
					className="w-[200px] h-auto rounded-full shadow-lg"
				/> */}
			</div>
		</section>
	);
}
