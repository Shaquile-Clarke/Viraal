import Link from "next/link";
import Button from "../ui/button";
import {
  SearchIcon,
  DotsVerticalIcon,
  DuplicateIcon,
} from "@heroicons/react/outline";

export default function MobileNav() {
  return (
    <div className="flex text-white w-full bg-black/50 justify-center items-center py-2">
      <Link href={`/`}>
        <a className="font-semibold text-3xl ml-3 mr-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-yellow-500 overflow-hidden">
          V
        </a>
      </Link>
      <DuplicateIcon className="h-8" />
      <span className="m-auto">
        <Button color={"bg-blue-700"}>Open In App</Button>
      </span>
      <span className="flex justify-end mr-5">
        <SearchIcon className="h-6 w-6 mx-4" />
        <DotsVerticalIcon className="h-6 w-6" />
      </span>
    </div>
  );
}
