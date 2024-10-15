import React, { useState } from "react";

const Vedio = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://res.cloudinary.com/diqmvbeg6/video/upload/v1727308210/06-HOME-hero_nyz3a8.mp4"
  ); // Default video
  const [isMuted, setIsMuted] = useState(true); // State for mute/unmute

  // Function to change video based on avatar selection
  const handleAvatarClick = (videoUrl) => {
    setVideoUrl(videoUrl);
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-[98%] mx-auto h-[600px] md:h-[700px]">
      {/* Video */}
      <div className="relative w-full h-full bg-gray-200 rounded-xl overflow-hidden">
        {/* Video Content */}
        <video
          src={videoUrl}
          muted={isMuted}
          autoPlay
          loop
          className="w-full h-full object-cover"
        ></video>

        {/* Mute/Unmute Icon */}
        <div className="absolute top-4 left-4">
          <button onClick={toggleMute} className="bg-white p-2 rounded-full shadow-lg">
            <img
              src={
                isMuted
                  ? "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f2e8b62f0f951eb6f22fb9_Frame.png"
                  : "https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66f38b6f5cd633eefce3efb4_%5C%5C.png"
              }
              alt={isMuted ? "Muted" : "Unmuted"}
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
      </div>

      {/* Card on bottom left */}
      <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg flex flex-col items-center space-x-2 max-w-xs">
        {/* User avatars */}
        <div className="flex flex-row gap-2 justify-start">
          <img
            src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db342e29294df7682b40e8_Avatar%201.avif"
            alt="Avatar 1"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:border-green-600 hover:border-[3px]"
            onClick={() =>
              handleAvatarClick(
                "https://res.cloudinary.com/diqmvbeg6/video/upload/v1727308210/06-HOME-hero_nyz3a8.mp4"
              )
            }
          />
          <img
            src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66eb0a35a235b95dd923f95a_headshot.webp"
            alt="Avatar 2"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:border-green-600 hover:border-[3px]"
            onClick={() =>
              handleAvatarClick(
                "https://resource.heygencdn.com/homepage/header_video_instant_avatar2.mp4"
              )
            }
          />
          <img
            src="https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66d3fc1ed7d2e1a016725b5f_Mask_group-1-removebg-preview%20(1).avif"
            alt="Avatar 3"
            className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hover:border-green-600 hover:border-[3px]"
            onClick={() =>
              handleAvatarClick(
                "https://resource.heygencdn.com/homepage/header_video_studio_avatar2.mp4"
              )
            }
          />
        </div>
        <br />

        {/* Text in the card */}
        <div>
          <center>
            <p className=" border-2 border-gray-200 rounded-full w-[95%] "></p>
          </center>

          <p className="text-[#745BFC] flex flex-row items-start">Script</p>
          <p className="text-gray-900 font-semibold">
            Hey there! Welcome to HeyGen, where you can create and translate
            videos without a camera or crew.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vedio;
