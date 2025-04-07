import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <div className="container px-4 py-6 mx-auto md:py-10">
        {/* Top Section */}
        <div className="flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <img className="w-24 md:w-28" src={assets.logo} alt="logo" />
            <div className="hidden w-px h-10 bg-gray-400 md:block"></div>
            <p className="text-sm text-center text-gray-500 md:text-left">
              © 2025 E-Learn. All Rights Reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80" aria-label="Facebook">
              <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80" aria-label="Twitter">
              <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80" aria-label="Instagram">
              <img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 mt-6 text-xs text-center text-gray-500 border-t border-gray-200 md:pt-6">
          <p>
            Built with ❤️ by the E-Learn Team. 
            <a href="#contact" className="text-blue-600 hover:underline">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
