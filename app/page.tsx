import { getGitHubFileContent } from "@/utils/getGitHubFileContent";

const repoUrl = "https://api.github.com/repos/teslerbar/www";
const filePath = "content.json";
const branchName = "main";

export default async function Home() {
  const response = await getGitHubFileContent({
    repoUrl,
    branchName,
    filePath,
  });

  console.log("what:", response);

  return (
    <>
      <p className="z-10 w-full max-w-xl px-5 xl:px-0">{response.toString()}</p>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div className="grid grid-cols-4 gap-4"></div>
      </div>
    </>
  );
}
