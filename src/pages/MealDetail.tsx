import { FC, useMemo } from 'react';
import { TMeal } from '../types/meals';
import { Link, useParams } from 'react-router-dom';
import { useMealByIdAPI } from '../hooks/useMeals';
import IngredientsList from '../components/IngredientsList';
import MealLink from '../components/MealLink';
import Loader from '../components/common/Loader';

const MealDetail: FC = () => {
  const { id } = useParams();
  const { data: meal, isLoading } = useMealByIdAPI(id as string);

  const getIngredients = useMemo(() => {
    if (!meal) return [];

    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}` as keyof TMeal];
      if (ingredient) {
        ingredients.push(ingredient as string);
      }
    }

    return ingredients;
  }, [meal]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          <Link
            to="/"
            className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            ← Back
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={meal?.strMealThumb}
                alt={meal?.strMeal}
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{meal?.strMeal}</h1>
              <div className="mb-4">
                <span className="font-semibold">Category:</span>{' '}
                {meal?.strCategory}
              </div>
              <div className="mb-4">
                <span className="font-semibold">Area:</span> {meal?.strArea}
              </div>
              {meal?.strTags && (
                <div className="mb-4">
                  <span className="font-semibold">Tags:</span> {meal?.strTags}
                </div>
              )}
            </div>
          </div>

          <IngredientsList ingredients={getIngredients} />

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <p className="whitespace-pre-line">{meal?.strInstructions}</p>
          </div>

          <MealLink
            url={meal?.strYoutube}
            title="Video Tutorial"
            linkText="Watch on YouTube"
          />
          <MealLink
            url={meal?.strSource}
            title="Source"
            linkText="Original Recipe"
          />
        </div>
      )}
    </>
  );
};

export default MealDetail;
