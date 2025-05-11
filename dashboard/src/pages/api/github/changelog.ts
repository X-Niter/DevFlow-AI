import type { NextApiRequest, NextApiResponse } from "next";

const token = process.env.GITHUB_TOKEN;
const owner = "X-Niter";
const repo = "devflow-ai";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!token) return res.status(500).json({ error: "Missing GitHub token" });

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json"
      }
    });

    const commits = await response.json();
    const commitMessages = commits.map((c: any) => `- ${c.commit.message}`);

    // Optional: GPT-4 summary of commits
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "Summarize this changelog professionally." },
          { role: "user", content: `Create a changelog from:
${commitMessages.join("\n")}` }
        ]
      })
    });

    const gptResult = await openaiRes.json();
    const summary = gptResult.choices?.[0]?.message?.content;

    res.status(200).json({ commits: commitMessages, summary });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch or summarize changelog" });
  }
}
