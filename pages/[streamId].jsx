import Chat from "../components/layout/chat";
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
      <div className="xl:absolute xl:left-0 xl:right-[384px] h-auto text-white ">
        <LiveStreamDisplay />
        <StreamInfo streamerName={streamerId} />
        <Chat />
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
