import React, { useState } from "react";

const Navbar = () => {
  const [bannerVisible, setBannerVisible] = useState(true);

  // Toggle dropdown visibility
  const handleDropdown = (id) => {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle("hidden");
  };

  return (
    <div className="bg-white shadow-md">
      {/* Top banner */}
      {bannerVisible && (
        <center>
          <div className="bg-[#7B35B5] text-white font-[Ppobjectsans,sans-serif] text-[16.416px] py-[12.312px] px-4 flex justify-center relative w-[99%] m-[8.208px] rounded-[6px]">
            <span className="text-center">
              Catch our recap of HubSpot INBOUND
            </span>
            <a href="#" className="text-white underline ml-2">
              Read More →
            </a>
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
          <div className="text-2xl font-bold">
            <img
              src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66e1a30a9a12f4c1d2bb3e9f_heygen-logotype.svg"
              alt="HeyGen"
              width={100}
              height={20}
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm">
          <div className="relative dropdown">
            <button
              className="hover:text-purple-500"
              onMouseEnter={() => handleDropdown("products")}
              onMouseLeave={() => handleDropdown("products")}
            >
              Products
            </button>
            <div
              id="products"
              className="dropdown-content hidden absolute bg-white shadow-lg p-4 mt-2"
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Product 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Product 2
              </a>
            </div>
          </div>
          <div className="relative dropdown">
            <button
              className="hover:text-purple-500"
              onMouseEnter={() => handleDropdown("useCases")}
              onMouseLeave={() => handleDropdown("useCases")}
            >
              Use Cases
            </button>
            <div
              id="useCases"
              className="dropdown-content hidden absolute bg-white shadow-lg p-4 mt-2"
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Use Case 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Use Case 2
              </a>
            </div>
          </div>
          <div className="relative dropdown">
            <button
              className="hover:text-purple-500"
              onMouseEnter={() => handleDropdown("resources")}
              onMouseLeave={() => handleDropdown("resources")}
            >
              Resources
            </button>
            <div
              id="resources"
              className="dropdown-content hidden absolute bg-white shadow-lg p-4 mt-2"
            >
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Resource 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Resource 2
              </a>
            </div>
          </div>
          <div className="relative dropdown">
            <button
              className="hover:text-purple-500"
              onMouseEnter={() => handleDropdown("company")}
              onMouseLeave={() => handleDropdown("company")}
            >
              Company
            </button>
            <div
              id="company"
              className="dropdown-content hidden absolute bg-white shadow-lg p-4 mt-2"
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
          <button className="text-sm bg-black text-white py-[12.312px] px-[24.624px] rounded hover:bg-purple-600">
            Sign up for free
          </button>
          <button className="text-sm bg-gray-200 text-black py-[9.0288px] px-[16.416px] rounded hover:bg-gray-300">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
