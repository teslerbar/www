import { Tweet } from "@/components/shared/Tweet/Tweet";
import { TweetsFeedProps } from "./TweetsFeed.types";

export function TweetsFeed({ tweets }: TweetsFeedProps) {
  return (
    <>
      {tweets.map(({ url }) => {
        const id = url.split("/").pop();

        return id && <Tweet key={id} id={id} />;
      })}
    </>
  );
}
