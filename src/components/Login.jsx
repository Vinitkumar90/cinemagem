import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { dp_url } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_POSTER } from "../utils/constant";

const Login = () => {
  const dispatch = useDispatch();

  const [signIn, setSignIn] = useState(true);
  const [message, setMessage] = useState(null);

  const toggle = () => {
    setSignIn(!signIn);
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  function validateKaro() {
    const check = validate(emailRef.current.value, passRef.current.value);
    setMessage(check);
    if (check) return;

    if (!signIn) {
      //signup api
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          //update profile api
          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: dp_url,
          })
            .then(() => {
              // Profile updated!
              //abb karunga store mai add
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              //error while updating the fkn user
              setMessage(error.message);
            });

          //. . .
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage + errorCode);
        });
    } else {
      //signin
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          //-- user data in here
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage);
        });
    }
  }

  return (
    <div>
      <div className="fixed -z-10 w-full h-screen">
        <img src={BG_POSTER} className=" w-full object-cover h-full" />
      </div>
      <div className="flex flex-col items-center gap-24">
        <Header />
        <form
          className="py-6 px-7 bg-black mt-20  w-80 md:w-100 opacity-85 flex flex-col gap-2 border-1 border-neutral-600 rounded-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="mb-6 text-3xl font-bold text-white font-mono">
            {signIn ? "Sign In" : "Sign Up"}
          </h2>
          {!signIn && (
            <div>
              <input
                type="text"
                ref={nameRef}
                placeholder="Enter your Name"
                className="w-full  mb-6 py-2 px-4 rounded  border-1 border-gray-500  bg-slate-800 text-white
              text-lg
              "
              />
            </div>
          )}
          <div>
            <input
              type="email"
              ref={emailRef}
              placeholder="Enter your Email"
              className="w-full  mb-6 py-2 px-4 border-1 rounded border-gray-500  bg-slate-800 text-white
              text-lg"
            />
          </div>
          <div>
            <input
              type="password"
              ref={passRef}
              placeholder="Enter your password"
              className="w-full mb-2 py-2 px-4   border-1 rounded  border-gray-500 bg-slate-800 text-white
              text-lg 
              "
            />
          </div>

          {/* validate message */}
          <p className="text-orange-500 text-sm font-semibold mb-2 ">
            {message}
          </p>

          <button
            className="bg-orange-700 hover:bg-orange-600 text-white w-full  py-2 px-2  font-mono text-2xl rounded mb-2 transition"
            onClick={() => validateKaro()}
          >
            Submit
          </button>

          <p className="text-white text-sm " onClick={toggle}>
            {signIn ? (
              <>
                New to cinemaGEM?{" "}
                <span className="text-blue-400 hover:underline cursor-pointer transition">
                  Signup now
                </span>
              </>
            ) : (
              <>
                Already a user?{" "}
                <span className="text-blue-400 hover:underline cursor-pointer transition">
                  Sign In
                </span>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
