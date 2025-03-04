import { TMeal } from '../types/meals';

const STORAGE_KEY = 'savedMeals';

export const getLocalMeals = (): TMeal[] => {
  const savedMeals = localStorage.getItem(STORAGE_KEY);

  return savedMeals ? JSON.parse(savedMeals) : [];
};

export const getSearchMeals = (search: string): TMeal[] => {
  const localMeals = getLocalMeals();

  return localMeals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(search.toLowerCase())
  );
};
