import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const ORDERS = [
	{
		label: 'Relevance',
		value: '',
	},
	{
		label: 'Date added',
		value: '-added',
	},
	{
		label: 'Name',
		value: 'name',
	},
	{
		label: 'Release date',
		value: '-released',
	},
	{
		label: 'Popularity',
		value: '-metacritic',
	},
	{
		label: 'Average rating',
		value: '-rating',
	},
];

interface Props {
	sortOrder: string | null;
	onSelectSortOrder: (order: string) => void;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
	const currentSortOrder = ORDERS.find((order) => order.value === sortOrder);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentSortOrder?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{ORDERS.map((order) => (
					<MenuItem key={order.value} value={order.value} onClick={() => onSelectSortOrder(order.value)}>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
