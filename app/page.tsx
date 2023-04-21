import { Tweet } from "@/components/home/Tweet";
import { getGitHubFileContent } from "@/utils/getGitHubFileContent";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

const repoUrl = "https://api.github.com/repos/teslerbar/www";
const filePath = "content.json";
const branchName = "main";

export default async function Home() {
  const { links } = await getGitHubFileContent({
    repoUrl,
    branchName,
    filePath,
  });

  return (
    <>
      <div className="z-10 w-full max-w-6xl">
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
          {links.map((link) => {
            console.log({ link });
            const id = link?.url?.split("/").pop();
            return <Tweet key={id} id={id} />;
          })}
        </div>
      </div>
    </>
  );
}
