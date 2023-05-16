import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	SkeletonText,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data: genres, isLoading } = useGenres();

	if (isLoading) {
		const skeletons = [...Array(15)];

		return (
			<List>
				{skeletons.map((skeleton, index) => (
					<ListItem key={index} paddingY="5px">
						<HStack>
							<SkeletonText width="100%" />
						</HStack>
					</ListItem>
				))}
			</List>
		);
	}

	return (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
							onClick={() => onSelectGenre(genre)}
							fontSize="lg"
							fontWeight={
								genre.id === selectedGenre?.id
									? 'bold'
									: 'normal'
							}
							variant="link"
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
