import { TwitterClient } from 'twitter-api-client';
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.API_KEY)

const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});

async function test(){// Search for a user
const data = await twitterClient.tweets.statusesHomeTimeline();
console.log(data)
}
test()