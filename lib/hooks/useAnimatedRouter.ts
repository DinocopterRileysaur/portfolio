'use client';
import { ExtendedDocument } from '@/lib/types/extendedDocuments';
import { useRouter } from 'next/navigation';

export default function useAnimatedRouter() {
	const router = useRouter();
	const viewTransitionsStatus = () => {
		if (typeof window !== 'undefined') {
			const extendedDocument = document as ExtendedDocument;
			let status = "This browser doesn't support the View Transitions API";
			if (extendedDocument?.startViewTransition) {
				status = 'This browser supports the View Transitions API';
			}
			return status;
		}
	};

	const animatedRoute = (url: string) => {
		if (typeof window !== 'undefined') {
			const extendedDocument = document as ExtendedDocument;
			if (!extendedDocument.startViewTransition) {
				return router.push(url);
			} else {
				extendedDocument.startViewTransition(() => {
					router.push(url);
				});
			}
		}
	};
	return { animatedRoute, viewTransitionsStatus };
}
