// Import necessary dependencies and components
import pageContent from './content';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// Home component rendering content from the pageContent function
export default function Home() {
	// Retrieve content data using pageContent function
	const content = pageContent();

	// Render the Home component
	return (
		<main className="content-main">
			{/* Display the page title using Label component */}
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				{content.PAGE_TITLE}
			</Label>

			{...content.SECTIONS.map((section) => (
				// Iterate through sections and render each one
				<>
					{/* Render each section with a title and paragraphs */}
					<section
						key={section.SECTION_TITLE}
						className="content-section">
						<Label className="grid text-2xl justify-self-center">
							{section.SECTION_TITLE}
						</Label>
						{...section.PARAGRAPHS.map((para, i) => (
							// Iterate through paragraphs and render each one
							<p key={i}>{para}</p>
						))}
					</section>
					{/* Add a Separator component after each section */}
					<Separator />
				</>
			))}
		</main>
	);
}
