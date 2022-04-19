import Head from 'next/head'
import TweetsSection from '../src/components/tweets/tweets.jsx'
import ComingSoon from '../src/components/comingSoon.jsx'
import { twitterAxiosClient, oEmbedClient } from '../src/utils/axiosClient.js'
import configs from '../src/configs/config.js'
import axios from 'axios'

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

    const twitterResponse = await twitterAxiosClient.get(`users/${configs.TWITTER_USER_ID}/tweets`)
    // const twitterEmbeds  = await Promise.all(
    //         twitterResponse.data.data.map(async (tweet)=>{
    //         const url =  `https://twitter.com/${configs.TWITTER_USERNAME}/status/${tweet.id}`
    //         const embed = await axios.get(`${configs.OEMBED_BASE_URL}?url=${url}&omit_script=true`)
    //         return embed.data
    //     })
    // )
    return {
        props: {
            tweets: twitterResponse.data.data
        },
        revalidate: 3600
    }
}