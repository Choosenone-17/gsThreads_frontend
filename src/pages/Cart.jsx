import React, { useEffect, useState } from 'react';
import API from '../api/api';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchCart(); }, []);

  async function fetchCart() {
    try {
      const res = await API.get('/cart');
      setCart(res.data);
    } catch (e) {
      console.error(e);
      alert('Load cart failed');
    }
    setLoading(false);
  }

  async function removeItem(productId) {
    try {
      const res = await API.delete(`/cart/${productId}`);
      setCart(res.data);
    } catch (e) {
      console.error(e);
      alert('Remove failed');
    }
  }

  async function checkout() {
    try {
      const items = cart.map(i => ({ product: i.product._id, qty: i.qty }));
      const total = cart.reduce((s, i) => s + (i.product.price * i.qty), 0);
      const res = await API.post('/orders', { items, total, bulk: false });
      alert('Order placed. ID: ' + res.data._id);
      setCart([]);
    } catch (e) {
      console.error(e);
      alert('Checkout failed');
    }
  }

  if (loading) return <div className="max-w-4xl mx-auto p-6">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Your Cart</h1>
      {cart.length === 0 ? <div className="text-gray-400">Your cart is empty.</div> : (
        <div className="space-y-4">
          {cart.map(i => (
            <div key={i.product._id} className="flex items-center gap-4 card">
              <img src={i.product.image} className="w-24 h-24 object-cover rounded" alt="" />
              <div className="flex-1">
                <div className="font-semibold text-white">{i.product.title}</div>
                <div className="text-sm text-gray-400">Qty: {i.qty}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">₹{i.product.price * i.qty}</div>
                <button className="text-sm underline mt-2 text-brand-orange" onClick={() => removeItem(i.product._id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <button className="btn-brand" onClick={checkout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
