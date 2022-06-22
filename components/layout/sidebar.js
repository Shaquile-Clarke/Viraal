import { followedChannel, recommendedChannel } from "../../test/dummydata";
//? Test Data Above
import Link from "next/link";
import StreamChannel from "../steamer/stream-channel";
import SidePanelTitle from "./side-panel-title";
import React from "react";

export default function SideBar() {
  return (
    <div className="h-screen bg-[#181818] drop-shadow-lg fixed text-white">
      <div>
        <SidePanelTitle>Followed Channels</SidePanelTitle>
        {followedChannel.map((streamer) => (
          <React.Fragment key={streamer.name}>
            <Link href={`/${streamer.name}`}>
              <a>
                <StreamChannel
                  image={streamer.image}
                  steamerName={streamer.name}
                  currentGame={streamer.currentGame}
                  viewCount={streamer.viewCount}
                  isOnline={streamer.isOnline}
                />
              </a>
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div>
        <SidePanelTitle>Recommended Channels</SidePanelTitle>
        {recommendedChannel.map((streamer) => (
          <React.Fragment key={streamer.name}>
            <Link href={`/${streamer.name}`}>
              <a>
                <StreamChannel
                  image={streamer.image}
                  steamerName={streamer.name}
                  currentGame={streamer.currentGame}
                  viewCount={streamer.viewCount}
                  isOnline={streamer.isOnline}
                />
              </a>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
