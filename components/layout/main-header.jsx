import Button from "../ui/button";
import Link from "next/link";
import { SearchIcon, UserIcon } from "@heroicons/react/outline";
import Modal from "./overlayDisplay";
import { useState } from "react";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState();
  const [showSignUp, setShowSignUp] = useState();

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        loginShow={showLogin}
        signUpShow={showSignUp}
      />
      <header className="hidden xl:flex p-1 text-white bg-[#212121] drop-shadow-lg z-10 justify-center items-center top-0 xl:fixed w-full ">
        <Link href={`/`}>
          <a className="font-semibold text-4xl px-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-yellow-500 overflow-hidden">
            V
          </a>
        </Link>
        <a className="mx-5 text-2xl">Browse</a>
        <form className="m-auto ">
          <div className="flex relative items-center">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              autoComplete="off"
              className="w-96 h-8 pl-3 rounded-md text-md bg-slate-700"
            />
            <SearchIcon className="absolute h-full w-6 right-2 pointer-events-none " />
          </div>
        </form>
        <Button
          color={`bg-gray-500`}
          onClick={() => {
            setIsOpen(true);
            setShowLogin(true);
            setShowSignUp(false);
          }}
        >
          Login
        </Button>
        <Button
          color={`bg-blue-700`}
          onClick={() => {
            setIsOpen(true);
            setShowSignUp(true);
            setShowLogin(false);
          }}
        >
          Sign Up
        </Button>
        <Link href={`/user`}>
          <a>
            <UserIcon className="h-8 w-8 p-1 rounded-md m-2 hover:bg-slate-300/20" />
          </a>
        </Link>
      </header>
    </>
  );
}
