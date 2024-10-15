// Navbar.js
import React, { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState({
    products: false,
    useCases: false,
    resources: false,
    company: false,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dropdown visibility
  const handleDropdown = (id) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white shadow-md">
      {/* Top banner */}
      {bannerVisible && (
        <center>
          <div className="bg-[#7B35B5] text-white text-sm py-2 px-4 flex justify-center relative w-[99%] m-2 rounded-md">
            <span className="text-center">
              Catch our recap of HubSpot INBOUND
            </span>
            <a href="#" className="text-white underline ml-2">
              Read More
            </a>
            <span className="ml-2 font-bold">
              <img
                src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66ea33a58e7c84b84f5ef63c_arrow-narrow-right.svg"
                alt="arrow-right"
              />
            </span>
            <div className="absolute right-4">
              <button
                onClick={() => setBannerVisible(false)}
                className="text-white font-bold"
              >
                ✕
              </button>
            </div>
          </div>
        </center>
      )}

      {/* Main Navbar */}
      <nav className="flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold p-4">
            <img
              src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a30a9a12f4c1d2bb3e9f_heygen-logotype.svg"
              alt="HeyGen"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links */}
        <div className={`hidden md:flex space-x-8 text-sm`}>
          {/* Menu items for desktop */}
          {/* Products Dropdown */}
          <div className="relative dropdown">
            <button
              className="flex items-center hover:text-purple-500"
              onClick={() => handleDropdown("products")}
            >
              Products
              <motion.span
                className="ml-1"
                animate={{ rotate: dropdownOpen.products ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.span>
            </button>
            <div
              className={`dropdown-content absolute bg-white shadow-lg p-4 mt-2 rounded-md ${
                dropdownOpen.products ? "block" : "hidden"
              }`}
              style={{
                width: "800px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {/* Flexbox for Product Options */}
              <div className="flex justify-between text-center py-4 px-16">
                <div>
                  <h3 className="text-purple-500 font-semibold">CREATE</h3>
                  <p>Avatar Video</p>
                </div>
                <div>
                  <h3 className="text-purple-500 font-semibold">LOCALIZE</h3>
                  <p>Video Translation</p>
                </div>
                <div>
                  <h3 className="text-purple-500 font-semibold">PERSONALIZE</h3>
                  <p>Personalized Video</p>
                </div>
                <div>
                  <h3 className="text-purple-500 font-semibold">INTERACT</h3>
                  <p>Interactive Avatar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Dropdown */}
          <div className="relative dropdown">
            <button
              className="flex items-center hover:text-purple-500"
              onClick={() => handleDropdown("useCases")}
            >
              Use Cases
              <motion.span
                className="ml-1"
                animate={{ rotate: dropdownOpen.useCases ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.span>
            </button>
            <div
              className={`dropdown-content absolute bg-white shadow-lg p-4 mt-2 rounded-md ${
                dropdownOpen.useCases ? "block" : "hidden"
              }`}
              style={{ width: "300px" }}
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Agencies
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Sales
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Marketing
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Learning & Development
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Localization
              </a>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative dropdown">
            <button
              className="flex items-center hover:text-purple-500"
              onClick={() => handleDropdown("resources")}
            >
              Resources
              <motion.span
                className="ml-1"
                animate={{ rotate: dropdownOpen.resources ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.span>
            </button>
            <div
              className={`dropdown-content absolute bg-white shadow-lg p-4 mt-2 rounded-md ${
                dropdownOpen.resources ? "block" : "hidden"
              }`}
              style={{ width: "250px" }}
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Blog
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Affiliate Program
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Weekly Webinar
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Help Center
              </a>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative dropdown">
            <button
              className="flex items-center hover:text-purple-500"
              onClick={() => handleDropdown("company")}
            >
              Company
              <motion.span
                className="ml-1"
                animate={{ rotate: dropdownOpen.company ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.span>
            </button>
            <div
              className={`dropdown-content absolute bg-white shadow-lg p-4 mt-2 rounded-md ${
                dropdownOpen.company ? "block" : "hidden"
              }`}
              style={{ width: "200px" }}
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                About Us
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Careers
              </a>
            </div>
          </div>

          {/* Pricing Link */}
          <a href="#" className="hover:text-purple-500">
            Pricing
          </a>
        </div>

        {/* Buttons */}
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
          <div className="flex flex-col space-y-4 px-4 py-2">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                className="flex items-center w-full text-left hover:text-purple-500"
                onClick={() => handleDropdown("products")}
              >
                Products
                <motion.span
                  className="ml-1"
                  animate={{ rotate: dropdownOpen.products ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              {dropdownOpen.products && (
                <div className="mt-2 pl-4">
                  <div>
                    <h3 className="text-purple-500 font-semibold">CREATE</h3>
                    <p>Avatar Video</p>
                  </div>
                  <div>
                    <h3 className="text-purple-500 font-semibold">LOCALIZE</h3>
                    <p>Video Translation</p>
                  </div>
                  <div>
                    <h3 className="text-purple-500 font-semibold">PERSONALIZE</h3>
                    <p>Personalized Video</p>
                  </div>
                  <div>
                    <h3 className="text-purple-500 font-semibold">INTERACT</h3>
                    <p>Interactive Avatar</p>
                  </div>
                </div>
              )}
            </div>

            {/* Use Cases Dropdown */}
            <div className="relative">
              <button
                className="flex items-center w-full text-left hover:text-purple-500"
                onClick={() => handleDropdown("useCases")}
              >
                Use Cases
                <motion.span
                  className="ml-1"
                  animate={{ rotate: dropdownOpen.useCases ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              {dropdownOpen.useCases && (
                <div className="mt-2 pl-4">
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Agencies
                  </a>
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Sales
                  </a>
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Marketing
                  </a>
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Learning & Development
                  </a>
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Localization
                  </a>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="flex items-center w-full text-left hover:text-purple-500"
                onClick={() => handleDropdown("resources")}
              >
                Resources
                <motion.span
                  className="ml-1"
                  animate={{ rotate: dropdownOpen.resources ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              {dropdownOpen.resources && (
                <div className="mt-2 pl-4">
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Blog
                  </a>
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Affiliate Program
                  </a>
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Weekly Webinar
                  </a>
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Help Center
                  </a>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                className="flex items-center w-full text-left hover:text-purple-500"
                onClick={() => handleDropdown("company")}
              >
                Company
                <motion.span
                  className="ml-1"
                  animate={{ rotate: dropdownOpen.company ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.span>
              </button>
              {dropdownOpen.company && (
                <div className="mt-2 pl-4">
                  <a href="#" className="block py-1 hover:text-purple-500">
                    About Us
                  </a>
                  <a href="#" className="block py-1 hover:text-purple-500">
                    Careers
                  </a>
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <a href="#" className="hover:text-purple-500">
              Pricing
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex flex-col space-y-2 px-4 py-2">
            <button className="text-sm hover:text-purple-500 text-left">
              Contact Sales
            </button>
            <button className="text-sm bg-black text-white py-2 px-4 font-semibold rounded-3xl hover:bg-purple-600">
              Sign up for free
            </button>
            <button className="text-sm bg-gray-200 text-black py-2 px-4 font-semibold rounded-3xl hover:bg-purple-600 hover:text-white">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
