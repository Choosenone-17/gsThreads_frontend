import React, { useEffect, useState } from 'react';
import API from '../api/api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const res = await API.get('/products');
      setProducts(res.data);
      setFeatured(res.data.filter(p => p.featured));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <section className="grid md:grid-cols-2 gap-6 items-center mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Print Your Style — Wear Your Identity</h1>
          <p className="mt-4 text-gray-400">gsThreads — campus-first custom tees, premium materials, fast turnaround and bulk pricing for 20+ pieces.</p>
          <div className="mt-6 flex gap-3">
            <a href="#featured" className="btn-brand">Shop Featured</a>
            <a href="/help" className="px-4 py-2 border rounded border-gray-700">Need Bulk Orders?</a>
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60" alt="students" className="rounded-lg shadow-lg" />
        </div>
      </section>

      <section id="featured" className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => <ProductCard key={p._id} product={p} />)}
        </div>
      </section>
    </div>
  );
}
