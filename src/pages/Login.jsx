import React, { useState } from 'react';
import API from '../api/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      if (mode === 'register') {
        if (form.password !== form.confirm) return alert('Passwords must match');
        const res = await API.post('/auth/register', { name: form.name, email: form.email, password: form.password });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/');
      } else {
        const res = await API.post('/auth/login', { email: form.email, password: form.password });
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/');
      }
    } catch (e) {
      alert(e.response?.data?.msg || 'Error logging in');
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 mt-12 card">
      <h2 className="text-2xl font-semibold mb-4 text-white">{mode === 'login' ? 'Login' : 'Create account'}</h2>
      <form onSubmit={submit} className="space-y-3">
        {mode === 'register' && <input placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border rounded px-3 py-2 bg-transparent text-white" />}
        <input placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border rounded px-3 py-2 bg-transparent text-white" />
        <input placeholder="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} className="w-full border rounded px-3 py-2 bg-transparent text-white" />
        {mode === 'register' && <input placeholder="Confirm password" type="password" value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} className="w-full border rounded px-3 py-2 bg-transparent text-white" />}
        <div className="flex items-center justify-between">
          <button className="btn-brand" type="submit">{mode === 'login' ? 'Login' : 'Create account'}</button>
          <button type="button" className="text-sm text-gray-400 underline" onClick={() => setMode(mode === 'login' ? 'register' : 'login')}>
            {mode === 'login' ? 'Create account' : 'Already have an account? Login'}
          </button>
        </div>
        <div className="text-right"><button type="button" className="text-sm text-gray-400 underline" onClick={() => alert('Password reset flow (demo)')}>Forgot password?</button></div>
      </form>
    </div>
  );
}
