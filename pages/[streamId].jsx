import ChatSideBar from "../components/layout/chat-sidebar";
import LiveStreamDisplay from "../components/streamer/livestreamdisplay";
import Head from "next/head";
import StreamInfo from "../components/streamer/streaminfo";
import StreamBio from "../components/streamer/streambio";

export default function Streamer({ streamerId }) {
  return (
    <>
      <Head>
        <title>{streamerId} - Viraal</title>
      </Head>
      <ChatSideBar />
      <div className="absolute left-0 right-[384px] h-auto text-white ">
        <LiveStreamDisplay />
        <StreamInfo streamerName={streamerId} />
        <StreamBio streamerName={streamerId} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  console.log(params);

  return {
    props: { streamerId: params.streamId },
  };
}
