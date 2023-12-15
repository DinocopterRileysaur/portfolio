'use client';

import * as React from 'react';

import { Button } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import NavigationBar from './navigation-bar';

type navLink = { title: string; url: string };

export default function HamburgerNavigation({
	navLinks,
}: {
	navLinks: navLink[];
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon">
					<HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="grid w-screen justify-items-center py-2 mt-2 mr-2">
				<DropdownMenuItem>
					<NavigationBar navLinks={navLinks}></NavigationBar>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
