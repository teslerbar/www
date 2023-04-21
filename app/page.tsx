import { Tweet } from "@/components/home/Tweet";
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
    <main className={"z-10 w-full max-w-screen-xl"}>
      <div className="mx-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-between gap-4 xl:mx-auto">
        {links.map((link) => {
          console.log({ link });
          const id = link?.url?.split("/").pop();
          return <Tweet className={'w-full'} key={id} id={id} />;
        })}
      </div>
    </main>
  );
}
