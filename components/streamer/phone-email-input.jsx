import { countryCodes } from "../../test/countryCodes";
export function PhoneInput() {
  return (
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
  );
}

export function EmailInput() {
  return (
    <div className="mt-2 flex flex-col ">
      <label htmlFor="email">
        <span className="font-semibold">Email</span>
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="rounded mt-2 h-8 pl-3 w-full text-black"
      />
    </div>
  );
}
