'use client';
import useAnimatedRouter from '@/lib/hooks/useAnimatedRouter';
import React from 'react';
import {
	NavigationMenuLink,
	navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type Props = {
	href: string;
	children: React.ReactNode;
};
export default function AnimatedNavigationMenuLink({ href, children }: Props) {
	const { animatedRoute } = useAnimatedRouter();
	return (
		<Link
			passHref
			legacyBehavior
			href={href}>
			<NavigationMenuLink
				className={cn(navigationMenuTriggerStyle(), 'px-2')}
				onClick={() => {
					href.length > 0 && animatedRoute(href);
				}}>
				{children}
			</NavigationMenuLink>
		</Link>
	);
}
