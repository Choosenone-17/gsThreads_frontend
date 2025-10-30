import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingCart, FiUser, FiLogOut, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;
  const [q, setQ] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  }

  function onSearch(e) {
    e.preventDefault();
    navigate(`/?q=${encodeURIComponent(q)}`);
    setMenuOpen(false); // close on search (mobile)
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-extrabold text-brand-orange">
            gsThreads
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link to="/" className="hover:text-brand-orange transition">Home</Link>
            <Link to="/about" className="hover:text-brand-orange transition">About</Link>
            <Link to="/help" className="hover:text-brand-orange transition">Help</Link>
            <Link to="/cart" className="hover:text-brand-orange transition">Cart</Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className="hover:text-brand-orange transition">Admin</Link>
            )}
          </div>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden sm:flex items-center gap-4">
          <form
            onSubmit={onSearch}
            className="hidden sm:flex items-center bg-gray-800 rounded px-2 py-1 gap-2"
          >
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-300"
            />
            <button type="submit" className="p-1"><FiSearch /></button>
          </form>

          <Link to="/cart" className="p-2 rounded hover:bg-gray-800">
            <FiShoppingCart size={20} />
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-2 py-1 hover:bg-gray-800 rounded"
              >
                <FiUser /> <span className="hidden sm:inline">{user.name || user.email}</span>
              </Link>
              <button onClick={logout} className="p-2 rounded hover:bg-gray-800">
                <FiLogOut />
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-brand">Login</Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-orange-500 transition"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-3 animate-slide-down">
          <Link onClick={() => setMenuOpen(false)} to="/" className="block text-gray-300 hover:text-orange-500">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about" className="block text-gray-300 hover:text-orange-500">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/help" className="block text-gray-300 hover:text-orange-500">Help</Link>
          <Link onClick={() => setMenuOpen(false)} to="/cart" className="block text-gray-300 hover:text-orange-500">Cart</Link>
          {user?.role === 'admin' && (
            <Link onClick={() => setMenuOpen(false)} to="/admin" className="block text-gray-300 hover:text-orange-500">Admin</Link>
          )}

          <form onSubmit={onSearch} className="flex items-center bg-gray-800 rounded px-2 py-1 gap-2 mt-3">
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-300 flex-1"
            />
            <button type="submit" className="p-1"><FiSearch /></button>
          </form>

          {user ? (
            <>
              <Link
                onClick={() => setMenuOpen(false)}
                to="/profile"
                className="flex items-center gap-2 text-gray-300 hover:text-orange-500 mt-3"
              >
                <FiUser /> {user.name || user.email}
              </Link>
              <button
                onClick={() => { logout(); setMenuOpen(false); }}
                className="flex items-center gap-2 text-red-500 mt-3"
              >
                <FiLogOut /> Logout
              </button>
            </>
          ) : (
            <Link
              onClick={() => setMenuOpen(false)}
              to="/login"
              className="block text-orange-500 font-semibold mt-3"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
