import { useState } from 'react';
import { useStore } from '../../store/store';
import { usePageContext } from '../../hooks/usePageContext';
import { getWeightUnit, createCartItem } from '../../utils/productUtils';

import { ProductImage } from './ProductImage';
import { ProductPrice } from './ProductPrice';
import { ProductComposition } from './ProductComposition';
import { IProduct } from '../../types/index';

interface ItemProps {
  item: IProduct;
  onFavorite: (obj: IProduct) => Promise<void>;
  onPlus?: (obj: IProduct) => Promise<void>;
}

export const Item = ({ item, onFavorite, onPlus }: ItemProps) => {
  const { drawerOpen, onAddToCartIcon } = useStore();
  const { isOrdersPage, isHomePage } = usePageContext();
  const [isFavorite, setIsFavorite] = useState(item.favorite);

  const handleAddToCart = () => {
    const cartItem = createCartItem(item);
    onPlus?.(cartItem);
    onAddToCartIcon(cartItem.id);
  };

  const handleToggleFavorite = () => {
    const cartItem = createCartItem(item);
    onFavorite(cartItem);
    if (isHomePage) {
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <>
      <ProductImage
        imageUrl={item.imageUrl}
        title={item.title}
        showFavorite={!isOrdersPage}
        isFavorite={!!isFavorite}
        onToggleFavorite={handleToggleFavorite}
      />

      <h4>{item.title}</h4>

      <ProductPrice
        price={item.price}
        showAddButton={!!onPlus}
        onAddToCart={handleAddToCart}
      />

      <ProductComposition
        composition={item.composition}
        weight={item.weight}
        weightUnit={getWeightUnit(item.filter)}
        showCartNotification={!!item.cart}
        onCartClick={drawerOpen}
      />
    </>
  );
};
