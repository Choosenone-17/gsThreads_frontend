import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-brand-dark to-black text-brand-gray py-16 w-full border-t border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="text-left sm:text-center md:text-left">
            <h1 className="text-3xl font-bold text-brand-orange mb-4">gsThreads</h1>
            <p className="text-lg text-brand-gray">
              High-quality campus-inspired custom T-shirts made with premium materials.
              Print your style, wear your identity with gsThreads.
            </p>
            <div className="flex space-x-4 mt-5 justify-start sm:justify-center md:justify-start">
              <a href="#" className="hover:text-brand-orange transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-brand-orange transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-brand-orange transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-brand-orange transition-colors"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left sm:text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-brand-gray">
              <li><a href="#" className="hover:text-brand-orange">Products</a></li>
              <li><a href="/About" className="hover:text-brand-orange">About Us</a></li>
              <li><a href="/Help" className="hover:text-brand-orange">Help</a></li>
              <li><a href="/Help" className="hover:text-brand-orange">Contact</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="text-left sm:text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-brand-gray">
              <li><a href="#" className="hover:text-brand-orange">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-brand-orange">Refund Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-left sm:text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-brand-gray text-lg">
              <li>
                <a href="mailto:gsthreads25@gmail.com" className="hover:text-brand-orange">
                  ✉︎ gsthreads25@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919179337751" className="hover:text-brand-orange">
                  📞 +91 9179337751
                </a>
              </li>
              <li>📍 SGSITS, Indore</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-brand-orange mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-brand-gray">
            © {new Date().getFullYear()} gsThreads. All rights reserved.
          </p>
          <p className="text-sm text-brand-gray">
            <a href="https://www.linkedin.com/in/yashvardhan-patel-a64790330/" target="_blank" className="hover:text-brand-orange transition-colors">Check Linkedin!<FaLinkedinIn /></a>
            Designed & Developed by <span className="text-brand-orange font-semibold">Yashvardhan Patel</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
