import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          'https://651323cd8e505cebc2e9a121.mockapi.io/orders/'
        );
        // Перший варіант. Дістаємо з бекенд масив з orders та поєднуємо його в один масив з окремими обєктами
        // console.log(data.map((obj) => obj.items).flat());
        // Другий варіант обєднання масивів
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Помилка при запросі замовлення');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мої замовлення</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(12)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
