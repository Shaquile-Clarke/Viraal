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
      <div className="flex text-white p-3 w-full justify-between ">
        <div className="flex">
          <div className="flex rounded-full overflow-hidden mr-3 h-20 w-20">
            <Image
              src={`https://images.unsplash.com/photo-1526489561696-1a5a2b82de4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80`}
              alt={`${streamerName} Logo`}
              width={80}
              height={80}
            />
          </div>
          <div>
            <p className="flex">
              {streamerName}
              <BadgeCheckIcon className="text-blue-500 h-6 mx-1" />
            </p>
            <p>LUL... Season 1 Zero Hour</p>
            <div className="flex">
              <p className="text-blue-400 hover:underline">Battlefield 2042</p>
              <Tag>English</Tag>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-end">
            <Button color={`bg-blue-700`}>Follow</Button>
            <Button color={`bg-gray-500`}>Subscribe</Button>
          </div>
          <div className="flex items-center my-1">
            <UserIcon className="h-5 w-5 text-red-600 mx-1" />
            <span className="text-red-600 font-semibold mx-1">11,453</span>
            <span className="mx-1">00:40:26</span>
            <ArrowUpIcon className="h-8 w-8 p-1 rounded-md m-1 hover:bg-slate-300/20" />
            <DotsVerticalIcon className="h-8 w-8 p-1 rounded-md m-1 hover:bg-slate-300/20" />
          </div>
        </div>
      </div>
    </>
  );
}
