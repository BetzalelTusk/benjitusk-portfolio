import { Card, Link } from '@heroui/react';

export default function AboutSection() {
	return (
		<section id="about" className="py-24 flex justify-center">
			<Card className="max-w-3xl py-10">
				<h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
				<p className="text-default-700 leading-relaxed">
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
					educators and students through thoughtful, intuitive tools. Currently pursuing a degree in
					Computer Science at the Jerusalem College of Technology (JCT), I balance my academic
					journey with hands-on leadership and collaboration in startup and community settings. My
					experience as a camp counselor for five years taught me how to guide teams with empathy,
					foster cooperation, and bring out the best in others — values I now bring into every
					software project I lead. Whether building scalable web applications or mentoring
					teammates, I’m driven by the same principle: technology should make people’s lives easier,
					not more complicated. I’m constantly learning, experimenting, and refining my craft to
					deliver impactful, user-focused solutions that serve real needs.
				</p>
			</Card>
		</section>
	);
}
