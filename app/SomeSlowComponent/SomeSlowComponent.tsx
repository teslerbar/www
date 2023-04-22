import { getGitHubFileContent } from "@/utils/getGitHubFileContent";

const repoUrl = "https://api.github.com/repos/teslerbar/www";
const filePath = "content.json";
const branchName = "main";

export async function SomeSlowComponent() {
  const { links } = await getGitHubFileContent({
    repoUrl,
    branchName,
    filePath,
  });

  return <p>Super slow, but finally here...</p>;
}
