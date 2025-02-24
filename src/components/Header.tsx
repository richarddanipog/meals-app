import { useSearchStore } from '../store/searchStore';
import { getSearchTerm, getSetSearchTerm } from '../store/selectors';

const Header = () => {
  const searchTerm = useSearchStore(getSearchTerm);
  const setSearchTerm = useSearchStore(getSetSearchTerm);

  return (
    <div className="bg-gray-100 p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Meals</h1>
      <div className="flex gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search meals..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
          Add New Meal
        </button>
      </div>
    </div>
  );
};

export default Header;
