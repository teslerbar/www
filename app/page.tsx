import { TweetsFeed } from "@/components/home/TweetsFeed";
import { Input } from "@/components/shared/Input";
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
      <div className="mx-5 grid grid-cols-1 justify-between gap-4 sm:grid-cols-2 xl:mx-auto xl:grid-cols-3">
        <Input />
        <TweetsFeed tweets={links} />
      </div>
    </div>
  );
}
