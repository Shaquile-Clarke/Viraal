import { EmojiHappyIcon, ArrowRightIcon } from "@heroicons/react/outline";
import SidePanelTitle from "./side-panel-title";
import Button from "../ui/button";

export default function Chat() {
  return (
    <div className="flex h-[300px] xl:block xl:fixed xl:w-[384px] xl:top-12 xl:right-0 xl:bottom-14 xl:h-screen text-white drop-shadow-lg bg-[#181818] xl:border-l xl:border-gray-400">
      <div className="hidden xl:flex  justify-center w-full items-center border-b border-gray-400 text-center py-2">
        <ArrowRightIcon className="absolute left-2 h-8 w-8 p-1 rounded-md hover:bg-slate-300/20" />
        <div className="text-center">
          <SidePanelTitle>Stream Chat</SidePanelTitle>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full h-60 xl:h-screen" />
        <form
          action=""
          className="flex items-end xl:absolute xl:bottom-40 w-full xl:w-10/12 xl:justify-center"
        >
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Send a message"
              className="h-10 pl-3 w-screen xl:full rounded py-6 bg-slate-700"
            />
            <Button
              color={`bg-blue-700`}
              className={`absolute right-2 text-white xl:hidden`}
            >
              Chat
            </Button>
            <EmojiHappyIcon className="hidden xl:block xl:absolute w-6 right-2 pointer-events-none" />
          </div>
        </form>
      </div>
    </div>
  );
}
