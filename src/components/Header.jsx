import React, { useEffect } from "react";
import gem from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { addGptToggle } from "../utils/gptSlice";
import { SUPPORTED_LANG } from "../utils/constant";
import { toggleLang } from "../utils/langSlice";


const Header = () => {
  const user = useSelector((state) => state.user);
  // const user = auth.currentUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gptToogle = () => {
    dispatch(addGptToggle());
  };

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

  const changeLang = (e) => {
    dispatch(toggleLang(e.target.value))
  }

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


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
    <div className=" w-full bg-gradient-to-b from-black flex flex-row px-1 md:px-10 md:py-2 items-center justify-between bg-black
    fixed top-0 left-0 right-0 z-50
    ">
      <img className="w-24 md:w-48" src={gem} alt="Logo" />
      {user && (
        <div className="flex gap-2 items-center  p-4 rounded-lg">
          <img
            className="md:w-8 md:h-8 h-4 rounded-2xl"
            src={user?.photoURL}
            alt="logo"
          />
         {
          showGptSearch && (
            <select className="bg-neutral-500/20 text-white px-4 py-1 rounded" onChange={changeLang}>
            {SUPPORTED_LANG.map((lang) => (
              <option
                className="bg-black text-white"
                key={lang.identifier}
                value={lang.name}
              >
                {lang.name}
              </option>
            ))}
          </select>
          )
         }
          <div
            className="tracking-wide text-white bg-red-600 hover:bg-red-700 transition p-1  md:px-4 md:py-1 rounded text-xs md:text-sm cursor-pointer"
            onClick={gptToogle}
          >
            {showGptSearch ? "Home" : "Ai Help?"}
          </div>
          <div
            onClick={handleSignOut}
            className="tracking-wide text-white bg-red-600 hover:bg-red-700 transition px-4 py-1 rounded text-xs md:text-sm cursor-pointer"
          >
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
