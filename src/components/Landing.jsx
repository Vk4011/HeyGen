// Landing.js
import React from "react";
import Vedio from "./Vedio";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-6xl font-normal text-black leading-tight mb-4 mt-10">
        Create and translate videos with AI
      </h1>

      {/* Subheading */}
      <p className="text-base md:text-xl text-gray-700 mb-4">
        Produce studio-quality videos in 175 languages without a camera or crew.
      </p>

      {/* Get started button */}
      <button className="bg-black text-white text-lg font-medium py-3 px-8 rounded-full hover:bg-purple-600 transition">
        Get started for free
      </button>

      {/* Subtext below button */}
      <p className="text-sm text-gray-500 mt-2">
        Unlimited video | No credit card needed
      </p>
      <Vedio />
    </div>
  );
};

export default Landing;
