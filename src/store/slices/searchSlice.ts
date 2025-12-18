import { StateCreator } from 'zustand';
import { IProduct } from '../../types';
import {
  isValidSearchLength,
  filterItemsBySearch,
} from '../../utils/searchUtils';

export interface SearchSlice {
  searchValue: string;

  setSearchValue: (searchValue: string) => void;
  clearSearch: () => void;
  filterItems: (items: IProduct[], searchValue: string) => IProduct[];
}

export const createSearchSlice: StateCreator<
  SearchSlice,
  [],
  [],
  SearchSlice
> = (set) => ({
  searchValue: '',

  setSearchValue: (searchValue) => {
    if (isValidSearchLength(searchValue)) {
      set({ searchValue });
    }
  },

  clearSearch: () => set({ searchValue: '' }),

  filterItems: filterItemsBySearch,
});
