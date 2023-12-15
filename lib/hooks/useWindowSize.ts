// Import necessary dependencies
import { useEffect, useState } from 'react';

// Custom hook for tracking window size
export default function useWindowSize() {
	// State to store the current window size
	const [windowSize, setWindowSize] = useState<{
		width: number;
		height: number;
	}>();

	// Effect to handle window resize events
	useEffect(() => {
		// Function to update window size in the state
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Add a resize event listener and call handleResize
		window.addEventListener('resize', handleResize);

		// Call handleResize initially to set the initial window size
		handleResize();

		// Remove the event listener on component unmount
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty dependency array ensures that the effect runs only once on mount

	// Return the current window size
	return windowSize;
}
