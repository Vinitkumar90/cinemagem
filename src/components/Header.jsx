import React from "react";
import gem from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  console.log(user?.photoURL);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:px-8 md:py-2 px-2 py-0 items-center justify-between">
      <img
        className="md:w-80 w-44 py-0 mb-2 md:mb-0 mx-auto md:mx-0"
        src={gem}
        alt="Logo"
      />
      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user?.photoURL} alt="logo" />
          <button onClick={handleSignOut} className="font-bold text-white">
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
