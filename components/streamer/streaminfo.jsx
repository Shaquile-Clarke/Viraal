import Image from "next/image";
import Tag from "../streamer/tag";
import Button from "../ui/button";
import {
  BadgeCheckIcon,
  ArrowUpIcon,
  DotsVerticalIcon,
} from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/solid";

export default function StreamInfo({ streamerName }) {
  return (
    <>
      <div className="flex p-3 justify-between items-center ">
        <div className="flex items-center ">
          <div className="flex rounded-full mr-3 h-full w-12 overflow-hidden  xl:h-20 xl:w-20 border-4 border-blue-500">
            <Image
              src={`https://images.unsplash.com/photo-1526489561696-1a5a2b82de4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80`}
              alt={`${streamerName} Logo`}
              width={80}
              height={80}
            />
          </div>

          <div>
            <p className="flex flex-col xl:flex-row">
              <span className="flex font-bold">
                {streamerName}
                <BadgeCheckIcon className="text-blue-500 h-6 mx-1" />
              </span>
            </p>
            <p className="hidden xl:block xl:font-semibold">
              LUL... Season 1 Zero Hour
            </p>
            <div className="flex flex-col items-start">
              <p className="text-sm">
                <span className="xl:hidden">Playing&nbsp;</span>
                <span className="text-blue-400 hover:underline">
                  Battlefield 2042
                </span>
              </p>
              <Tag>English</Tag>
            </div>
          </div>
        </div>
        <div className="flex xl:block items-start">
          <div className="xl:flex justify-end">
            <Button color={`bg-blue-700`} follow={true}>
              Follow
            </Button>
            <Button color={`bg-gray-500`} sub={true} className="hidden xl:flex">
              Subscribe
            </Button>
          </div>
          <div className="flex justify-center xl:items-center xl:my-1">
            <UserIcon className="h-5 w-5 text-red-600 mx-1 hidden xl:flex" />
            <span className="text-red-600 font-semibold mx-1 hidden xl:flex">
              11,453
            </span>
            <span className="mx-1 hidden xl:flex">00:40:26</span>
            <ArrowUpIcon className="h-7 w-7 p-1 rounded-md xl:m-1 hover:bg-slate-300/20" />
            <DotsVerticalIcon className="h-7 w-7 p-1 rounded-md m-1 hover:bg-slate-300/20 hidden xl:flex" />
          </div>
        </div>
      </div>
    </>
  );
}
