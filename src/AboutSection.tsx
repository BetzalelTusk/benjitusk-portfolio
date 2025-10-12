import { Card } from '@heroui/react';

export default function AboutSection() {
	return (
		<section id="about" className="py-24 px-6 flex justify-center">
			<Card className="max-w-3xl p-10">
				<h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
				<p className="text-default-700 leading-relaxed">
					I’m a computer science student and web developer with a passion for building responsive,
					accessible, and aesthetically pleasing web applications. I enjoy working with modern
					frameworks like React and Tailwind CSS to bring creative ideas to life.
				</p>
			</Card>
		</section>
	);
}
