import Head from "next/head";
import Channels from "../components/streamer/channels";
import { liveChannels } from "../test/dummydata";

export default function Home({ dummyData }) {
  return (
    <>
      <Head>
        <title>Viraal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/favicon/favicon.ico" />
      </Head>
      <Channels liveChannels={dummyData} />
    </>
  );
}

export async function getStaticProps() {
  const dummyData = liveChannels;

  return {
    props: { dummyData },
  };
}
