import Button from "../ui/button";
import Link from "next/link";
import { SearchIcon, UserIcon } from "@heroicons/react/outline";

export default function MainHeader() {
  return (
    <header className="hidden xl:flex p-1 text-white bg-[#212121] drop-shadow-lg z-10 justify-center items-center top-0 fixed w-full ">
      <Link href={`/`}>
        <a className="font-semibold text-5xl px-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-yellow-500 overflow-hidden">
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
      <Link href={`/user`}>
        <a>
          <UserIcon className="h-8 w-8 p-1 rounded-md m-2 hover:bg-slate-300/20" />
        </a>
      </Link>
    </header>
  );
}
