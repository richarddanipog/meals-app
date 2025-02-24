import { FC } from "react";
import { TMeal } from "../types/meals";
import { Link } from "react-router-dom";

type TMealItemProps = {
  meal: TMeal;
};

const MealItem: FC<TMealItemProps> = ({ meal }) => {
  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <div
        key={meal.idMeal}
        className="flex flex-col items-center justify-center bg-white rounded-lg border-2 border-gray-200 overflow-hidden"
      >
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h2>{meal.strMeal}</h2>
      </div>
    </Link>
  );
};

export default MealItem;
