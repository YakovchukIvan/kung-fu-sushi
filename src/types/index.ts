export interface NavItem {
  to: string;
  title: string;
  icon: string;
  alt: string;
}

export interface OrderItem {
  id: string;
  imageUrl: string;
  title: string;
  count: number;
}

export interface Order {
  id: string;
  orderDate: number;
  items: OrderItem[];
  totalPrice: number;
}

export interface IProduct {
  id: string;
  parentId?: string;
  title: string;
  imageUrl: string;
  price: number;
  count: number;
  composition: string;
  weight: number;
  favorite?: boolean;
  cart?: boolean;
  filter?: string;
}

export interface StoreState {
  isLoading: boolean;
  categorySushi: string;
  cartItems: IProduct[];
  favorites: IProduct[];
  items: IProduct[];
  cartOpened: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setCartItems: (cartItems: IProduct[]) => void;
  setFavorites: (favorites: IProduct[]) => void;
  setItems: (items: IProduct[]) => void;
  onAddToCartIcon: (id: string, check?: string) => void;
}
