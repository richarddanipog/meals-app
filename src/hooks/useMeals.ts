import { useQuery } from '@tanstack/react-query';
import { getMeals } from '../services/mealService';

export const useMealsAPI = (search: string) => {
  return useQuery({
    queryKey: ['meals', search], // Caches requests by search term
    queryFn: () => getMeals(search),
  });
};
