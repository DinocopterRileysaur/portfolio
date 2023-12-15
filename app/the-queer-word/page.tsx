import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

export default function Queer() {
	return (
		<main className="content-main">
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				Embracing the Term &quot;Queer&quot;
			</Label>
			<section className="grid w-4/6">
				<p>
					We proudly use the term &quot;Queer&quot; to describe our platform and
					the diverse identities it explores. This choice is intentional and
					reflects our commitment to inclusivity, visibility, and respect for
					the LGBTQ+ community.
				</p>
			</section>
			<Separator />
			<section className="grid w-4/6 justify-self-end">
				<p>
					Historically, the term &quot;Queer&quot; was used as a derogatory
					slur, contributing to the marginalization and stigmatization of the
					LGBTQ+ community. However, over time, the community has reclaimed and
					embraced the term as an empowering and inclusive umbrella that
					encompasses a spectrum of identities.
				</p>
			</section>
			<Separator />
			<section className="grid w-4/6">
				<p>
					&quot;Queer&quot; serves as an inclusive and encompassing term that
					reflects the diversity and fluidity of sexual orientations and gender
					identities. It acknowledges that identities are varied and may not fit
					neatly into traditional categories, providing a space for individuals
					to express themselves authentically.
				</p>
			</section>
			<Separator />
			<section className="grid w-4/6 justify-self-end">
				<p>
					By using &quot;Queer,&quot; we celebrate the resilience, strength, and
					diversity within the LGBTQ+ community. Our platform aims to create a
					space where everyone can explore and appreciate the rich tapestry of
					identities, fostering understanding and solidarity.
				</p>
			</section>
			<Separator />
			<section className="grid gap-2 px-12">
				<p>
					We recognize that the term &quot;Queer&quot; may be sensitive for some
					individuals. We prioritize community consent and encourage open
					dialogue. If you have feedback or concerns regarding our use of the
					term, we welcome your input to ensure our platform remains respectful
					and affirming.
				</p>
			</section>
		</main>
	);
}
