// Import necessary dependencies and components
import useAnimatedRouter from '@/lib/hooks/useAnimatedRouter';
import React from 'react';
import {
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Define the Props type for AnimatedNavigationMenuLink component
type Props = {
	href: string;
	children: React.ReactNode;
};

// AnimatedNavigationMenuLink component for creating animated navigation links
export default function AnimatedNavigationMenuLink({ href, children }: Props) {
	// Use the useAnimatedRouter hook to access animatedRoute function
	const { animatedRoute } = useAnimatedRouter();

	// Render the AnimatedNavigationMenuLink component
	return (
		<Link
			passHref
			legacyBehavior
			href={href}>
			{/* NavigationMenuLink component with custom styling and onClick behavior */}
			<NavigationMenuLink
				className={cn(navigationMenuTriggerStyle(), 'px-2')}
				onClick={() => {
					// Check if href is not empty before triggering animatedRoute
					href.length > 0 && animatedRoute(href);
				}}>
				{children}
			</NavigationMenuLink>
		</Link>
	);
}
