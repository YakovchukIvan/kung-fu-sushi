import { IProduct } from '@/types';

export const formatPrice = (price: number): string => {
  return `${price.toFixed()} грн.`;
};

export const getWeightUnit = (filter?: string): string => {
  return filter === 'Drinks' ? 'л' : 'г';
};

export const createCartItem = (item: IProduct): IProduct => ({
  id: item.id,
  parentId: item.id,
  title: item.title,
  imageUrl: item.imageUrl,
  price: item.price,
  count: item.count,
  composition: item.composition,
  weight: item.weight,
  favorite: item.favorite,
});
