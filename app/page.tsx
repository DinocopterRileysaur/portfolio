'use client';
import pageContent from './content';

import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function Home() {
	const content = pageContent();

	return (
		<main className="content-main">
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				{content.PAGE_TITLE}
			</Label>
			{...content.SECTIONS.map((section) => (
				<>
					<section
						key={section.SECTION_TITLE}
						className="content-section">
						<Label className="grid text-2xl justify-self-center">
							{section.SECTION_TITLE}
						</Label>
						{...section.PARAGRAPHS.map((para, i) => <p key={i}>{para}</p>)}
					</section>
					<Separator />
				</>
			))}
		</main>
	);
}
