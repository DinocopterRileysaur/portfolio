import useSWR from 'swr';

interface CharacterData {
	title: string;
	thumbnail: string;
	content: string;
}

const fetcher = async (url: string) => {
	const response = await fetch(url);
	const data = await response.json();
	return data.query.pages; // Adjust this based on the actual structure of the Wikipedia API response
};

const useCharacterData = (pageId: number) => {
	const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages|extracts&exintro=true&explaintext=true&pageids=${pageId}&pithumbsize=300&origin=*`;

	const { data, error } = useSWR<CharacterData>(apiUrl, fetcher);

	return {
		data,
		isLoading: !data && !error,
		isError: error,
	};
};

export default useCharacterData;
