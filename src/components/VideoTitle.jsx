import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[16%] md:pt-[18%] px-10 text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-[15px] md:text-[50px] lg:text-[65px] font-bold">{title}</h1>
      <p className="py-6 text-[10px] md:text-[50px]  lg:text-xl w-[90%] md:max-w-[40%]">{overview}</p>
      <div>
        <button className="bg-neutral-200 hover:bg-neutral-300 transition text-black p-1 md:py-3 md:px-12 rounded-lg text-sm md:text-xl lg:2xl font-semibold">
          Play 
        </button>
        <button className="bg-neutral-300/25 p-1 md:py-3 md:mx-4 px-12 rounded-lg text-sm md:text-xl lg:2xl text-white font-semibold ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
