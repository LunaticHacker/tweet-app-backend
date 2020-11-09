import { TwitterClient } from "twitter-api-client";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
dotenv.config();

const twitterClient = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});

async function getHome() {
  const data = await twitterClient.tweets.statusesHomeTimeline();
  return data;
}
app.get("/home", async (req, res) => {
  res.send(await getHome());
});

app.listen(2020, () => {
  console.log(`Example app listening at http://localhost:2020`);
});
