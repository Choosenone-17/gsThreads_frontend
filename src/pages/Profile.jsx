import React from "react";
import { User, Mail, Shield, Calendar, LogOut } from "lucide-react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 text-gray-200">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center sm:text-left">
        My <span className="text-orange-500">Profile</span>
      </h1>

      {/* Profile Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 hover:border-orange-500 transition-all duration-300">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gray-800 flex items-center justify-center">
            <User className="h-12 w-12 sm:h-14 sm:w-14 text-orange-500" />
          </div>
        </div>

        {/* User Info */}
        <div className="flex-1 text-center sm:text-left w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
            {user.name || "User"}
          </h2>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-1 sm:gap-3 text-gray-400 text-sm mb-3">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {user.email || "Not available"}
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
              <Shield className="h-4 w-4 text-orange-500" />
              {user.role || "member"}
            </div>
          </div>

          <p className="text-gray-500 text-sm flex items-center justify-center sm:justify-start gap-2">
            <Calendar className="h-4 w-4" />
            Joined{" "}
            {user.createdAt
              ? new Date(user.createdAt).toLocaleDateString()
              : "recently"}
          </p>
        </div>

        {/* Logout Button */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <button
            onClick={handleLogout}
            className="mt-5 sm:mt-0 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all w-full sm:w-auto"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>
      </div>

      {/* Stats / Activity Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-500 transition-all">
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Orders Placed
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-orange-500 mt-2">
            {user.ordersCount || 0}
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-500 transition-all">
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Favorites
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-orange-500 mt-2">
            {user.favoritesCount || 0}
          </p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-orange-500 transition-all">
          <h3 className="text-base sm:text-lg font-semibold text-white">
            Member Since
          </h3>
          <p className="text-2xl sm:text-3xl font-bold text-orange-500 mt-2">
            {user.createdAt
              ? new Date(user.createdAt).getFullYear()
              : new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
