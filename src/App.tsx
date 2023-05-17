import { Grid, GridItem, Show } from '@chakra-ui/react';
import { useState } from 'react';

import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
		null
	);

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
				<NavBar />
			</GridItem>
			<Show above="lg">
				<GridItem gridArea="aside" paddingX={5}>
					<GenreList
						onSelectGenre={setSelectedGenre}
						selectedGenre={selectedGenre}
					/>
				</GridItem>
			</Show>
			<GridItem gridArea="main">
				<PlatformSelector
					selectedPlatform={selectedPlatform}
					onSelectPlatform={setSelectedPlatform}
				/>
				<GameGrid
					selectedGenre={selectedGenre}
					selectedPlatform={selectedPlatform}
				/>
			</GridItem>
		</Grid>
	);
}

export default App;
