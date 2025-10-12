import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';

export default function Header() {
	return (
		<Navbar shouldHideOnScroll maxWidth="full" className="px-4">
			<NavbarBrand>
				<p className="font-bold text-xl text-primary">Benjamin Tusk</p>
			</NavbarBrand>
			<NavbarContent justify="end">
				<NavbarItem>
					<Button variant="flat" color="primary">
						Contact
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
