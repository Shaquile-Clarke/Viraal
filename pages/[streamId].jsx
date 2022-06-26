import ChatSideBar from "../components/layout/chat-sidebar";
import LiveStreamDisplay from "../components/streamer/livestreamdisplay";
import Head from "next/head";
import StreamInfo from "../components/streamer/streaminfo";

export default function Streamer({ streamerId }) {
  return (
    <>
      <Head>
        <title>{streamerId} - Viraal</title>
      </Head>

      <div className="absolute left-0 right-[384px] h-full">
        <LiveStreamDisplay />
        <StreamInfo streamerName={streamerId} />
      </div>

      <ChatSideBar />
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
