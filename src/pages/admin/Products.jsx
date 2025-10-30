import React, { useEffect, useState } from "react";
import API from "../../api/api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    featured: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const res = await API.get("/products");
      setProducts(res.data.products || res.data);
    } catch (e) {
      console.error(e);
    }
  }

  async function create(e) {
    e.preventDefault();
    if (!form.title || !form.description || !form.price || !imageFile) {
      alert("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => formData.append(key, value));
    formData.append("image", imageFile);

    try {
      setLoading(true);
      const res = await API.post("/admin/product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProducts([res.data.product, ...products]);
      setForm({ title: "", description: "", price: "", featured: false });
      setImageFile(null);
      setLoading(false);
      alert("✅ Product created successfully");
    } catch (e) {
      console.error(e);
      setLoading(false);
      alert("❌ Create failed");
    }
  }

  async function remove(id) {
    if (!confirm("Delete this product?")) return;
    try {
      await API.delete(`/admin/product/${id}`);
      setProducts(products.filter((p) => p._id !== id));
    } catch (e) {
      console.error(e);
      alert("Delete failed");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white p-4 sm:p-6 lg:p-10">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left text-orange-500 mb-6">
        Manage Products
      </h2>

      {/* Create Form */}
      <form
        onSubmit={create}
        className="bg-gray-900 border border-gray-800 p-5 sm:p-6 rounded-2xl shadow-md mb-10 max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-semibold mb-4 text-center sm:text-left text-orange-400">
          Add New Product
        </h3>

        <div className="grid gap-4">
          <input
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-gray-800 text-white focus:border-orange-500 outline-none"
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-gray-800 text-white focus:border-orange-500 outline-none min-h-[100px]"
          />

          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full border border-gray-700 rounded-lg px-4 py-2 bg-gray-800 text-white focus:border-orange-500 outline-none"
          />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="w-full sm:w-auto">
              <label className="text-sm text-gray-400 block mb-1">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
                className="w-full text-gray-200"
              />
            </div>

            <label className="flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) =>
                  setForm({ ...form, featured: e.target.checked })
                }
              />
              Mark as Featured
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-3 bg-orange-600 hover:bg-orange-500 disabled:bg-gray-600 text-white font-semibold py-2 rounded-lg transition-all"
          >
            {loading ? "Uploading..." : "Create Product"}
          </button>
        </div>
      </form>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:border-orange-500 transition-all duration-300 flex flex-col"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-52 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-orange-400">{p.title}</h3>
              <p className="text-sm text-gray-400 mt-1 line-clamp-3">
                {p.description}
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                ₹{p.price}
              </p>

              <div className="flex justify-end mt-auto pt-4">
                <button
                  onClick={() => remove(p._id)}
                  className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-lg text-sm font-semibold transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-gray-400 text-center mt-10">
          No products found. Add some to get started!
        </p>
      )}
    </div>
  );
}
