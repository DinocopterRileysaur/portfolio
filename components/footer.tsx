'use client';
// Import necessary dependencies and components
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import AnimatedNavigationMenuLink from './animatedNavigationMenuLink';

// Functional component for Footer
export default function Footer() {
	// Initialize useToast hook
	const { toast } = useToast();

	// Define footer header sections with their respective links
	const footerHeaders = [
		{
			title: 'Explore',
			links: [
				{ title: 'Home', url: '/' },
				{ title: 'About', url: '/about' },
			],
		},
		{
			title: 'Connect',
			links: [{ title: 'Contact', url: '/connect' }],
		},
		{
			title: 'Follow',
			links: [
				{ title: 'LinkedIn', url: 'https://linkedin.com/in/riley-wilkes' },
				{ title: 'Github', url: 'https://github.com/RileyAine/' },
			],
		},
	];

	// Render the Footer component
	return (
		<footer className="grid items-start justify-center border-y-2 py-2 bg-inherit z-45 w-screen justify-items-center">
			{/* NavigationMenu component for footer headers and links */}
			<NavigationMenu className="items-start justify-center md:gap-2">
				{/* Mapping through footerHeaders to create NavigationMenuList for each section */}
				{...footerHeaders.map((header) => (
					<NavigationMenuList
						className="grid"
						key={header.title}>
						{/* Render title for each section */}
						<p className="grid justify-start text-md md:text-2xl px-2 md:px-4">
							{header.title}
						</p>
						{/* Mapping through links in each section to create NavigationMenuItem for each link */}
						{...header.links.map((link) => (
							<div
								key={link.title}
								className="grid justify-items-start items-center">
								{/* NavigationMenuItem with AnimatedNavigationMenuLink for each link */}
								<NavigationMenuItem
									key={link.title}
									onClick={() => {
										// Display a toast if the link is not functional yet
										if (link.url.length === 0) {
											toast({
												title: link.title + ' link coming soon!',
												description:
													"This link isn't functional yet!  We hope it will be working very soon!",
											});
										}
									}}>
									<AnimatedNavigationMenuLink href={link.url}>
										{link.title}
									</AnimatedNavigationMenuLink>
								</NavigationMenuItem>
							</div>
						))}
					</NavigationMenuList>
				))}
			</NavigationMenu>
			{/* Label component for copyright information */}
			<Label className="grid copyright col-span-full justify-items-center py-2">
				© 2023 {process.env.NEXT_PUBLIC_SITE_TITLE}. All rights reserved.
			</Label>
		</footer>
	);
}
