import { useState } from "react";
import { MailIcon } from "@heroicons/react/outline";
import { months } from "../../test/data";
import { PhoneInput, EmailInput } from "../streamer/phone-email-input";
import { Label, Input, Select, Button } from "../form/form-components";

export default function SignUpForm() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <form action="" className="w-96 text-white border-gray-500 ">
      <div className="flex flex-col">
        <Label htmlFor={`username`}>Username</Label>
        <Input type={"text"} name={"username"} />
      </div>
      <div className="flex flex-col">
        <Label htmlFor={`password`}>Password</Label>
        <Input type={"password"} name={"password"} />
      </div>
      <div className="flex flex-col">
        <Label htmlFor={`confirmPassword`}>Confirm Password</Label>
        <Input type={"password"} name={"confirmPassword"} />
      </div>
      <div className="flex flex-col my-2">
        <Label htmlFor={`dob`}>Date of Birth</Label>
        <div className="flex justify-between gap-2 text-black">
          <Select
            name={"dob"}
            className={"w-2/3"}
            required={true}
            placeholder={"Month"}
          >
            {months.map((month, index) => (
              <option key={month} value={index}>
                {month}
              </option>
            ))}
          </Select>

          <Input
            type={"number"}
            name={"day"}
            className={"w-1/3"}
            placeholder={"Day"}
            required={true}
          />
          <Input
            type={"number"}
            name={"year"}
            className={"w-1/3"}
            placeholder={"Year"}
            required={true}
          />
        </div>
        {!showEmail ? <PhoneInput /> : <EmailInput />}
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          setShowEmail(!showEmail);
        }}
        className={`p-2 mb-4 font-bold flex items-center hover:bg-slate-200/20 rounded-md text-blue-500 text-sm `}
      >
        <MailIcon className="h-5 w-5 mr-2" />
        <p>{!showEmail ? "Use email instead" : "Use phone number instead"}</p>
      </button>

      <p className="text-sm text-center mb-4">
        {!showEmail && (
          <>
            <span>
              Viraal may use your phone number to call or send text messages
              with information regarding your account.
            </span>
            <br />
            <br />
          </>
        )}
        By clicking Sign Up, you are agreeing to Viraal&rsquo;s &nbsp;
        <span className="text-blue-500 hover:underline">Terms of Service</span>
        &nbsp; and are acknowledging our&nbsp;
        <span className="text-blue-500 hover:underline">Privacy Notice</span>
        &nbsp; applies.
      </p>
      <Button>Sign Up</Button>
    </form>
  );
}
