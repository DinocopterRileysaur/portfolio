// Import necessary components and utilities
'use client';

import SearchBar from './search-bar';
import NavigationBar from './navigation-bar';
import DarkModeToggle from './dark-mode-toggle';
import useWindowSize from '@/lib/hooks/useWindowSize';
import HamburgerNavigation from './hamburger-navigation';
import Link from 'next/link';
import { Dongle } from 'next/font/google';
import { Label } from './ui/label';
import { cn } from '@/lib/utils';
import useAnimatedRouter from '@/lib/hooks/useAnimatedRouter';

// Use the 'Dongle' Google Font with specified subsets and weight
const dongle = Dongle({ subsets: ['latin'], weight: '300' });

// Define the Header functional component
export default function Header() {
	const animatedRouter = useAnimatedRouter();
	// Retrieve the window width using the custom 'useWindowSize' hook
	const windowWidth = useWindowSize()?.width;

	// Determine if the window is in mobile view based on its width
	const windowIsMobile = windowWidth ? windowWidth < 700 : false;

	// Define navigation links
	const navLinks = [
		{ title: 'Home', url: '/' },
		{ title: 'About', url: '/about' },
		{ title: 'Connect', url: '/connect' },
	];

	// Return the JSX for the header
	return (
		<header className="grid gap-2 relative content-center justify-center pt-1 md:pt-0">
			{/* DarkModeToggle component */}
			<article className="grid absolute right-0 pt-3 px-3 md:px-2">
				<DarkModeToggle />
			</article>

			{/* HamburgerNavigation component for mobile view */}
			{windowIsMobile && (
				<article className="grid absolute left-0 pt-3 px-3 w-screen">
					<HamburgerNavigation navLinks={navLinks} />
				</article>
			)}

			{/* Logo with a link to the home page */}
			<Link
				className="grid relative place-content-center justify-self-center h-8 my-2 md:my-12 md:h-26"
				href="/"
				onClick={() => {
					animatedRouter.animatedRoute('/');
				}}>
				<Label
					// Apply the Dongle font style
					className={cn(
						dongle.className,
						'grid text-5xl md:text-8xl lg:text-9xl self-end items-end content-end pt-3 cursor-pointer'
					)}>
					{process.env.NEXT_PUBLIC_SITE_TITLE}
				</Label>
			</Link>

			{/* NavigationBar component for non-mobile view */}
			{!windowIsMobile && (
				<article className="grid place-content-center">
					<NavigationBar navLinks={navLinks} />
				</article>
			)}

			{/* SearchBar component */}
			<article className="grid w-screen place-content-center grid-flow-col gap-2 p-2 border-y-2">
				<SearchBar />
			</article>
		</header>
	);
}
