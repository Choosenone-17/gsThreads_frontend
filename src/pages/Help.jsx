import React from 'react';

export default function Help() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white">Help & Contact</h1>
      <p className="mt-3 text-gray-400">General support: <a href="mailto:support@gsthreads.example" className="text-brand-orange">support@gsthreads.example</a></p>
      <div className="mt-4 card">
        <p><strong className="text-white">Bulk orders team</strong></p>
        <p className="text-gray-400">Phone: +91-98765-43210</p>
        <p className="mt-2"><a href="mailto:bulk@gsthreads.example" className="text-brand-orange">bulk@gsthreads.example</a></p>
      </div>
    </div>
  );
}
