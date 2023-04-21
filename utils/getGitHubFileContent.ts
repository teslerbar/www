
interface GetGitHubFileContentProps {
    repoUrl: string;
    filePath: string;
    branchName: string;
}

export async function getGitHubFileContent({ repoUrl, filePath, branchName}: GetGitHubFileContentProps) {
    const url = `${repoUrl}/contents/${filePath}?ref=${branchName}`;
    const options = {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          "Authorization": `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
          // "Accept": "application/vnd.github+json",
        },
      }),
      // data will revalidate every 60 seconds
      next: { revalidate: 60 },
    };
  
  
    const response = await fetch(
      url,
      options
    );
  
  
    const content = await response.json();
      
    if (content.encoding === "base64") {
      const decodedContent = atob(content.content);

      console.log("CONTENTTT: ",typeofdecodedContent)

      
      return JSON.parse(decodedContent);
    } else {
      throw new Error(`Unsupported encoding: ${content.encoding}`);
    }
    
    // const trimmedContent = content.trim();

    return content;
  }