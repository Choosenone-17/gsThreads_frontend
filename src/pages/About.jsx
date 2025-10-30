import React from "react";
import { Shirt, Package, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-200">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
          About <span className="text-orange-500">gsThreads</span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          <span className="text-orange-400 font-semibold">gsThreads</span> is a
          campus-first custom T-shirt printing startup bringing you premium
          apparel that represents your identity, community, and creativity. We
          specialize in high-quality prints, sustainable materials, and bulk
          orders for college teams, fests, and startups.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Custom Prints */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:border-orange-500 hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-4">
            <Shirt className="h-7 w-7 text-orange-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            Custom Prints
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Vibrant and long-lasting direct-to-garment & screen printing that
            makes every tee stand out.
          </p>
        </div>

        {/* Bulk Orders */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:border-orange-500 hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-4">
            <Package className="h-7 w-7 text-orange-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            Bulk Orders
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Get exclusive discounts and faster delivery for orders of 20+ tees —
            perfect for college events.
          </p>
        </div>

        {/* Premium Materials */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:border-orange-500 hover:shadow-orange-500/10 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center justify-center w-14 h-14 bg-gray-800 rounded-full mb-4">
            <Sparkles className="h-7 w-7 text-orange-500" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            Premium Materials
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Ultra-soft cotton and sustainable fabrics that feel as good as they
            look — built for comfort.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="text-center mt-12 text-gray-400 text-xs sm:text-sm">
        <p>
          Designed for campuses. Powered by{" "}
          <span className="text-orange-500 font-semibold">gsThreads</span>.
        </p>
      </div>
    </div>
  );
}
