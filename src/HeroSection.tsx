import { Button } from '@heroui/react';
import ShinyText from './components/ShinyText';
import ProfileCard from './components/ProfileCard';
import { MdDownload } from 'react-icons/md';
import avatarIcon from './assets/profile.jpeg';
import miniAvatarIcon from './assets/headshot.jpg';
import grainImg from './assets/grain.webp';
import bgIcon from './assets/bg.png';
import { Link } from '@heroui/react';

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
				<div className="max-w-5xl py-10">
					{/* <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2> */}
					<p className="text-default-700 leading-relaxed text-lg">
						I’m the co-founder and lead developer at{' '}
						<Link
							href="https://www.schedulearn.com/?utm_source=benjitusk_portfolio"
							target="_blank"
							isExternal
							showAnchorIcon
							className="text-primary font-semibold"
						>
							Schedulearn LLC
						</Link>
						where I work to make school scheduling simpler and more efficient for school
						administrators. My goal is to design technology that genuinely helps people — empowering
						educators and students through thoughtful, intuitive tools.
						<br />
						<br />
						Currently pursuing a degree in Computer Science at the Jerusalem College of Technology
						(JCT), I balance my academic journey with hands-on leadership and collaboration in
						startup and community settings. My experience as a camp counselor for five years taught
						me how to guide teams with empathy, foster cooperation, and bring out the best in others
						— values I now bring into every software project I lead.
						<br />
						<br />
						Whether building scalable web applications or working with teammates, I’m driven by the
						same principle: technology should make people’s lives easier, not more complicated. I’m
						constantly learning, experimenting, and refining my craft to deliver impactful,
						user-focused solutions that serve real needs.
					</p>
				</div>
			</div>
			<div className="flex justify-end items-center pr-10">
				<ProfileCard
					name="Benjamin Tusk"
					titles={['Full-Stack Developer', 'CoFounder @ ScheduLearn']}
					handle="benjitusk"
					status="Living the dream"
					contactText="Contact Me"
					avatarUrl={avatarIcon}
					miniAvatarUrl={miniAvatarIcon}
					iconUrl={bgIcon}
					grainUrl={grainImg}
					showUserInfo={true}
					enableTilt={true}
					enableMobileTilt={false}
					contactHref="https://linkedin.com/in/benjitusk"
				/>
			</div>
		</section>
	);
}
