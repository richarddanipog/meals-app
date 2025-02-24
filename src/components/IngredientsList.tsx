import { FC, memo } from "react";

interface IngredientsListProps {
  ingredients: string[];
}

const IngredientsList: FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
      <ul className="list-disc list-inside">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(IngredientsList);
