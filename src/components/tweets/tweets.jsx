import FollowButton from "./followButton"
import TweetEmbedComp from "./tweetEmbed"

export default function TweetsSection({tweets}){
    return (
        <section className="text-white flex flex-col mx-14 mt-32 gap-20 m-auto place-content-center items-center">
            <div className="flex flex-wrap place-content-center  gap-20  mx-auto">
            {
               tweets.map((tw, index)=>{
                if(index <= 5){
                    return (
                        <TweetEmbedComp tweet={tw} />
                    )
                }
               })
           }
         </div>
        <FollowButton />
        </section>
    )
}
