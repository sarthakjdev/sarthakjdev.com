import Head from "next/head";
import TweetsSection from "../src/components/tweets/tweets.jsx";
import { twitterAxiosClient } from "../src/utils/axiosClient.js";
import configs from "../src/configs/config.js";
import threads from "../src/data/recentThreads.js";

export default function Tweets({ tweets }) {
  return (
    <>
      <Head>
        <title>Tweets | Sarthak Jain</title>
      </Head>
      <TweetsSection tweets={tweets} />
    </>
  );
}

export async function getStaticProps() {
    const tweets = [];
  await Promise.all(
    await threads.map(async (t) => {
      const tweet = await twitterAxiosClient.get(`/tweets/${t.id}`);
      await tweets.push(tweet.data.data);
    })
  );

  return {
    props: {
      tweets: tweets,
    },
  };
}
