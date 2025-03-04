import { useNavigate } from 'react-router-dom';
import { useSearchStore } from '../store/searchStore';
import { getSearchTerm, getSetSearchTerm } from '../store/selectors';
import InputText from './common/InputText';

const Header = () => {
  const searchTerm = useSearchStore(getSearchTerm);
  const setSearchTerm = useSearchStore(getSetSearchTerm);
  const navigate = useNavigate();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="bg-blue-50 p-4 md:p-4 md:px-6 flex flex-col md:flex-row items-center justify-between shadow-md gap-4 md:gap-0">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
        Meals
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full md:w-auto">
        <InputText
          value={searchTerm}
          onChange={onChangeInput}
          placeholder="Search meals..."
        />
        {searchTerm && (
          <button
            onClick={handleClearSearch}
            className="text-black-500 cursor-pointer"
          >
            Clear
          </button>
        )}
        <button
          className="w-full sm:w-auto bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-xl hover:bg-blue-600 transition-all duration-200 font-semibold shadow-sm hover:shadow-md active:scale-95"
          onClick={() => navigate('/add-meal')}
        >
          Add New Meal
        </button>
      </div>
    </div>
  );
};

export default Header;
