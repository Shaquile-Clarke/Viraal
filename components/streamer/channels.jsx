import LiveChannel from "./live-channel";
// import { liveChannels } from "../../test/dummydata";

export default function Channels({ liveChannels }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 text-white w-full m-auto mt-3 mb-20 px-10">
      {liveChannels.map((data) => (
        <LiveChannel
          key={data.streamerName}
          image={data.image}
          profileImage={data.profileImage}
          title={data.title}
          streamerName={data.streamerName}
          game={data.game}
          categories={data.categories}
          viewCount={data.viewCount}
        />
      ))}
    </div>
  );
}
