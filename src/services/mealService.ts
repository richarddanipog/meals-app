import api from "./api";

export const getMeals = async (search: string) => {
  try {
    const searchTerm = search || "a"; // 'a' for fetch default results
    const { data } = await api.get(`search.php?s=${searchTerm}`);

    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);

    return [];
  }
};

export const getAlphabetMeals = async () => {
  try {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const requests = alphabet.map((letter) =>
      api
        .get(`search.php?f=${letter}`)
        .then(({ data }) => data.meals || [])
        .catch(() => [])
    );

    const results = await Promise.all(requests);
    return results.flat();
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
};

export const getMealById = async (id: string) => {
  try {
    const { data } = await api.get(`lookup.php?i=${id}`);

    return data.meals[0];
  } catch (error) {
    console.error("Error fetching meal by id:", error);

    return null;
  }
};
