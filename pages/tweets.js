import Head from 'next/head'
import TweetsSection from '../src/components/tweets/tweets.jsx'
import { twitterAxiosClient } from '../src/utils/axiosClient.js'
import configs from '../src/configs/config.js'

export default function Tweets({tweets}){
    return(
            <>
                <Head>
                <title>Tweets | Sarthak Jain</title>
                </Head>
                <TweetsSection tweets={tweets} />
            </>
    )
}

export async function getStaticProps(){

    const {data} = await twitterAxiosClient.get(`users/${configs.TWITTER_USER_ID}/tweets`)
    return {
        props: {
            tweets: data.data
        },
        revalidate: 3600
    }
}