import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiLogOut } from 'react-icons/fi';

export default function Navbar() {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;
  const [q, setQ] = useState('');

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  }

  function onSearch(e) {
    e.preventDefault();
    // optional: navigate to /?q=...
    navigate(`/?q=${encodeURIComponent(q)}`);
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-extrabold text-brand-orange">gsThreads</Link>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link to="/" className="hover:text-brand-orange transition">Home</Link>
            <Link to="/about" className="hover:text-brand-orange transition">About</Link>
            <Link to="/help" className="hover:text-brand-orange transition">Help</Link>
            <Link to="/cart" className="hover:text-brand-orange transition">Cart</Link>
            {user?.role === 'admin' && <Link to="/admin" className="hover:text-brand-orange transition">Admin</Link>}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={onSearch} className="hidden sm:flex items-center bg-gray-800 rounded px-2 py-1 gap-2">
            <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search..." className="bg-transparent outline-none text-sm text-gray-300" />
            <button type="submit" className="p-1"><FiSearch /></button>
          </form>

          <Link to="/cart" className="p-2 rounded hover:bg-gray-800">
            <FiShoppingCart size={20} />
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <Link to="/profile" className="flex items-center gap-2 px-2 py-1 hover:bg-gray-800 rounded">
                <FiUser /> <span className="hidden sm:inline">{user.name || user.email}</span>
              </Link>
              <button onClick={logout} className="p-2 rounded hover:bg-gray-800"><FiLogOut /></button>
            </div>
          ) : (
            <Link to="/login" className="btn-brand">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
