import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion
import Landing from "./Landing";

const Navbar = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState({
    products: false,
    useCases: false,
    resources: false,
    company: false,
  });

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
          <div className="bg-[#7B35B5] text-white font-[Ppobjectsans,sans-serif] text-[14.416px] py-[8.312px] px-4 flex justify-center relative w-[99%] m-[8.208px] rounded-[4px]">
            <span className="text-center">
              Catch our recap of HubSpot INBOUND
            </span>
            <a href="#" className="text-white underline ml-6">
              Read More
            </a>
            <span className="ml-4 font-bold">
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
      <nav className="flex justify-between items-center py-[16.416px] px-[8px]">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold p-[16.416px]">
            <img
              src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a30a9a12f4c1d2bb3e9f_heygen-logotype.svg"
              alt="HeyGen"
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-12 text-sm"> {/* Adjust space-x to create gap between items */}
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
              id="products"
              className={`dropdown-content absolute bg-white shadow-lg p-4 mt-2 rounded-md ${
                dropdownOpen.products ? "block" : "hidden"
              }`}
              style={{ width: "800px", left: "50%", transform: "translateX(-50%)" }}
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
              id="useCases"
              className={`dropdown-content absolute bg-white shadow-lg p-4 mt-2 rounded-md ${
                dropdownOpen.useCases ? "block" : "hidden"
              }`}
              style={{ width: "300px" }} // Adjust the width for this dropdown
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
              id="resources"
              className={`dropdown-content absolute bg-white shadow-lg p-4 mt-2 rounded-md ${
                dropdownOpen.resources ? "block" : "hidden"
              }`}
              style={{ width: "250px" }} // Adjust the width for Resources dropdown
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
              id="company"
              className={`dropdown-content absolute bg-white shadow-lg p-4 mt-2 rounded-md ${
                dropdownOpen.company ? "block" : "hidden"
              }`}
              style={{ width: "200px" }} // Adjust the width for Company dropdown
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                About Us
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Careers
              </a>
            </div>
          </div>

          <a href="#" className="hover:text-purple-500">
            Pricing
          </a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4 items-center">
          <button className="text-sm hover:text-purple-500">
            Contact Sales
          </button>
          <button className="text-sm bg-black text-white py-[12.312px] px-[24.624px] font-semibold rounded-3xl hover:bg-purple-600">
            Sign up for free
          </button>
          <button className="text-sm bg-gray-200 text-black py-[9.0288px] px-[16.416px] font-semibold rounded-3xl hover:bg-purple-600 hover:text-white">
            Login
          </button>
        </div>
      </nav>
      <Landing/>
    </div>
  );
};

export default Navbar;
