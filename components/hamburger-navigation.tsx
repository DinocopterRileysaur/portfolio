// Import necessary dependencies
import * as React from 'react';

// Import components from UI library and Radix UI
import { Button } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

// Import the NavigationBar component
import NavigationBar from './navigation-bar';

// Define a type for navigation links
type navLink = { title: string; url: string };

// Functional component for Hamburger Navigation
export default function HamburgerNavigation({
	navLinks,
}: {
	navLinks: navLink[];
}) {
	return (
		// DropdownMenu component for the hamburger navigation
		<DropdownMenu>
			{/* DropdownMenuTrigger component using Button with HamburgerMenuIcon */}
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon">
					<HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
				</Button>
			</DropdownMenuTrigger>

			{/* DropdownMenuContent component with NavigationBar */}
			<DropdownMenuContent className="grid w-screen justify-items-center py-2 mt-2 mr-2">
				<DropdownMenuItem>
					{/* NavigationBar component with provided navigation links */}
					<NavigationBar navLinks={navLinks}></NavigationBar>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
