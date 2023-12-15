'use client';

import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useSearchParams } from 'next/navigation';

import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import useCharacterData from '@/lib/hooks/useCharacterData';

export default function CharacterSheet() {
	const searchParams = useSearchParams()!;
	// id will be a number or it will be NaN
	const id = Number(searchParams.get('id'));
	const { data, isLoading, isError } = useCharacterData(id);

	if (isLoading) {
		return (
			<main className="content-main">
				<Card>
					<CardHeader>
						<CardTitle>
							<Skeleton className="grid h-4 w-48" />
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-flow-col gap-2 items-center space-x-4">
							<Skeleton className="grid justify-self-end h-36 w-36 md:h-48 md:w-48 xl:h-48 xl:w-48 rounded-full" />
							<div className="grid auto-rows-max justify-self-start justify-items-start justify-start space-y-2">
								<Skeleton className="h-4 w-64 md:w-72 lg:w-80 xl:w-96" />
								<Skeleton className="h-4 w-64 md:w-72 lg:w-80 xl:w-96" />
								<Skeleton className="h-4 w-48 md:w-64 lg:w-72 xl:w-80" />
								<Skeleton className="h-4 w-64 md:w-72 lg:w-80 xl:w-96" />
								<Skeleton className="h-4 w-48 md:w-64 lg:w-72 xl:w-80" />
								<Skeleton className="h-4 w-64 md:w-72 lg:w-80 xl:w-96" />
							</div>
						</div>
					</CardContent>
				</Card>
			</main>
		);
	}

	if (isError) {
		return <div>Error loading character data</div>;
	}

	if (data) {
		const character = Object.values(data)[0];
		return (
			<main className="content-main">
				<Card>
					<CardHeader className="grid justify-items-center">
						<CardTitle>
							<Label className="text-3xl">{character.title}</Label>
						</CardTitle>
					</CardHeader>
					<CardContent className="space-x-4 relative px-8">
						{character.thumbnail && (
							<Image
								className="grid justify-self-center pr-4 float-left"
								width="200"
								height="200"
								alt={'Picture of ' + character.title}
								src={character.thumbnail?.source}></Image>
						)}
						{...character.extract.split('\n').map((para: string, i: number) => (
							<span key={i}>
								{para}
								<br />
								<br />
							</span>
						))}
					</CardContent>
				</Card>
			</main>
		);
	}
}
