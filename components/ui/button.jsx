import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { StarIcon, HeartIcon } from "@heroicons/react/outline";

export default function Button({ children, link, color, sub, follow }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={`${color} px-2 py-1 rounded mx-2 font-semibold`}>
          {children}
        </a>
      </Link>
    );
  }
  if (sub) {
    return (
      <button
        className={`${color} px-2 py-1 rounded mx-2 font-semibold flex items-center`}
      >
        <StarIcon className="h-5 w-5 mr-2" />
        {children}
        <ChevronDownIcon className="h-5 w-5 ml-2" />
      </button>
    );
  }
  if (follow) {
    return (
      <button
        className={`${color} px-2 py-1 rounded mx-2 font-semibold flex items-center`}
      >
        <HeartIcon className="h-5 w-5 mr-2" />
        {children}
      </button>
    );
  }
  return (
    <button className={`${color} px-2 py-1 rounded mx-2 font-semibold`}>
      {children}
    </button>
  );
}
