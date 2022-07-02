import { XIcon } from "@heroicons/react/outline";
import LoginForm from "../layout/login-form";
import SignUpForm from "./signup-form";
import { useState } from "react";

export default function LoginFormDisplay({ onClose, loginShow, signUpShow }) {
  const [displayLogin, setDisplayLogin] = useState(loginShow);
  const [displaySignUp, setDisplaySignUp] = useState(signUpShow);

  return (
    <div className="hidden xl:flex fixed z-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
      <div className="p-8 bg-gray-900 rounded-md">
        <div className="flex justify-center">
          <div className="flex text-white">
            <div className="font-semibold text-5xl px-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-yellow-500 overflow-hidden ">
              V
            </div>
            <p className="font-semibold text-2xl flex items-center ">
              Log into Viraal
            </p>
          </div>
        </div>
        <div className="flex text-white my-4 border-b border-slate-600 font-semibold">
          <button
            className="mr-4 py-2 border-b-4 border-transparent focus:border-blue-500  focus:border-b-4"
            onClick={() => {
              setDisplayLogin(true);
              setDisplaySignUp(false);
            }}
          >
            Log In
          </button>
          <button
            className="py-2 border-b-4 border-transparent focus:border-blue-500 focus:border-b-4"
            onClick={() => {
              setDisplaySignUp(true);
              setDisplayLogin(false);
            }}
          >
            Sign Up
          </button>
        </div>
        {displayLogin && <LoginForm />}
        {displaySignUp && <SignUpForm />}
      </div>
      <button onClick={onClose} className="flex items-center h-10">
        <XIcon className="h-8 w-8 p-1 rounded-md hover:bg-slate-300/20 mx-1 text-white" />
      </button>
    </div>
  );
}
