import { getGitHubFileContent } from "@/utils/getGitHubFileContent";

const repoUrl = 'https://api.github.com/repos/teslerbar/www';
const filePath = '.eslintrc.json';
const branchName = 'main';

export default async function Home() {
  const response  = await getGitHubFileContent({repoUrl, branchName, filePath});

  return (
    <>
        <p className="z-10 w-full max-w-xl px-5 xl:px-0">{response}</p>
    </>



  );
}



