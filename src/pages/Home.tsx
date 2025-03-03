import Header from '../components/Header';
import { useMealsAPI } from '../hooks/useMeals';
import MealsList from '../components/MealsList';
import { useSearchStore } from '../store/searchStore';
import { useDebounce } from '../hooks/useDebounce';
import { getSearchTerm } from '../store/selectors';
import Loader from '../components/common/Loader';
import { usePagination } from '../hooks/usePagination';
import { TMeal } from '../types/meals';

const Home = () => {
  const searchTerm = useSearchStore(getSearchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm);

  const { data: meals, isLoading, error } = useMealsAPI(debouncedSearchTerm);

  const {
    currentItems: paginatedMeals,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    hasNextPage,
    hasPreviousPage,
  } = usePagination<TMeal>({
    items: meals || [],
  });

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          <MealsList meals={paginatedMeals} />
          <div className="flex items-center justify-center gap-4 p-4">
            <button
              onClick={previousPage}
              disabled={!hasPreviousPage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Previous
            </button>
            <span className="text-lg font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={!hasNextPage}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
