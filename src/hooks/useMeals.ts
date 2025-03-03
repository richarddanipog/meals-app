import { useQuery } from '@tanstack/react-query';
import {
  getMeals,
  getMealById,
  getAlphabetMeals,
} from '../services/mealService';

export const useMealsAPI = (search: string) => {
  return useQuery({
    queryKey: ['meals', search], // Caches requests by search term
    queryFn: () => {
      if (!search) {
        return getAlphabetMeals(); // Get all meals when no search term
      }
      return getMeals(search); // Get filtered meals when search term exists
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useMealByIdAPI = (id: string) => {
  return useQuery({
    queryKey: ['meal', id],
    queryFn: () => getMealById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });
};
