import Button from "../ui/button";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/outline";

export default function MainHeader() {
  return (
    <header className="flex p-1 text-white bg-black drop-shadow-lg z-10 justify-center items-center sticky top-0">
      <Link href={`/`}>
        <a className="font-semibold text-5xl px-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-yellow-500 overflow-hidden">
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
            className="w-96 h-8 pl-3 rounded-md text-md text-black font-semibold ring-2 ring-gray-400 placeholder:text-gray-slate-500"
          />
          <SearchIcon className="absolute h-full w-6 text-black right-2 pointer-events-none " />
        </div>
      </form>
      <Button link={`/login`} color={`bg-gray-500`}>
        Login
      </Button>
      <Button link={`/signup`} color={`bg-blue-700`}>
        Sign Up
      </Button>
    </header>
  );
}