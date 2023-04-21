"use client";

import { TwitterTweetEmbed } from "react-twitter-embed";
import { TweetProps } from "./Tweet.types";

export function Tweet({ id }: TweetProps) {
  return <TwitterTweetEmbed tweetId={id} />;
}
