import Header from "../components/Header";
import { useMealsAPI } from "../hooks/useMeals";
import MealsList from "../components/MealsList";
import { useSearchStore } from "../store/searchStore";
import { useDebounce } from "../hooks/useDebounce";
import { getSearchTerm } from "../store/selectors";
import Loader from "../components/common/Loader";

const Home = () => {
  const searchTerm = useSearchStore(getSearchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm);

  const { data: meals, isLoading, error } = useMealsAPI(debouncedSearchTerm);

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <MealsList meals={meals} />
      )}
    </div>
  );
};

export default Home;
