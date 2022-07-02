import { EyeIcon } from "@heroicons/react/outline";

export default function LoginForm() {
  return (
    <form action="" className="w-96 text-white border-gray-500 ">
      <div className="flex flex-col">
        <label htmlFor="username" className="font-semibold mb-2">
          Username
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="rounded h-8 mb-4 pl-3 text-black"
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
            className="rounded h-8 w-full pl-3 text-black"
          />
          <EyeIcon className="absolute h-5 w-5 text-black right-20" />
        </div>
      </div>
      <p className="text-blue-500 my-2 hover:underline text-sm">
        Trouble logging in?
      </p>
      <button className="w-full font-semibold bg-blue-700 rounded h-9 ">
        Login
      </button>
    </form>
  );
}
