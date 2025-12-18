import { Item } from './Item';
import { Loader } from './Loader';
import styles from './Card.module.scss';
import { IProduct } from '../../types/index';

interface ICardProps {
  item?: IProduct | null;
  onFavorite: (obj: IProduct) => Promise<void>;
  onPlus?: (obj: IProduct) => Promise<void>;
  loading?: boolean;
}

export const Card = ({
  item,
  onFavorite,
  onPlus,
  loading = false,
}: ICardProps) => (
  <div className={styles.card}>
    {loading || !item ? (
      <Loader />
    ) : (
      <Item item={item} onFavorite={onFavorite} onPlus={onPlus} />
    )}
  </div>
);
