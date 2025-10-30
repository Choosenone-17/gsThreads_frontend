import React, { useEffect, useState } from "react";
import API from "../api/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      const res = await API.get("/products");
      const data = res.data.products || res.data;
      setProducts(data);
      setFeatured(data.filter((p) => p.featured));
    } catch (e) {
      console.error("❌ Failed to load products:", e);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Print Your <span className="text-orange-500">Style</span> — <br className="hidden sm:block" />
            Wear Your Identity
          </h1>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            <strong className="text-orange-500">gsThreads</strong> — campus-first
            custom tees, premium materials, fast turnaround, and exclusive bulk
            pricing for orders of 20+ pieces.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#featured"
              className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-all shadow-md hover:shadow-orange-500/30"
            >
              Shop Featured
            </a>
            <a
              href="/help"
              className="px-6 py-2.5 border rounded-full border-gray-700 text-gray-300 text-sm sm:text-base hover:border-orange-500 hover:text-orange-500 transition-all"
            >
              Need Bulk Orders?
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=60"
            alt="students wearing custom tees"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-full max-w-lg"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 border-l-4 border-orange-500 pl-3">
          Featured Products
        </h2>

        {featured.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <div
                key={p._id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-6">
            No featured products yet.
          </p>
        )}
      </section>

      {/* All Products */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 border-l-4 border-orange-500 pl-3">
          All Products
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p._id}
                className="bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-6">
            No products available.
          </p>
        )}
      </section>
    </div>
  );
}
