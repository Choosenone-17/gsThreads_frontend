import React, { useEffect, useState } from 'react';
import API from '../../api/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => { API.get('/admin/users').then(r => setUsers(r.data)).catch(e => console.error(e)); }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-white">Users</h2>
      <div className="mt-3 card">
        {users.map(u => (
          <div key={u._id} className="flex justify-between py-2 border-b border-gray-800">
            <div>{u.name} — {u.email}</div>
            <div className="text-sm text-gray-400">{u.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
