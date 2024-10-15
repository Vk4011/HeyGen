import React from "react";
import Vedio from "./Vedio";
const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center">
      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-normal text-black leading-tight mb-4">
        Create and translate videos with AI
      </h1>
      
      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-700 mb-4">
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
      <Vedio/>
    </div>
  );
};

export default Landing;
