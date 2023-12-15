import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function SexualOrientations() {
	return (
		<main className="content-main">
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				Understanding Sexual Orientations
			</Label>
			<section className="content-section">
				<p>
					We embrace and celebrate the rich diversity of sexual orientations.
					Understanding and respecting various sexual orientations is essential
					for creating an inclusive and supportive community.
				</p>
			</section>
			<Separator />
			<section className="content-section">
				<Label className="grid text-2xl justify-self-center">
					Common Sexual Orientations
				</Label>
				<p>
					<strong>Heterosexual:</strong> Heterosexual individuals are
					romantically and/or sexually attracted to people of the opposite
					gender.
				</p>
				<p>
					<strong>Homosexual:</strong> Homosexual individuals are romantically
					and/or sexually attracted to people of the same gender.
				</p>
				<p>
					<strong>Bisexual:</strong> Bisexual individuals are romantically
					and/or sexually attracted to people of more than one gender.
				</p>
				<p>
					<strong>Pansexual:</strong> Pansexual individuals are romantically
					and/or sexually attracted to people regardless of their gender or
					gender identity.
				</p>
				<p>
					<strong>Asexual:</strong> Asexual individuals may experience little or
					no sexual attraction to others.
				</p>
			</section>
			<Separator />
			<section className="content-section">
				<Label className="grid text-2xl justify-self-center">
					Respecting Identities
				</Label>
				<p>
					Respecting and acknowledging individuals&apos; sexual orientations is
					crucial for fostering a culture of acceptance. It&apos;s important to
					use inclusive language and support each other on our unique journeys.
				</p>
			</section>
			<Separator />
			<section className="content-section">
				<Label className="grid text-2xl justify-self-center">
					Further Exploration
				</Label>
				<p>
					Sexual orientation is a personal and diverse aspect of identity. We
					encourage you to explore and learn more about different sexual
					orientations. Remember that this list is not exhaustive, and
					individuals may identify in unique and personal ways.
				</p>
			</section>
		</main>
	);
}
