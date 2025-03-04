type Nullable = string | null;

// this is the type of meal that we get from the API
export type TMeal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea?: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: Nullable;
  strYoutube: string;
  strSource: string;
  strImageSource?: Nullable;

  strIngredient1?: Nullable;
  strIngredient2?: Nullable;
  strIngredient3?: Nullable;
  strIngredient4?: Nullable;
  strIngredient5?: Nullable;
  strIngredient6?: Nullable;
  strIngredient7?: Nullable;
  strIngredient8?: Nullable;
  strIngredient9?: Nullable;
  strIngredient10?: Nullable;
  strIngredient11?: Nullable;
  strIngredient12?: Nullable;
  strIngredient13?: Nullable;
  strIngredient14?: Nullable;
  strIngredient15?: Nullable;
  strIngredient16?: Nullable;
  strIngredient17?: Nullable;
  strIngredient18?: Nullable;
  strIngredient19?: Nullable;
  strIngredient20?: Nullable;

  strMeasure1?: Nullable;
  strMeasure2?: Nullable;
  strMeasure3?: Nullable;
  strMeasure4?: Nullable;
  strMeasure5?: Nullable;
  strMeasure6?: Nullable;
  strMeasure7?: Nullable;
  strMeasure8?: Nullable;
  strMeasure9?: Nullable;
  strMeasure10?: Nullable;
  strMeasure11?: Nullable;
  strMeasure12?: Nullable;
  strMeasure13?: Nullable;
  strMeasure14?: Nullable;
  strMeasure15?: Nullable;
  strMeasure16?: Nullable;
  strMeasure17?: Nullable;
  strMeasure18?: Nullable;
  strMeasure19?: Nullable;
  strMeasure20?: Nullable;
  ingredients?: TIngredient[];
};

export type TIngredient = {
  ingredient: string;
  measure: string;
};
