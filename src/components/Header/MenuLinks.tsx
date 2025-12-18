import { Link } from 'react-router-dom';

interface MenuLinksProps {
  onClose: () => void;
}

export const MenuLinks = ({ onClose }: MenuLinksProps) => (
  <ul>
    <li>
      <Link to="/favorites" title="Обране" onClick={onClose}>
        ОБРАНІ
      </Link>
    </li>
    <li>
      <Link to="/orders" title="Замовлення" onClick={onClose}>
        ЗАМОВЛЕННЯ
      </Link>
    </li>
  </ul>
);
