'use client';
// Importing UI components and icons
import { Label } from '@/components/ui/label';
import {
	EnvelopeClosedIcon,
	LinkedInLogoIcon,
	GitHubLogoIcon,
	ExternalLinkIcon,
} from '@radix-ui/react-icons';

import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
	CommandShortcut,
} from '@/components/ui/command';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Main component for the "About" page
export default function About() {
	const router = useRouter();
	// External links data
	const externalLinks = [
		{
			icon: <EnvelopeClosedIcon className="mr-2 h-4 w-4" />,
			title: 'Email',
			url: 'mailto:rileyainewilkes@gmail.com',
		},
		{
			icon: <LinkedInLogoIcon className="mr-2 h-4 w-4" />,
			title: 'LinkedIn',
			url: 'https://linkedin.com/in/riley-wilkes',
		},
		{
			icon: <GitHubLogoIcon className="mr-2 h-4 w-4" />,
			title: 'GitHub',
			url: 'https://github.com/RileyAine',
		},
		{
			icon: (
				<Image
					src="/icon.png"
					alt="site logo"
					className="mr-2 h-4 w-4"
					width="4"
					height="4"
				/>
			),
			title: 'Repository',
			url: 'https://github.com/RileyAine/portfolio',
		},
	];

	return (
		<main className="content-main">
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				Connect with Riley!
			</Label>

			{/* Command component for displaying external links */}
			<Command className="rounded-lg shadow-md text-3xl">
				<CommandList>
					<CommandGroup>
						{...externalLinks.map((link, i) => (
							// CommandItem for each external link
							<CommandItem
								key={i}
								onSelect={() => router.push(link.url)}
								className="cursor-pointer">
								{link.icon}
								<Label className="md:text-lg cursor-pointer">
									{link.title}
								</Label>
								<CommandShortcut>
									<ExternalLinkIcon />
								</CommandShortcut>
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</Command>
		</main>
	);
}
