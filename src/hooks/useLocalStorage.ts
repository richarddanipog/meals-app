import { useState, useEffect } from 'react';
import { TMeal } from '../types/meals';
import { useQueryClient } from '@tanstack/react-query';

const STORAGE_KEY = 'savedMeals';

export const useLocalStorage = () => {
  const queryClient = useQueryClient();
  const [meals, setMeals] = useState<TMeal[]>(() => {
    const savedMeals = localStorage.getItem(STORAGE_KEY);
    return savedMeals ? JSON.parse(savedMeals) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(meals));
  }, [meals]);

  const addMeal = (meal: TMeal) => {
    setMeals((prevMeals) => [...prevMeals, meal]);
    queryClient.invalidateQueries({ queryKey: ['meals'] });
  };

  const getMeals = (searchTerm?: string) => {
    if (!searchTerm) return meals;

    return meals.filter(
      (meal) =>
        meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meal.strCategory.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return {
    meals,
    addMeal,
    getMeals,
  };
};
