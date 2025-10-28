import React from 'react';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white">Profile</h1>
      <div className="mt-4 card">
        <div className="text-white font-semibold">{user.name || user.email}</div>
        <div className="text-sm text-gray-400">{user.email}</div>
        <div className="mt-3">
          <span className="px-3 py-1 bg-gray-800 rounded text-sm">{user.role}</span>
        </div>
      </div>
    </div>
  );
}
