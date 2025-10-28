import React, { useEffect, useState } from 'react';
import API from '../../api/api';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ title: '', image: '', description: '', price: 0, featured: false });

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const res = await API.get('/products');
      setProducts(res.data);
    } catch (e) { console.error(e); }
  }

  async function create() {
    try {
      const res = await API.post('/admin/product', form);
      setProducts([res.data, ...products]);
      setForm({ title: '', image: '', description: '', price: 0, featured: false });
    } catch (e) { alert('Create failed'); console.error(e); }
  }

  async function remove(id) {
    if (!confirm('Delete product?')) return;
    try {
      await API.delete(`/admin/product/${id}`);
      setProducts(products.filter(p => p._id !== id));
    } catch (e) { alert('Delete failed'); console.error(e); }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-white">Products</h2>
      <div className="bg-gray-900 p-4 rounded mt-3 mb-6">
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full border mb-2 p-2 bg-transparent text-white" />
        <input placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} className="w-full border mb-2 p-2 bg-transparent text-white" />
        <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full border mb-2 p-2 bg-transparent text-white" />
        <input placeholder="Price" type="number" value={form.price} onChange={e => setForm({ ...form, price: Number(e.target.value) })} className="w-full border mb-2 p-2 bg-transparent text-white" />
        <div className="flex gap-2">
          <button onClick={create} className="btn-brand">Create</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p._id} className="card">
            <img src={p.image} className="h-40 w-full object-cover rounded" alt="" />
            <div className="mt-2 font-semibold text-white">{p.title}</div>
            <div className="text-gray-400">₹{p.price}</div>
            <div className="mt-2"><button onClick={() => remove(p._id)} className="px-2 py-1 bg-red-600 text-white rounded">Delete</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}
