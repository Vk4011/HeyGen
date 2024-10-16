import React from "react";

const Banner = ({ bannerVisible, setBannerVisible }) => {
  if (!bannerVisible) return null; // Don't render if the banner is hidden

  return (
    <div className="relative flex justify-center">
      <div className="bg-[#7B35B5] text-white text-sm py-2 px-4 flex items-center justify-center w-full max-w-[99%] m-2 rounded-md">
        {/* Banner Text */}
        <div className="flex items-center space-x-2 font-[500px] text-[16px] font-[Ppobjectsans, sans-serif]">
          <span>Catch our recap of HubSpot INBOUND</span>
           {/* Read More + Arrow */}
        <div className="flex items-center space-x-2">
          <a href="#" className="text-white underline">
            Read More
          </a>
          <img
            src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66ea33a58e7c84b84f5ef63c_arrow-narrow-right.svg"
            alt="arrow-right"
            className="inline-block"
          />
        </div>
        </div>

        {/* Close Button */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <button
            onClick={() => setBannerVisible(false)}
            className="text-white font-bold text-xl"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
