import { SimpleGrid, Text } from '@chakra-ui/react';

import useGames, { GameQuery } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data: games, error, isLoading } = useGames(gameQuery);
	const skeletons = [...Array(15)];

	if (error) return <Text>{error}</Text>;

	return (
		<SimpleGrid
			columns={{
				sm: 1,
				md: 2,
				lg: 3,
				xl: 4,
			}}
			padding="10px"
			spacing={6}
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
	);
};

export default GameGrid;
