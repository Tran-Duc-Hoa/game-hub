import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
	selectedGenre: Genre | null;
	selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
	const {
		data: games,
		error,
		isLoading,
	} = useGames(selectedGenre, selectedPlatform);
	const skeletons = [...Array(15)];

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{
					sm: 1,
					md: 2,
					lg: 3,
					xl: 5,
				}}
				padding="10px"
				spacing={3}
			>
				{isLoading &&
					skeletons.map((skeleton, index) => (
						<GameCardContainer key={index}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
