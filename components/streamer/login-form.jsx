import { EyeIcon, XIcon } from "@heroicons/react/outline";

export default function LoginForm() {
  return (
    <div className="hidden xl:flex absolute z-10 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ">
      <div className="p-8 bg-black/20 rounded-md">
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
        <div className="flex text-white my-4 border-b font-semibold">
          <button className="mr-4 py-2 border-b border-transparent focus:border-blue-500  focus:border-b z-10">
            Log In
          </button>
          <button className="py-2 border-transparent focus:border-blue-500 focus:border-b">
            Sign Up
          </button>
        </div>
        <form action="" className="w-96 text-white border-gray-500 ">
          <div className="flex flex-col">
            <label htmlFor="username" className="font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="rounded h-8 mb-4"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold mb-2">
              Password
            </label>
            <div className="flex items-center ">
              <input
                type="password"
                name="password"
                id="password"
                className="rounded h-8  w-full"
              />
              <EyeIcon className="absolute h-5 w-5 text-black right-24" />
            </div>
          </div>
          <p className="text-blue-500 my-2 hover:underline text-sm">
            Touble logging in?
          </p>
          <button className="w-full font-semibold bg-blue-700 rounded h-9">
            Login
          </button>
        </form>
      </div>
      <XIcon className="h-8 w-8 text-white mx-2" />
    </div>
  );
}
