import api from './api';

export const getMeals = async (search: string) => {
  try {
    const searchTerm = search || 'a'; // 'a' for fetch default results
    const { data } = await api.get(`search.php?s=${searchTerm}`);

    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meals:', error);

    return [];
  }
};
