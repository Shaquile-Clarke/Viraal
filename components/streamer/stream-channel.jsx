import Image from "next/image";
import { VideoCameraIcon } from "@heroicons/react/solid";

export default function StreamChannel({
  image,
  steamerName,
  currentGame,
  viewCount,
  isOnline,
}) {
  return (
    <div className="flex justify-left items-center w-[262px] hover:bg-slate-100/20 pl-3  ">
      <div className="flex justify-center items-center border-2 border-green-500 w-[30px] h-[30px] rounded-full overflow-hidden mr-4">
        <Image
          src={image}
          alt={`${steamerName} profile image`}
          width={200}
          height={200}
        />
      </div>
      <div className="">
        <p className="font-semibold">{steamerName}</p>
        <p className="text-slate-400">{currentGame}</p>
      </div>
      <div className="flex self-start w-15 ml-auto">
        <VideoCameraIcon className="h-4 w-4 mr-1 text-red-600 self-center " />
        <span className="text-md mr-2">
          {viewCount > 1000
            ? (viewCount / 1000).toFixed(1) + "K"
            : `${viewCount}`}
        </span>
      </div>
    </div>
  );
}
