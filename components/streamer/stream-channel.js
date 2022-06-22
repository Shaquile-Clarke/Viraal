import Image from "next/image";

export default function StreamChannel({
  image,
  steamerName,
  currentGame,
  viewCount,
  isOnline,
}) {
  return (
    <div className="flex justify-left items-center hover:bg-slate-100/20 px-2  ">
      <div className="border-2 border-green-500 w-[30px] h-[30px] rounded-full overflow-hidden mr-4">
        <Image
          src={image}
          alt={`${steamerName} profile image`}
          width={200}
          height={200}
        />
      </div>
      <div className="mr-6">
        <p className="font-semibold">{steamerName}</p>
        <p className="text-slate-400">{currentGame}</p>
      </div>
      <span className="ml-auto mr-3">{viewCount}</span>
    </div>
  );
}
