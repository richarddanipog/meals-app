import api from './api';
import { getLocalMeals, getSearchMeals } from '../utils/helpers';
import { TMeal } from '../types/meals';

export const getMeals = async (search: string): Promise<TMeal[]> => {
  try {
    const searchTerm = search;
    const { data } = await api.get(`search.php?s=${searchTerm}`);

    const apiMeals = data.meals || [];
    const filteredLocalMeals = getSearchMeals(searchTerm);
    const allMeals = [...apiMeals, ...filteredLocalMeals];

    return allMeals;
  } catch (error) {
    console.error('Error fetching meals:', error);

    return [];
  }
};

export const getAlphabetMeals = async (): Promise<TMeal[]> => {
  try {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const requests = alphabet.map((letter) =>
      api
        .get(`search.php?f=${letter}`)
        .then(({ data }) => data.meals || [])
        .catch(() => [])
    );

    const results = await Promise.all(requests);
    const localMeals = getLocalMeals();
    const allMeals = [...results.flat(), ...localMeals];

    return allMeals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
};

export const getMealById = async (id: string): Promise<TMeal> => {
  try {
    const { data } = await api.get(`lookup.php?i=${id}`);

    if (!data.meals) {
      const localMeals = getLocalMeals();
      const meal = localMeals.find((meal) => meal.idMeal === id);

      return meal || ({} as TMeal);
    }

    return data.meals[0];
  } catch (error) {
    console.error('Error fetching meal by id:', error);

    return {} as TMeal;
  }
};
