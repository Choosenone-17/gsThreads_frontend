import React from 'react';
import API from '../api/api';

export default function ProductCard({ product }) {
  async function handleAdd() {
    try {
      await API.post('/cart', { productId: product._id, qty: 1 });
      alert('Added to cart');
    } catch (e) {
      if (e.response && e.response.status === 401) {
        if (confirm('Login required. Go to login?')) window.location.href = '/login';
      } else {
        console.error(e);
        alert('Could not add to cart');
      }
    }
  }

  function contactSupplier() {
    window.location.href = `mailto:bulk@gsthreads.example?subject=Inquiry%20about%20${encodeURIComponent(product.title)}`;
  }

  return (
    <div className="card animate-fade-in flex flex-col">
      <img src={product.image} alt={product.title} className="w-full h-44 object-cover rounded" />
      <div className="mt-3 flex-1">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-sm text-gray-400 mt-1">{product.description}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-bold">₹{product.price}</div>
        <div className="flex gap-2">
          <button className="px-3 py-1 border rounded border-gray-700" onClick={handleAdd}>Add to Cart</button>
          <button className="px-3 py-1 btn-brand" onClick={contactSupplier}>Contact</button>
        </div>
      </div>
    </div>
  );
}
