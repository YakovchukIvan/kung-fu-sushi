interface IEmptySearchProps {
  onReset: () => void;
}

export const EmptySearch = ({ onReset }: IEmptySearchProps) => (
  <div className="search-null">
    <h2>Товару з таким іменем не знайдено</h2>
    <button className="greenButton" onClick={onReset}>
      Спробуйте іншу назву
    </button>
    <img src="/img/cart-empty.jpg" alt="cart-empty" />
  </div>
);
