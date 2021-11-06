import {
  TwitterClient
} from 'twitter-api-client';
import {} from 'dotenv/config';
const twitterClient = new TwitterClient({
  apiKey: process.env.CONSUMER_KEY,
  apiSecret: process.env.SECRET_KEY,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.TOKEN_SECRET,
});


const sendTweet = async (status, replyId) => twitterClient.tweets.statusesUpdate({
  status: status,
  reply
});
export {
  sendTweet
};