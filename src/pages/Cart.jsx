import React, { useEffect, useState } from "react";
import API from "../api/api";
import { Trash2, ShoppingCart, CreditCard } from "lucide-react";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    try {
      const res = await API.get("/cart");
      setCart(res.data || []);
    } catch (e) {
      console.error(e);
      alert("Failed to load cart");
    }
    setLoading(false);
  }

  async function removeItem(productId) {
    try {
      const res = await API.delete(`/cart/${productId}`);
      setCart(res.data || []);
    } catch (e) {
      console.error(e);
      alert("Remove failed");
    }
  }

  async function checkout() {
    try {
      const items = cart.map((i) => ({
        product: i.product.title,
        qty: i.qty,
        price: i.product.price,
      }));
      const total = cart.reduce((sum, i) => sum + i.product.price * i.qty, 0);

      await API.post("/orders", { items, total, bulk: false });

      // ✅ WhatsApp Redirect
      const phoneNumber = "919876543210"; // change to your WhatsApp number
      const message = encodeURIComponent(
        `Hey gsThreads 👕,\n\nI just placed an order via the website!\n\nItems:\n${items
          .map((i) => `• ${i.product} x${i.qty} — ₹${i.price * i.qty}`)
          .join("\n")}\n\nTotal: ₹${total}\n\nPlease confirm my order details.`
      );

      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
      setCart([]);
    } catch (e) {
      console.error(e);
      alert("Checkout failed");
    }
  }

  if (loading)
    return (
      <div className="max-w-4xl mx-auto p-6 text-gray-300 text-center">
        Loading cart...
      </div>
    );

  const subtotal = cart.reduce((s, i) => s + i.product.price * i.qty, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start text-center sm:text-left">
        <ShoppingCart className="h-8 w-8 text-orange-500" />
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Your Cart
        </h1>
      </div>

      {/* Empty Cart */}
      {cart.length === 0 ? (
        <div className="text-gray-400 text-base sm:text-lg bg-gray-900 border border-gray-800 p-10 rounded-xl text-center">
          Your cart is empty 🛒
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cart.map((i) => (
              <div
                key={i.product._id}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-gray-900 border border-gray-800 p-5 rounded-xl hover:border-orange-500 transition-all duration-200"
              >
                <img
                  src={i.product.image}
                  alt={i.product.title}
                  className="w-full sm:w-28 h-40 sm:h-24 object-cover rounded-lg"
                />

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-semibold text-white text-lg sm:text-xl">
                    {i.product.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                    {i.product.description}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-2 sm:gap-0">
                    <span className="text-sm text-gray-400">
                      Qty: <strong>{i.qty}</strong>
                    </span>
                    <span className="text-gray-300 font-medium">
                      ₹{i.product.price * i.qty}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(i.product._id)}
                  className="text-red-500 hover:text-red-400 transition"
                  title="Remove"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl h-fit shadow-lg">
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 text-center sm:text-left">
              Order Summary
            </h2>

            <div className="space-y-3 text-gray-300 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <hr className="border-gray-700 my-3" />
              <div className="flex justify-between text-lg font-semibold text-orange-500">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={checkout}
              className="mt-6 w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition-all"
            >
              <CreditCard className="h-5 w-5" /> Checkout via WhatsApp
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
