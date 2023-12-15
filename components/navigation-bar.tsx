import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import AnimatedNavigationMenuLink from './animatedNavigationMenuLink';

type navLink = { title: string; url: string };

export default function NavigationBar({ navLinks }: { navLinks: navLink[] }) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{...navLinks.map((navLink, index) => (
					<NavigationMenuItem key={index}>
						<AnimatedNavigationMenuLink href={navLink.url}>
							{navLink.title}
						</AnimatedNavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
