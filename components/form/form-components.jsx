import { EyeIcon } from "@heroicons/react/outline";

const inputStyle = "rounded h-8 pl-3 text-black";

//! Input
export function Input({ type, name, className, placeholder, required }) {
  if (type === "text") {
    return (
      <input
        type={type}
        name={name}
        id={name}
        className={`${inputStyle} ${className}`}
      />
    );
  }

  if (type === "number") {
    return (
      <input
        type={type}
        name={name}
        id={name}
        className={`${inputStyle} ${className} `}
      />
    );
  }

  if (type === "password") {
    return (
      <div className="flex items-center ">
        <input
          type={type}
          name={name}
          id={name}
          className={`${inputStyle} w-full`}
          placeholder={placeholder}
          required={required}
        />
        <EyeIcon className="absolute h-5 w-5 text-black right-20" />
      </div>
    );
  }
}

//! Select

export function Select({ children, name, placeholder, required, className }) {
  return (
    <select
      name={name}
      id={name}
      className={`${inputStyle} ${className}`}
      required={required}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {children}
    </select>
  );
}

//! Label

export function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="font-semibold my-2">
      {children}
    </label>
  );
}

//! Button

export function Button({ children, type, className }) {
  return (
    <button className="w-full font-semibold bg-blue-500 rounded h-9 ">
      {children}
    </button>
  );
}
