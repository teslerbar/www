import { Tweet } from "@/components/shared/Tweet/Tweet";
import { getGitHubFileContent } from "@/utils/getGitHubFileContent";
import { TweetsFeedProps } from "./TweetsFeed.types";

const repoUrl = "https://api.github.com/repos/teslerbar/www";
const filePath = "content.json";
const branchName = "main";

export async function TweetsFeed() {
  const { links: tweets } = await getGitHubFileContent({
    repoUrl,
    branchName,
    filePath,
  });

  return (
    <>
      {tweets.map(({ url }) => {
        const id = url.split("/").pop();
        return id && <Tweet key={id} id={id} />;
      })}
    </>
  );
}
