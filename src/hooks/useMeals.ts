import { useQuery } from "@tanstack/react-query";
import { getMeals, getMealById } from "../services/mealService";

export const useMealsAPI = (search: string) => {
  return useQuery({
    queryKey: ["meals", search], // Caches requests by search term
    queryFn: () => getMeals(search),
  });
};

export const useMealByIdAPI = (id: string) => {
  return useQuery({
    queryKey: ["meal", id],
    queryFn: () => getMealById(id),
    enabled: !!id,
  });
};
