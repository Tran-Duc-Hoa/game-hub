import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';

import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { GameQuery } from './hooks/useGames';

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<Grid
			templateAreas={{
				base: `'nav' 'main'`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem gridArea="nav">
				<NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
			</GridItem>
			<Show above="lg">
				<GridItem gridArea="aside" paddingX={5}>
					<GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} selectedGenre={gameQuery.genre} />
				</GridItem>
			</Show>
			<GridItem gridArea="main">
				<Flex paddingLeft={2} marginBottom={5}>
					<Box marginRight={5}>
						<PlatformSelector
							selectedPlatform={gameQuery.platform}
							onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
						/>
						<SortSelector
							sortOrder={gameQuery.sortOrder}
							onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
						/>
					</Box>
				</Flex>
				<GameGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
