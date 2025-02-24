import { SearchState } from './searchStore';

const getSearchTerm = (state: SearchState) => state.searchTerm;
const getSetSearchTerm = (state: SearchState) => state.setSearchTerm;

export { getSearchTerm, getSetSearchTerm };
