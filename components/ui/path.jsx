import Link from "next/link";

export default function Path({ children, href }) {
  return (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  );
}
