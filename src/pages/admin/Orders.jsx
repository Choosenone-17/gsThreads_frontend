import React, { useEffect, useState } from 'react';
import API from '../../api/api';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => { API.get('/admin/orders').then(r => setOrders(r.data)).catch(e => console.error(e)); }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-white">Orders</h2>
      <div className="mt-3">
        {orders.map(o => (
          <div key={o._id} className="card mb-3">
            <div><strong>Order:</strong> {o._id}</div>
            <div><strong>User:</strong> {o.user?.email}</div>
            <div className="mt-2 text-gray-400">Items: {o.items.map(i => `${i.product?.title} x${i.qty}`).join(', ')}</div>
            <div className="mt-2">Status: <span className="text-brand-orange">{o.status}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
