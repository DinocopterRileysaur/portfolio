// Importing page content and UI components
import pageContent from './content';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// About component that dynamically renders content from the imported pageContent
export default function About() {
	const content = pageContent();

	return (
		<main className="content-main">
			{/* Displaying the page title */}
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				{content.PAGE_TITLE}
			</Label>

			{/* Mapping through each section of content */}
			{...content.SECTIONS.map((section) => (
				<>
					{/* Displaying each section with its title */}
					<section
						key={section.SECTION_TITLE}
						className="content-section">
						<Label className="grid text-lg md:text-2xl justify-self-center">
							{section.SECTION_TITLE}
						</Label>
						{/* Mapping through each paragraph in the section */}
						{...section.PARAGRAPHS.map((para, i) => <p key={i}>{para}</p>)}
					</section>

					{/* Adding a separator between sections */}
					<Separator />
				</>
			))}
		</main>
	);
}
