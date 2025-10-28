import React from 'react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white">About gsThreads</h1>
      <p className="mt-3 text-gray-400">gsThreads is a campus-first custom T-shirt printing startup delivering premium prints, bulk pricing and fast campus pickup/delivery.</p>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="card">
          <h3 className="font-semibold text-white">Custom Prints</h3>
          <p className="text-gray-400 text-sm mt-1">Direct-to-garment & screen printing for vibrant, long-lasting results.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-white">Bulk Orders</h3>
          <p className="text-gray-400 text-sm mt-1">Special pricing for 20+ pieces, fast turnarounds.</p>
        </div>
        <div className="card">
          <h3 className="font-semibold text-white">Premium Materials</h3>
          <p className="text-gray-400 text-sm mt-1">Soft cotton, performance fabrics, and sustainable options.</p>
        </div>
      </div>
    </div>
  );
}
