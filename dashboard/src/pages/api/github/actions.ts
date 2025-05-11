import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = process.env.GITHUB_TOKEN;
  const repo = "X-Niter/devflow-ai";

  if (!token) return res.status(500).json({ error: "Missing GitHub token" });

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/actions/runs?per_page=5`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json"
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch GitHub workflows" });
  }
}
