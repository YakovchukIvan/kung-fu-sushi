import { IProduct } from '../types';

const MAX_SEARCH_LENGTH = 30;

export const isValidSearchLength = (value: string): boolean => {
  return value.length <= MAX_SEARCH_LENGTH;
};

export const filterItemsBySearch = (
  items: IProduct[],
  searchValue: string,
): IProduct[] => {
  if (!searchValue.trim()) return items;

  const lowerSearch = searchValue.toLowerCase();
  return items.filter((item) => item.title.toLowerCase().includes(lowerSearch));
};
