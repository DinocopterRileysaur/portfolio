'use client';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function NotFound() {
	return (
		<section className="grid">
			<div className="grid grid-flow-col gap-4 pt-12 justify-self-center">
				<Label className="grid text-5xl pb-2">404</Label>
				<Separator orientation="vertical" />
				<div className="grid grid-flow-row gap-2 pt-1">
					<Label>Page Not Found</Label>
					<Label>Sorry About That</Label>
				</div>
			</div>
		</section>
	);
}
