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

type resultData = {
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

export default function SearchBar() {
	const [names, setNames] = useState<resultData[]>();
	const [value, setValue] = useState<string>();
	const [isInputDisabled, setIsInputDisabled] = useState<boolean>(false);
	const animatedRouter = useAnimatedRouter();
	const { toast } = useToast();

	async function fetchNames(e: string) {
		setValue(e);
		let trimVal = e.trim();
		if (trimVal.length > 0) {
			let apiResponse = await fetch(
				'https://en.wikipedia.org/w/api.php?action=query&generator=search&format=json&exintro&exsentences=1&exlimit=max&gsrlimit=10&gsrsearch=hastemplate:Birth_date_and_age+'.concat(
					trimVal,
					'&pithumbsize=100&pilimit=max&prop=pageimages%7Cextracts&origin=*'
				)
			);
			if (!apiResponse.ok) throw Error(apiResponse.statusText);

			let results = await apiResponse.json();
			try {
				results = Object.values(results.query?.pages);
			} catch (e) {
				toast({
					variant: 'destructive',
					title: 'No results!',
					description: "The current search doesn't return any names!",
				});
			}
			setNames(results);
			return results;
		} else {
			setValue('');
			setNames(undefined);
		}
	}

	function onSelectName(name: string, pageid: number) {
		setIsInputDisabled(true);
		setValue(name);
		setNames(undefined);
		animatedRouter.animatedRoute('search?id=' + pageid);
	}

	function onClearName() {
		setIsInputDisabled(false);
		setValue('');
		setNames(undefined);
		animatedRouter.animatedRoute('/');
	}

	return (
		<main className="grid grid-flow-col">
			<Label className="grid content-center justify-end p-2">
				Learn About:
			</Label>
			<Command className="grid static w-64 z-50">
				<CommandInput
					placeholder="Type a Name!"
					value={value}
					disabled={isInputDisabled}
					onValueChange={(event) => fetchNames(event)}
					className="grid"
				/>
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
				{names && (
					<CommandGroup
						className={cn(
							'grid absolute top-60 justify-self-center z-50 bg-inherit'
						)}>
						{...names.map((name) => (
							<CommandItem
								key={name.pageid}
								value={name.title}
								onSelect={() => {
									onSelectName(name.title, name.pageid);
								}}>
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
