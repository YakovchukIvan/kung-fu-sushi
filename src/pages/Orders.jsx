import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card/Card';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        'https://651323cd8e505cebc2e9a121.mockapi.io/orders/'
      );
      console.log(data);
    }

    fetchData();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мої замовлення</h1>
      </div>

      <div className="d-flex flex-wrap">
        {[].map((item, index) => (
          <Card />
        ))}
      </div>
    </div>
  );
}

export default Orders;
