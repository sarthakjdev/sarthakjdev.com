
import { Tweet } from 'react-twitter-widgets';

export default function TweetEmbedComp ({tweet}) {
  return (          
         <article key={tweet.id} className='flex h-auto place-content-center'>
               <div className='flex p-6 h-fit place-content-center bg-gradient-to-bl from-gradientCol1 to-gradientCol3 rounded-2xl'>
                    <Tweet tweetId={tweet.id} options={{theme: 'dark', width: 'auto', height: '100', conversation: 'none'  }} />
               </div>
          </article>
)
}