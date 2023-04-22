interface GetGitHubFileContentProps {
  repoUrl: string;
  filePath: string;
  branchName: string;
}

export type CmsEntry = {
  url: string;
};

export async function getGitHubFileContent({
  repoUrl,
  filePath,
  branchName,
}: GetGitHubFileContentProps): Promise<{ links: CmsEntry[] }> {
  const url = `${repoUrl}/contents/${filePath}?ref=${branchName}`;
  const options = {
    ...(process.env.GITHUB_OAUTH_TOKEN && {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
        "Content-Type": "application/json",
      },
    }),
    // data will revalidate every 60 seconds
    next: { revalidate: 60 },
  };

  const response = await fetch(url, options);
  const content = await response.json();

  const decoded = Buffer.from(content.content, "base64").toString("utf8");
  const trimmed = decoded.trim();
  const parsed = JSON.parse(trimmed);

  return parsed;
}
