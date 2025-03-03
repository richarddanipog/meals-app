import { create } from 'zustand';
import { ISearchState } from './types';

export const useSearchStore = create<ISearchState>((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
