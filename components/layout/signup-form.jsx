import { EyeIcon, MailIcon } from "@heroicons/react/outline";
import { months } from "../../test/data";
import { countryCodes } from "../../test/countryCodes";

export default function SignUpForm() {
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
      <div className="flex flex-col">
        <label htmlFor="password" className="font-semibold mb-2">
          Confirm Password
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
      <div className="flex flex-col my-2">
        <label htmlFor="dob" className="font-semibold mb-2">
          Date of Birth
        </label>
        <div className="flex justify-between gap-2 text-black">
          <select
            name="dob"
            id="dob"
            className="rounded h-8 pl-3 w-2/3"
            placeholder="Month"
            required
          >
            <option value="" default>
              Month
            </option>
            {months.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="day"
            id="day"
            className="rounded h-8 pl-3 w-1/3"
            placeholder="Day"
            required
          />
          <input
            type="number"
            name="year"
            id="year"
            className="rounded h-8 pl-3 w-1/3"
            placeholder="Year"
            required
          />
        </div>
        <div className="mt-2 ">
          <label htmlFor="">
            <span className="font-semibold">Phone Number</span>
            <span className="text-white/50 text-md">
              &nbsp;(Requires Verification)
            </span>
          </label>
          <div className=" flex gap-2 mt-2 text-black">
            <select
              name="countryId"
              id="countryId"
              className="flex rounded h-8 pl-3 w-5/12 text-sm "
            >
              {countryCodes.map((countries) => {
                for (let countryCode in countries) {
                  return (
                    <option value={countryCode} key={countryCode}>
                      {countries[countryCode]}
                    </option>
                  );
                }
              })}
            </select>
            <input
              type="number"
              name="phone"
              id="phone"
              className="rounded h-8 pl-3 w-7/12 text-black"
            />
          </div>
        </div>
      </div>

      <button
        className={`p-2 mb-4 font-bold flex items-center hover:bg-slate-200/20 rounded-md text-blue-500 text-sm `}
      >
        <MailIcon className="h-5 w-5 mr-2" />
        <p className="">Use email instead</p>
      </button>

      <p className="text-sm text-center">
        Viraal may use your phone number to call or send text messages with
        information regarding your account.
        <br />
        <br />
        By clicking Sign Up, you are agreeing to Viraal’s
        <span className="text-blue-500 hover:underline">
          &nbsp;Terms of Service&nbsp;
        </span>
        and are acknowledging our
        <span className="text-blue-500 hover:underline">
          &nbsp;Privacy Notice&nbsp;
        </span>
        applies.
      </p>
      <button className="w-full font-semibold bg-blue-700 rounded h-9 mt-6">
        Sign Up
      </button>
    </form>
  );
}
