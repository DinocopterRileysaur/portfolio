// Import necessary components and utilities
'use client';

import { useState } from 'react';
import { CheckIcon, CrossCircledIcon } from '@radix-ui/react-icons';

import { cn } from '@/lib/utils';
import {
	Command,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command';
import { Label } from '@/components/ui/label';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from './ui/use-toast';
import useAnimatedRouter from '@/lib/hooks/useAnimatedRouter';

// Define type for result data
type ResultData = {
	extract: string;
	index: number;
	ns: number;
	pageid: number;
	pageimage: string;
	thumbnail: {
		height: number;
		source: string;
		width: number;
	};
	title: string;
};

// Define functional component for the SearchBar
export default function SearchBar() {
	// State for storing search results
	const [names, setNames] = useState<ResultData[]>();
	// State for managing the input value
	const [value, setValue] = useState<string>();
	// State for disabling input
	const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
	// Custom hook for animated routing
	const animatedRouter = useAnimatedRouter();
	// Custom hook for displaying toasts
	const { toast } = useToast();

	// Function to fetch names based on input value
	async function fetchNames(e: string) {
		setValue(e);
		let trimVal = e.trim();
		if (trimVal.length > 0) {
			try {
				// Fetch data from Wikipedia API
				let apiResponse = await fetch(
					'https://en.wikipedia.org/w/api.php?action=query&generator=search&format=json&exintro&exsentences=1&exlimit=max&gsrlimit=10&gsrsearch=hastemplate:Birth_date_and_age+'.concat(
						trimVal,
						'&pithumbsize=100&pilimit=max&prop=pageimages%7Cextracts&origin=*'
					)
				);

				// Handle non-ok responses
				if (!apiResponse.ok) throw Error(apiResponse.statusText);

				// Parse API response to JSON
				let results = await apiResponse.json();

				// Handle potential errors and display toast
				try {
					results = Object.values(results.query?.pages);
				} catch (e) {
					toast({
						variant: 'destructive',
						title: 'No results!',
						description: "The current search doesn't return any names!",
					});
				}

				// Set the fetched names
				setNames(results);
				return results;
			} catch (error) {
				// Handle fetch errors and display toast
				toast({
					variant: 'destructive',
					title: 'Fetch Error',
					description: 'An error occurred while fetching data.',
				});
			}
		} else {
			// Clear input and results if input is empty
			setValue('');
			setNames(undefined);
		}
	}

	// Function to handle selecting a name
	function onSelectName(name: string, pageid: number) {
		// Disable input, set value, clear names, and route to animated page
		setIsInputDisabled(true);
		setValue(name);
		setNames(undefined);
		animatedRouter.animatedRoute('search?id=' + pageid);
	}

	// Function to handle clearing the input
	function onClearName() {
		// Enable input, clear value, clear names, and route to animated home
		setIsInputDisabled(false);
		setValue('');
		setNames(undefined);
		animatedRouter.animatedRoute('/');
	}

	// Return the JSX for the SearchBar
	return (
		<main className="grid grid-flow-col">
			{/* Label for the SearchBar */}
			<Label className="grid content-center justify-end p-2">
				Learn About:
			</Label>

			{/* Command component for the SearchBar */}
			<Command className="grid static w-64 z-50">
				{/* CommandInput for the SearchBar */}
				<CommandInput
					placeholder="Type a Name!"
					value={value}
					disabled={isInputDisabled}
					onValueChange={(event) => fetchNames(event)}
					className="grid"
				/>
				{/* Tooltip for clearing the input */}
				{isInputDisabled ? (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger
								className={cn(
									'grid absolute h-5 w-5 self-center justify-self-end',
									value ? 'opacity-100' : 'opacity-0'
								)}>
								<CrossCircledIcon onClick={() => onClearName()} />
							</TooltipTrigger>
							<TooltipContent>
								<p>New search?</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				) : (
					''
				)}

				{/* CommandGroup for displaying search results */}
				{names && (
					<CommandGroup
						className={cn(
							'grid absolute top-60 justify-self-center z-50 bg-inherit'
						)}>
						{...names.map((name) => (
							// CommandItem for each search result
							<CommandItem
								key={name.pageid}
								value={name.title}
								onSelect={() => {
									onSelectName(name.title, name.pageid);
								}}>
								{/* CheckIcon for selected result */}
								<CheckIcon
									className={cn(
										'mr-2 h-4 w-4',
										value === name.title ? 'opacity-100' : 'opacity-0'
									)}
								/>
								{name.title}
							</CommandItem>
						))}
					</CommandGroup>
				)}
			</Command>
		</main>
	);
}
