// Navbar.jsx
import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Banner from "./Banner"; // Import the Banner component

const Navbar = () => {
  const [bannerVisible, setBannerVisible] = useState(true); // State to control banner visibility
  const [dropdownOpen, setDropdownOpen] = useState({
    products: false,
    useCases: false,
    resources: false,
    company: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdown = (id) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white shadow-md">
      {/* Use the Banner component and pass the necessary props */}
      <Banner bannerVisible={bannerVisible} setBannerVisible={setBannerVisible} />

      {/* Main Navbar */}
      <nav className="flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo and other navbar elements (as in your original code) */}
        <div className="flex items-center">
          <div className="text-2xl font-bold p-4">
            <img
              src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a30a9a12f4c1d2bb3e9f_heygen-logotype.svg"
              alt="HeyGen"
            />
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop links and dropdowns */}
        <div className="hidden md:flex space-x-8 text-sm">
          {/* Dropdowns and links code remains the same */}
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <button className="text-sm hover:text-purple-500">
            Contact Sales
          </button>
          <button className="text-sm bg-black text-white py-2 px-6 font-semibold rounded-3xl hover:bg-purple-600">
            Sign up for free
          </button>
          <button className="text-sm bg-gray-200 text-black py-2 px-4 font-semibold rounded-3xl hover:bg-purple-600 hover:text-white">
            Login
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          {/* Mobile menu items */}
          {/* Dropdown and mobile navigation code remains the same */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
