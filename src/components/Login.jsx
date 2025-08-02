import React, { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [message, setMessage] = useState(null);

  const toggle = () => {
    setSignIn(!signIn);
  };

  const emailRef = useRef(null);
  const passRef = useRef(null);

  function validateKaro() {
    const check = validate(emailRef.current.value, passRef.current.value);
    setMessage(check);
    if (check) return;

    if (!signIn) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage);
        });
    } else {
        //signin
      signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorMessage)
        });
    }
  }

  return (
    <div
      className="bg-[url(https://static.vecteezy.com/system/resources/thumbnails/044/514/545/small_2x/background-a-movie-theater-where-love-stories-are-unfolding-on-the-big-screen-and-the-smell-of-popcorn-fills-the-air-photo.jpg)]
                h-screen bg-no-repeat bg-center bg-cover brightness-80 contrast-125"
    >
      <Header />
      <form
        className="p-6 px-14 bg-black mx-auto mt-5 max-w-120 rounded opacity-85 flex flex-col gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="mb-6 text-3xl font-bold text-white font-mono">
          {signIn ? "Sign In" : "Sign Up"}
        </h2>
        {!signIn && (
          <div>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full  mb-6 py-4 px-2  border-2 border-gray-500  bg-slate-800 text-white
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
            className="w-full  mb-6 py-4 px-2 border-2 border-gray-500  bg-slate-800 text-white
              text-lg"
          />
        </div>
        <div>
          <input
            type="password"
            ref={passRef}
            placeholder="Enter your password"
            className="w-full mb-2 py-4 px-2  border-2 border-gray-500 bg-slate-800 text-white
              text-lg 
              "
          />
        </div>

        {/* validate message */}
        <p className="text-orange-500 text-sm font-semibold mb-2 ">{message}</p>

        <button
          className="bg-orange-800 hover:bg-orange-900 text-white w-full  py-2 px-2  font-mono text-2xl rounded mb-2"
          onClick={() => validateKaro()}
        >
          Submit
        </button>

        <p
          className="text-white text-sm hover:underline cursor-pointer"
          onClick={toggle}
        >
          {signIn ? "New to cinemaGEM ? signup now" : "Already a user sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
