import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
	sortOrder: string | null;
	searchText: string | null;
}

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchText,
			},
		},
		[gameQuery]
	);

export default useGames;
