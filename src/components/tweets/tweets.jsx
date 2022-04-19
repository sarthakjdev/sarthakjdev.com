import TweetEmbedComp from "./tweetEmbed"

export default function TweetsSection({tweets}){
    return (
        <section className="text-white">
           {
               tweets.map((tw)=>{
                   return (
                       <TweetEmbedComp tweet={tw} key={tw.id}/>
                   )
               })
           }
        </section>
    )
}
