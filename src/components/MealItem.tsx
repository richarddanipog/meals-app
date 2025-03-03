import { FC, memo, useState } from 'react';
import { TMeal } from '../types/meals';
import { Link } from 'react-router-dom';

type TMealItemProps = {
  meal: TMeal;
};

const MealItem: FC<TMealItemProps> = ({ meal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/meal/${meal.idMeal}`}>
      <div className="relative">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`rounded-lg transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
      <h6 className="text-center text-sm font-semibold p-2 truncate w-full">
        {meal.strMeal}
      </h6>
    </Link>
  );
};

export default memo(MealItem);
