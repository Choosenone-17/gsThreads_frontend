import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Products from './Products';
import Orders from './Orders';
import Users from './Users';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
      <div className="flex gap-3 mt-4 mb-6">
        <Link to="products" className="px-3 py-1 btn-brand">Products</Link>
        <Link to="orders" className="px-3 py-1 border rounded border-gray-700">Orders</Link>
        <Link to="users" className="px-3 py-1 border rounded border-gray-700">Users</Link>
      </div>
      <Routes>
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
        <Route path="/" element={<div className="text-gray-400">Select a section</div>} />
      </Routes>
    </div>
  );
}
