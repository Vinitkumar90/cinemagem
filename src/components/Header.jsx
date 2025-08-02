import React from "react";
import gem from "../assets/logo.png"

const Header = () => {
  return (
    <div className="flex justify-start md:px-16 py-2 bg-gradient-to-b from-black">
      <img 
        src={gem}
        alt="logo"
        className="w-80 shadow-8xl"
      />
    </div>
  );
};

export default Header;