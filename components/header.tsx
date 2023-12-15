'use client';

import SearchBar from './search-bar';
import NavigationBar from './navigation-bar';
import DarkModeToggle from './dark-mode-toggle';
import useWindowSize from '@/lib/hooks/useWindowSize';
import HamburgerNavigation from './hamburger-navigation';

export default function Header() {
	const windowWidth = useWindowSize()?.width;
	const windowIsMobile = windowWidth ? windowWidth < 700 : false;
	const navLinks = [
		{ title: 'Home', url: '/' },
		{ title: 'About', url: '/about' },
		{ title: 'Connect', url: '/connect' },
	];
	return (
		<header className="grid gap-2 relative content-center justify-center pt-1 md:pt-0">
			<article className="grid absolute right-0 pt-3 px-3 md:px-2">
				<DarkModeToggle />
			</article>
			{windowIsMobile && (
				<article className="grid absolute left-0 pt-3 px-3 w-screen">
					<HamburgerNavigation navLinks={navLinks} />
				</article>
			)}
			<h1 className="grid relative place-content-center justify-self-center h-8 my-2 md:my-12 md:h-26 handmade text-3xl md:text-6xl lg:text-7xl xl:text-8xl">
				{process.env.NEXT_PUBLIC_SITE_TITLE}
			</h1>
			{!windowIsMobile && (
				<article className="grid place-content-center">
					<NavigationBar navLinks={navLinks} />
				</article>
			)}
			<article className="grid w-screen place-content-center grid-flow-col gap-2 p-2 border-y-2">
				<SearchBar />
			</article>
		</header>
	);
}
