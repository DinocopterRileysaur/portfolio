// Import necessary dependencies
import useSWR from 'swr';

// Define the interface for character data
interface CharacterData {
	title: string;
	thumbnail: string;
	content: string;
}

// Define the fetcher function for SWR
const fetcher = async (url: string) => {
	// Fetch data from the provided URL
	const response = await fetch(url);
	// Parse the response as JSON
	const data = await response.json();
	// Return the pages property from the data (adjust based on the actual structure of the Wikipedia API response)
	return data.query.pages;
};

// Custom hook for fetching character data using SWR
const useCharacterData = (pageId: number) => {
	// Construct the API URL for fetching character data
	const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages|extracts&exintro=true&explaintext=true&pageids=${pageId}&pithumbsize=300&origin=*`;

	// Use SWR to fetch and manage data
	const { data, error } = useSWR<CharacterData>(apiUrl, fetcher);

	// Return an object with data, loading status, and error status
	return {
		data,
		isLoading: !data && !error,
		isError: error,
	};
};

// Export the useCharacterData custom hook
export default useCharacterData;
