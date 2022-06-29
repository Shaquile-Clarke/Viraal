import Button from "../ui/button";

export default function Footer() {
  return (
    <div className="hidden xl:flex justify-center items-center text-white bg-blue-700 fixed w-full bottom-0 rounded-tr-md rounded-tl-md drop-shadow-xl">
      <div className="flex flex-col m-auto text-center">
        <small className="text-lg">
          Built with <a href="https://nextjs.org/">NextJS</a>
        </small>
        <small className="text-lg">
          Powered by <a href="https://vercel.com/">Vercel</a>
        </small>
      </div>
      <Button link={`/signup`} color="bg-gray-500">
        Sign Up
      </Button>
    </div>
  );
}
