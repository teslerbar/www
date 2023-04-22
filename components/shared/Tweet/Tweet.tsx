"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { TweetProps } from "./Tweet.types";

function TweetSkeleton() {
  return (
    <div className={"flex items-start gap-1 rounded-xl p-2"}>
      <Skeleton height={48} width={48} circle />
      <div>
        <Skeleton height={16} width={100} />
        <Skeleton height={16} width={120} />
        <Skeleton className="mb-1" height={48} width={300} />
        <Skeleton height={120} />
      </div>
    </div>
  );
}

export function Tweet({ id }: TweetProps) {
  return (
    <div className={"z-10"}>
      <TwitterTweetEmbed tweetId={id} placeholder={<TweetSkeleton />} />
    </div>
  );
}
