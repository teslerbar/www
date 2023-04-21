import { getGitHubFileContent } from "@/utils/getGitHubFileContent";

const repoUrl = "https://api.github.com/repos/teslerbar/www";
const filePath = "content.js";
const branchName = "main";

export default async function Home() {
  const response = await getGitHubFileContent({
    repoUrl,
    branchName,
    filePath,
  });

  return (
    <>
      <p className="z-10 w-full max-w-xl px-5 xl:px-0">{response.toString()}</p>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <div className="grid grid-cols-4 gap-4">
          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">
              Working on a new playground to compare AI providers. I&#39;ll be
              sharing some thoughts here as I go. My plan is to launch next
              week.{" "}
              <a href="https://t.co/v5g8Dv5Npj">pic.twitter.com/v5g8Dv5Npj</a>
            </p>
            &mdash; Jared Palmer (@jaredpalmer){" "}
            <a href="https://twitter.com/jaredpalmer/status/1643627344475594752?ref_src=twsrc%5Etfw">
              April 5, 2023
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </div>
      </div>
    </>
  );
}
