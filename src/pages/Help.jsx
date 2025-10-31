import React from "react";
import { Mail, ShoppingBag, MessageSquare } from "lucide-react";

export default function Help() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-200">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 text-center sm:text-left">
        Help & <span className="text-orange-500">Support</span>
      </h1>
      <p className="text-gray-400 text-base sm:text-lg mb-10 text-center sm:text-left leading-relaxed">
        Need assistance? Whether it’s a bulk order, custom design, or delivery issue — 
        our team is here to help you out quickly and personally.
      </p>

      {/* Support Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Support */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-full mb-4 mx-auto">
            <Mail className="h-7 w-7 sm:h-8 sm:w-8 text-orange-500" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-white text-center mb-2">
            General Support
          </h2>
          <p className="text-gray-400 text-sm sm:text-base text-center mb-3">
            Questions about your order or account? We’re one email away.
          </p>
          <p className="text-center">
            <a
              href="mailto:gsthreads25@gmail.com"
              className="text-orange-500 font-medium hover:underline break-all"
            >
              gsthreads25@gmail.com
            </a>
          </p>
        </div>

        {/* Bulk Orders */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2">
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-full mb-4 mx-auto">
            <ShoppingBag className="h-7 w-7 sm:h-8 sm:w-8 text-orange-500" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-white text-center mb-2">
            Bulk Orders
          </h2>
          <p className="text-gray-400 text-sm sm:text-base text-center mb-3">
            For college fests, clubs, or startup merch — get custom quotes & fast delivery.
          </p>
          <p className="text-center text-gray-400 text-sm">📞 +91-7489547689</p>
          <p className="text-center mt-1">
            <a
              href="mailto:gsthreads25@gmail.com"
              className="text-orange-500 font-medium hover:underline break-all"
            >
              gsthreads25@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Quick Help */}
      <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center hover:border-orange-500 transition-all duration-300 shadow-lg">
        <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-800 rounded-full mb-4 mx-auto">
          <MessageSquare className="h-7 w-7 sm:h-8 sm:w-8 text-orange-500" />
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
          Need Quick Help?
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-5 max-w-md mx-auto">
          DM us on Instagram or WhatsApp for instant responses from our campus support team.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://instagram.com/gsthreads"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-600 transition-all"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/917489547689"
            target="_blank"
            rel="noreferrer"
            className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-orange-500 hover:text-white transition-all"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center mt-12 text-gray-500 text-xs sm:text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-500 font-semibold">gsThreads</span> — Developed by Yashvardhan Patel
        </p>
      </div>
    </div>
  );
}
