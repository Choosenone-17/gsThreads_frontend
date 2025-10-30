import React from "react";
import API from "../api/api";

export default function ProductCard({ product }) {
  async function handleAdd() {
    try {
      await API.post("/cart", { productId: product._id, qty: 1 });
      alert("Added to cart");
    } catch (e) {
      if (e.response && e.response.status === 401) {
        if (confirm("Login required. Go to login?"))
          window.location.href = "/login";
      } else {
        console.error(e);
        alert("Could not add to cart");
      }
    }
  }

  // ✅ Contact via WhatsApp (mobile-friendly)
  function contactSupplier() {
    const phone = "919876543210"; // <-- replace with your WhatsApp number (no + or spaces)
    const message = encodeURIComponent(
      `Hi gsThreads 👋! I'm interested in the product "${product.title}" priced at ₹${product.price}. Could you share more details?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  }

  return (
    <div className="card animate-fade-in flex flex-col h-full hover:shadow-lg hover:shadow-orange-500/10 transition-all transform hover:-translate-y-1 hover:scale-[1.02]">
      {/* ✅ Responsive image */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* ✅ Product info */}
      <div className="mt-3 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-lg text-white truncate">
            {product.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* ✅ Price + Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="font-bold text-orange-500 text-lg">
            ₹{product.price}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              className="px-3 py-1.5 border rounded border-gray-700 text-sm text-white hover:border-orange-500 hover:text-orange-500 transition w-full sm:w-auto"
              onClick={handleAdd}
            >
              Add to Cart
            </button>
            <button
              className="px-3 py-1.5 rounded bg-orange-500 text-white text-sm hover:bg-orange-600 transition w-full sm:w-auto"
              onClick={contactSupplier}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
