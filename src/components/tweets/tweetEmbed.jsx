
import TweetEmbed from 'react-tweet-embed'

export default function TweetEmbedComp ({tweet}) {
  return <TweetEmbed tweetId={tweet.id} />
}