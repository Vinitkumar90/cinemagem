import React, { useEffect } from "react";
import gem from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user) 
  // const user = auth.currentUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  //have to use it in a central place which is always present ie header
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //onAuthStateChanged listens to sigup/in or sing out api and runs once intially then component renders
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // User is signed in
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // otherwise everytime useeffect run ..more new event listener will start
  }, []);

  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex flex-col md:flex-row px-12 py-2 items-center justify-between">
      <img
        className="md:w-80 w-44 py-0 mb-2 md:mb-0 mx-auto md:mx-0"
        src={gem}
        alt="Logo"
      />
      {user && (
        <div className="flex gap-1 items-center bg-orange-400/25 p-4 rounded-lg">
          <img className="w-8 h-8" src={user?.photoURL} alt="logo" />
          <button
            onClick={handleSignOut}
            className="font-mono tracking-wide text-white bg-orange-600 hover:bg-orange-700 transition px-4 py-1 rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
