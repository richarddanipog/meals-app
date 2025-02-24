import { FC, memo } from "react";
import { TMeal } from "../types/meals";
import MealItem from "./MealItem";

interface MealsListProps {
  meals: TMeal[];
}

const MealsList: FC<MealsListProps> = ({ meals }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 p-4">
      {meals?.map(
        (meal: TMeal) =>
          meal?.strMealThumb && <MealItem key={meal.idMeal} meal={meal} />
      )}
    </div>
  );
};

export default memo(MealsList);
