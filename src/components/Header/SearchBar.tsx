import { ChangeEvent } from 'react';
import styles from './Header.module.scss';

interface SearchBarProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className={styles.search__block}>
    <img src="/img/search.svg" alt="Search-icon" />
    <input onChange={onChange} value={value} placeholder="Пошук ..." />
  </div>
);
