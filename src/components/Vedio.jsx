import React, { useState } from 'react';

const Vedio = () => {
  const [isMuted, setIsMuted] = useState(true); // State to manage mute/unmute

  const toggleMute = () => {
    setIsMuted((prev) => !prev); // Toggle the mute state
  };

  return (
    <div className="relative w-[98%] mx-auto h-[600px] md:h-[700px]">
      {/* Video */}
      <div className="relative w-full h-full bg-gray-200 rounded-xl overflow-hidden">
        {/* Video Content */}
        <video
          src="https://res.cloudinary.com/diqmvbeg6/video/upload/v1727308210/06-HOME-hero_nyz3a8.mp4"
          controls
          muted={isMuted}
          autoPlay
          loop
          className="w-full h-full object-cover"
        ></video>
        
        {/* Mute/Unmute Icon */}
        <div className="absolute top-4 left-4">
          <button
            onClick={toggleMute}
            className="bg-white p-2 rounded-full shadow-lg"
          >
            <img
              src={
                isMuted
                  ? 'https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f2e8b62f0f951eb6f22fb9_Frame.png'
                  : 'https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f38b6f5cd633eefce3efb4_%5C%5C.png'
              }
              alt={isMuted ? 'Mute Icon' : 'Unmute Icon'}
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </div>

      {/* Card on bottom left */}
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-2 max-w-xs">
        {/* User avatars */}
        <div className="flex -space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="User 1"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="https://via.placeholder.com/40"
            alt="User 2"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="https://via.placeholder.com/40"
            alt="User 3"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        {/* Text in the card */}
        <div>
          <p className="text-gray-900 font-semibold">Hey there! Welcome to HeyGen, where you can create and translate videos without a camera or crew.</p>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
