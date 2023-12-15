// Import necessary components
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// NotFound component for handling 404 errors
export default function NotFound() {
	return (
		<section className="grid">
			{/* Grid layout with a centered column */}
			<div className="grid grid-flow-col gap-4 pt-12 justify-self-center">
				{/* Display '404' with large text */}
				<Label className="grid text-5xl pb-2">404</Label>

				{/* Vertical Separator to separate '404' and the text */}
				<Separator orientation="vertical" />

				{/* Grid layout for the text section */}
				<div className="grid grid-flow-row gap-2 pt-1">
					{/* Display 'Page Not Found' */}
					<Label>Page Not Found</Label>

					{/* Display 'Sorry About That' */}
					<Label>Sorry About That</Label>
				</div>
			</div>
		</section>
	);
}
