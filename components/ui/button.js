import Link from "next/link";

export default function Button({ children, link, color }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={`${color} px-2 py-1 rounded mx-3 font-semibold`}>
          {children}
        </a>
      </Link>
    );
  }
  return <button>{children}</button>;
}
