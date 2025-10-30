import React, { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";

export default function Login() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      if (mode === "register") {
        if (form.password !== form.confirm)
          return alert("Passwords must match");

        const res = await API.post("/auth/register", {
          name: form.name,
          email: form.email,
          password: form.password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      } else {
        const res = await API.post("/auth/login", {
          email: form.email,
          password: form.password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      }
    } catch (e) {
      alert(e.response?.data?.msg || "Error logging in");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="w-full max-w-md bg-gray-900/70 border border-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">
          {mode === "login" ? "Welcome Back 👋" : "Create Your Account"}
        </h2>
        <p className="text-center text-gray-400 mb-6 text-sm sm:text-base">
          {mode === "login"
            ? "Sign in to continue shopping with gsThreads"
            : "Join gsThreads and start creating your style"}
        </p>

        {/* Form */}
        <form onSubmit={submit} className="space-y-4">
          {mode === "register" && (
            <input
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full border border-gray-700 bg-gray-800/50 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          )}

          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full border border-gray-700 bg-gray-800/50 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="w-full border border-gray-700 bg-gray-800/50 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-orange-500 transition"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {mode === "register" && (
            <input
              type="password"
              placeholder="Confirm password"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              required
              className="w-full border border-gray-700 bg-gray-800/50 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
            />
          )}

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 mt-2 rounded-lg bg-orange-600 hover:bg-orange-500 transition text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-orange-500/30"
          >
            {mode === "login" ? (
              <>
                <LogIn size={18} /> Login
              </>
            ) : (
              <>
                <UserPlus size={18} /> Register
              </>
            )}
          </button>

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm mt-4 gap-2 sm:gap-0">
            <button
              type="button"
              onClick={() =>
                setMode(mode === "login" ? "register" : "login")
              }
              className="text-gray-400 hover:text-orange-500 underline transition"
            >
              {mode === "login"
                ? "Create an account"
                : "Already have an account? Login"}
            </button>
            <button
              type="button"
              className="text-gray-400 hover:text-orange-500 underline transition"
              onClick={() => alert("Password reset flow coming soon 🚧")}
            >
              Forgot password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
