import { ISearchState } from './types';

const getSearchTerm = (state: ISearchState) => state.searchTerm;
const getSetSearchTerm = (state: ISearchState) => state.setSearchTerm;

export { getSearchTerm, getSetSearchTerm };
