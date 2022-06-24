import Image from "next/image";
import Path from "../ui/path";
import Tag from "../streamer/tag";

export default function LiveChannel({
  image,
  title,
  profileImage,
  game,
  streamerName,
  categories,
  viewCount,
}) {
  return (
    <div>
      <Path href={`/${streamerName}`}>
        <div className="flex w-full overflow-hidden">
          <Image
            src={image}
            alt={`${streamerName} stream preview`}
            height={300}
            width={600}
          />
          <div className="absolute px-2 font-semibold bg-red-600 rounded-md ml-2 mt-1 text-sm">
            LIVE
          </div>
          <div className="absolute px-2 font-semibold bg-gray-700/40 rounded-md ml-2 mt-8  text-sm">
            {viewCount > 1000
              ? (viewCount / 1000).toFixed(1) + "K"
              : `${viewCount}`}{" "}
            viewers
          </div>
        </div>
      </Path>
      <div className="flex w-full mt-2 jus">
        <Path href={`/${streamerName}`}>
          <div className="h-10 w-10 overflow-hidden">
            <Image
              src={profileImage}
              alt={`${streamerName} Logo`}
              width={80}
              height={80}
            />
          </div>
        </Path>
        <div className="flex flex-col text-left ml-3 ">
          <Path href={`/${streamerName}`}>
            <p className="font-semibold">{title}</p>
          </Path>
          <Path href={`/${streamerName}`}>
            <span>{streamerName}</span>
          </Path>
          <span>{game}</span>
          <div className="flex flex-wrap">
            {categories.map((tags) => (
              <Tag key={tags}>{tags}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
