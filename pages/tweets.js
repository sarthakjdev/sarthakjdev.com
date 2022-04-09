import Head from 'next/head'
import TweetsSection from '../src/components/tweets/tweets.jsx'
import { twitterAxiosClient } from '../src/utils/axiosClient.js'
import configs from '../src/configs/config.js'

export default function Tweets(){
    return(
            <>
                <Head>
                <title>Tweets | Sarthak Jain </title>
                </Head>
            </>
    )
}

export async function getServerSideProps(){

    const {data: twitterResponse} = await twitterAxiosClient.get(`users/${configs.TWITTER_USER_ID}/tweets`)
 console.log("twitterResponse ", twitterResponse);
    
    
    return {
        props: {
            project: 'we are good to go'
        }
    }
}