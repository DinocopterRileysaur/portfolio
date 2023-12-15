// Import necessary dependencies and types
'use client';
import { ExtendedDocument } from '@/lib/types/extendedDocuments';
import { useRouter } from 'next/navigation';

// Define the custom hook useAnimatedRouter
export default function useAnimatedRouter() {
	// Get the Next.js router
	const router = useRouter();

	// Function to check the status of View Transitions support in the browser
	const viewTransitionsStatus = () => {
		if (typeof window !== 'undefined') {
			// Type cast document to ExtendedDocument
			const extendedDocument = document as ExtendedDocument;

			// Check if startViewTransition is supported
			let status = "This browser doesn't support the View Transitions API";
			if (extendedDocument?.startViewTransition) {
				status = 'This browser supports the View Transitions API';
			}

			// Return the status
			return status;
		}
	};

	// Function to perform an animated route change
	const animatedRoute = (url: string) => {
		if (typeof window !== 'undefined') {
			// Type cast document to ExtendedDocument
			const extendedDocument = document as ExtendedDocument;

			// Check if startViewTransition is supported
			if (!extendedDocument.startViewTransition) {
				// If not supported, perform a regular router push
				return router.push(url);
			} else {
				// If supported, start the view transition before routing
				extendedDocument.startViewTransition(() => {
					router.push(url);
				});
			}
		}
	};

	// Return an object with the animatedRoute and viewTransitionsStatus functions
	return { animatedRoute, viewTransitionsStatus };
}
