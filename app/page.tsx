import { TweetsFeed } from "@/components/home/TweetsFeed";
import { Input } from "@/components/shared/Input";
import { cn } from "@/lib/utils";

import { getGitHubFileContent } from "@/utils/getGitHubFileContent";

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
    <div className={"z-10 w-full max-w-screen-xl"}>
      <div className={"mx-5 xl:mx-auto"}>
        <Input
          className={"mb-6 h-16"}
          placeholder="What do you want to keep...?"
        />

        <div
          className={cn(
            "grid grid-cols-1 items-start justify-between gap-4 sm:grid-cols-2 xl:grid-cols-3",
          )}
        >
          <TweetsFeed tweets={links} />
        </div>
      </div>
    </div>
  );
}
