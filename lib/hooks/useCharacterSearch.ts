// Import necessary dependencies
import useSWR from 'swr';

// Define the interface for character search data
interface CharacterSearchData {
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

// Custom hook for fetching character search data using SWR
const useCharacterSearch = (searchQuery: string) => {
	// Construct the API URL for fetching character search data
	const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=search&format=json&exintro&exsentences=1&exlimit=max&gsrlimit=10&gsrsearch=hastemplate:Birth_date_and_age+${searchQuery}&pithumbsize=100&pilimit=max&prop=pageimages%7Cextracts&origin=*`;

	// Use SWR to fetch and manage data
	const { data, error } = useSWR<CharacterSearchData>(apiUrl, fetcher);

	// Return an object with data, loading status, and error status
	return {
		data,
		isLoading: !data && !error,
		isError: error,
	};
};

// Export the useCharacterSearch custom hook
export default useCharacterSearch;
