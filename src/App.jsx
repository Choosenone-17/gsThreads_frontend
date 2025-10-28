import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AdminDashboard from './pages/admin/Dashboard';

function RequireAuth({ children, role }) {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;
  if (role) {
    try {
      const u = JSON.parse(localStorage.getItem('user') || '{}');
      if (u.role !== role) return <Navigate to="/" />;
    } catch (e) {
      return <Navigate to="/login" />;
    }
  }
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-dark text-brand-gray font-sans">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
            <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
            <Route path="/admin/*" element={<RequireAuth role="admin"><AdminDashboard /></RequireAuth>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
