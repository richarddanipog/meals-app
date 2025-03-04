import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { TMeal } from '../types/meals';
import InputErrorText from '../components/common/InputErrorText';
import InputText from '../components/common/InputText';

const AddMealForm: React.FC = () => {
  const navigate = useNavigate();
  const { addMeal } = useLocalStorage();
  const [formData, setFormData] = useState({
    strMeal: '',
    strCategory: '',
    strInstructions: '',
    strMealThumb: '',
    strYoutube: '',
    strSource: '',
    ingredients: [{ ingredient: '', measure: '' }],
  });

  const [error, setError] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.strMeal) errors.strMeal = 'Meal name is required';
    if (!formData.strCategory) errors.strCategory = 'Category is required';
    if (!formData.strInstructions)
      errors.strInstructions = 'Instructions are required';
    if (!formData.strMealThumb) errors.strMealThumb = 'Meal image is required';

    const ingredientsIsEmpty = formData.ingredients.every(
      (ingredient) => ingredient.ingredient === ''
    );
    if (ingredientsIsEmpty)
      errors.ingredients = 'At least one ingredient is required';

    return errors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError((prev) => ({ ...prev, [name]: '' }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setFormData((prev) => ({
          ...prev,
          strMealThumb: reader.result as string,
        }));
      reader.readAsDataURL(file);

      setError((prev) => ({ ...prev, strMealThumb: '' }));
    }
  };

  const handleIngredientChange = (
    index: number,
    field: 'ingredient' | 'measure',
    value: string
  ) => {
    const newIngredients = [...formData.ingredients];
    newIngredients[index] = {
      ...newIngredients[index],
      [field]: value,
    };
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const addIngredientField = () => {
    setFormData({
      ...formData,
      ingredients: [...formData.ingredients, { ingredient: '', measure: '' }],
    });
  };

  const removeIngredientField = (index: number) => {
    const newIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: newIngredients });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    const newMeal: TMeal = {
      idMeal: Date.now().toString(), // Simple way to generate unique ID
      ...formData,
      ...formData.ingredients.reduce(
        (acc, item, index) => ({
          ...acc,
          [`strIngredient${index + 1}`]: item.ingredient,
          [`strMeasure${index + 1}`]: item.measure,
        }),
        {}
      ),
    };

    addMeal(newMeal);
    navigate('/'); // Redirect to home page after adding
  };

  return (
    <div>
      <div className="bg-blue-50 p-4 md:p-4 md:px-6 flex flex-col md:flex-row items-start justify-between shadow-md gap-4 md:gap-0">
        <Link
          to="/"
          className=" left-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          ← Back
        </Link>
      </div>
      <div className="p-10 rounded-xl flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-5">Add New Meal</h1>
        <form className="w-full max-w-2xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <InputText
              name="strMeal"
              value={formData.strMeal}
              onChange={handleInputChange}
              placeholder="Meal Name"
              error={error.strMeal}
            />

            <InputText
              name="strCategory"
              value={formData.strCategory}
              onChange={handleInputChange}
              placeholder="Category"
              error={error.strCategory}
            />

            <textarea
              name="strInstructions"
              value={formData.strInstructions}
              onChange={handleInputChange}
              placeholder="Instructions"
              rows={4}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all placeholder-gray-400"
            />
            {error.strInstructions && (
              <InputErrorText error={error.strInstructions} />
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="mealImage" className="text-gray-700">
                Meal Image
              </label>
              <input
                type="file"
                id="mealImage"
                name="strMealThumb"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all"
              />
              {formData.strMealThumb && (
                <img
                  src={formData.strMealThumb}
                  alt="Meal preview"
                  className="w-32 h-32 object-cover rounded-lg mt-2"
                />
              )}
              {error.strMealThumb && (
                <InputErrorText error={error.strMealThumb} />
              )}
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl font-semibold">Ingredients</h2>
              {formData.ingredients.map((item, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={item.ingredient}
                      onChange={(e) =>
                        handleIngredientChange(
                          index,
                          'ingredient',
                          e.target.value
                        )
                      }
                      placeholder="Ingredient"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      value={item.measure}
                      onChange={(e) =>
                        handleIngredientChange(index, 'measure', e.target.value)
                      }
                      placeholder="Measure"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all"
                    />
                  </div>
                  {formData.ingredients.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeIngredientField(index)}
                      className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              {error.ingredients && (
                <InputErrorText error={error.ingredients} />
              )}
              <button
                type="button"
                onClick={addIngredientField}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors w-fit"
              >
                Add Ingredient
              </button>
            </div>

            <InputText
              name="strYoutube"
              value={formData.strYoutube}
              onChange={handleInputChange}
              placeholder="Youtube URL"
            />
            <InputText
              name="strSource"
              value={formData.strSource}
              onChange={handleInputChange}
              placeholder="Source URL"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mt-4"
          >
            Add Meal
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMealForm;
