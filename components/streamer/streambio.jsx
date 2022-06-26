import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function StreamBio({ streamerName }) {
  return (
    <div className="container m-auto flex border bg-gray-400/20 rounded-2xl p-10 my-3 ">
      <div>
        <h2 className="flex text-2xl font-bold items-center">
          About {streamerName}
          <BadgeCheckIcon className="text-blue-500 h-6 mx-1" />
        </h2>
        <p className="flex my-2">
          <span className="font-bold">109K</span> &nbsp;
          <span className="text-gray-300">followers</span>
          &nbsp;-&nbsp;
          <span className="text-lime-500 font-bold">Pump &amp; Dump</span>
        </p>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
            saepe velit molestiae tempora natus commodi, porro quas dolorem
            minus veniam expedita minima ab beatae eum doloremque quos! Qui,
            sunt perferendis.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <span>Youtube</span>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>TikTok</span>
      </div>
    </div>
  );
}
