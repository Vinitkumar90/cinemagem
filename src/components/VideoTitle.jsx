import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute pt-[28%] px-12 text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-7xl font-bold">{title}</h1>
      <p className="py-6 text-xl w-[40%]">{overview}</p>
      <div>
        <button className="bg-neutral-200 hover:bg-neutral-300 transition text-black py-3 px-12 rounded-lg text-2xl font-semibold">
          Play 
        </button>
        <button className="bg-neutral-300/50 py-3 mx-4 px-12 rounded-lg text-2xl text-white font-semibold ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
