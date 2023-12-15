import useSWR from 'swr';

interface CharacterSearchData {
	title: string;
	thumbnail: string;
	content: string;
}

const fetcher = async (url: string) => {
	const response = await fetch(url);
	const data = await response.json();
	return data.query.pages; // Adjust this based on the actual structure of the Wikipedia API response
};

const useCharacterSearch = (searchQuery: string) => {
	const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&generator=search&format=json&exintro&exsentences=1&exlimit=max&gsrlimit=10&gsrsearch=hastemplate:Birth_date_and_age+${searchQuery}&pithumbsize=100&pilimit=max&prop=pageimages%7Cextracts&origin=*`;

	const { data, error } = useSWR<CharacterSearchData>(apiUrl, fetcher);

	return {
		data,
		isLoading: !data && !error,
		isError: error,
	};
};

export default useCharacterSearch;
