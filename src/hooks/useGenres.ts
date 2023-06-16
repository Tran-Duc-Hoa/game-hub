import { useQuery } from '@tanstack/react-query';
import genres from 'src/data/genres';
import apiClient from 'src/services/api-client';
import { FetchResponse } from './useData';

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then((res) => res.data),
		staleTime: 1000 * 60 * 60 * 24, // 1 day
		initialData: {
			count: genres.length,
			results: genres,
		},
	});

export default useGenres;
