// Import necessary components and utilities
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import AnimatedNavigationMenuLink from './animatedNavigationMenuLink';

// Define type for navigation link
type NavLink = { title: string; url: string };

// Define functional component for the NavigationBar
export default function NavigationBar({ navLinks }: { navLinks: NavLink[] }) {
	return (
		// NavigationMenu component for styling
		<NavigationMenu>
			{/* NavigationMenuList to contain the NavigationMenuItems */}
			<NavigationMenuList>
				{/* Map through provided navLinks to create NavigationMenuItems */}
				{navLinks.map((navLink, index) => (
					<NavigationMenuItem key={index}>
						{/* AnimatedNavigationMenuLink with href and title */}
						<AnimatedNavigationMenuLink href={navLink.url}>
							{navLink.title}
						</AnimatedNavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
