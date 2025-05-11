import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { prompt, repoSummary } = req.body;

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "Missing OpenAI API Key" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are an AI developer assistant helping review GitHub pull requests and code." },
          { role: "user", content: `Repo Summary: ${repoSummary}` },
          { role: "user", content: prompt }
        ]
      })
    });

    const result = await response.json();
    return res.status(200).json({ result: result.choices?.[0]?.message?.content || "No response" });
  } catch (e) {
    return res.status(500).json({ error: "Failed to fetch from OpenAI" });
  }
}
