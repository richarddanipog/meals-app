import { FC, memo } from 'react';
import { TMeal } from '../types/meals';

interface MealsListProps {
  meals: TMeal[];
}

const MealsList: FC<MealsListProps> = ({ meals }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-4 p-4">
      {meals?.map(
        (meal: TMeal) =>
          meal?.strMealThumb && (
            <div
              key={meal.idMeal}
              className="flex flex-col items-center justify-center bg-white rounded-lg border-2 border-gray-200 overflow-hidden"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={'100%'}
                height={300}
              />
              <h2>{meal.strMeal}</h2>
            </div>
          )
      )}
    </div>
  );
};

export default memo(MealsList);
