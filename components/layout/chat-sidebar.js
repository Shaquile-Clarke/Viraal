import { EmojiHappyIcon, ArrowRightIcon } from "@heroicons/react/outline";
import SidePanelTitle from "./side-panel-title";

export default function ChatSideBar() {
  return (
    <div className="fixed w-[384px] top-14 right-0 bottom-14 h-screen text-white drop-shadow-lg bg-[#181818] border-l border-gray-400">
      <div className="flex justify-center w-full items-center border-b border-gray-400 text-center py-2">
        <ArrowRightIcon className="absolute left-2 h-8 w-8 p-1 rounded-md hover:bg-slate-300/20" />
        <div className="text-center">
          <SidePanelTitle>Stream Chat</SidePanelTitle>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <form
          action=""
          className="flex absolute bottom-40 w-10/12 justify-center text-black"
        >
          <input
            type="text"
            placeholder="Send a message"
            className="h-10 pl-3 w-full rounded pl-3ring-2 ring-gray-400 placeholder:text-gray-slate-500"
          />
          <div className="flex items-center">
            <EmojiHappyIcon className="absolute w-6 text-black right-2 pointer-events-none" />
          </div>
        </form>
      </div>
    </div>
  );
}
