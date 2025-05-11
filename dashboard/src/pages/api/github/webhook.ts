import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

const SECRET = process.env.GITHUB_WEBHOOK_SECRET || "";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

function verifySignature(payload: string, signature: string | undefined) {
  const hmac = crypto.createHmac("sha256", SECRET);
  const digest = `sha256=${hmac.update(payload).digest("hex")}`;
  return signature === digest;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const signature = req.headers["x-hub-signature-256"] as string;
  const payload = JSON.stringify(req.body);

  if (!verifySignature(payload, signature)) {
    return res.status(401).send("Invalid signature");
  }

  const event = req.headers["x-github-event"];
  const action = req.body.action;

  if (event === "pull_request" && action === "opened") {
    const pr = req.body.pull_request;
    const repo = req.body.repository;

    const title = pr.title;
    const prNumber = pr.number;
    const prBody = pr.body || "";
    const diffUrl = pr.diff_url;

    const diffResponse = await fetch(diffUrl);
    const diffText = await diffResponse.text();

    const prompt = `The following PR was opened on the repo "${repo.full_name}" titled "${title}". 
Here is the diff:

${diffText}

Please summarize the PR, highlight any issues or improvements, and suggest improvements.`;

    const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a senior software engineer reviewing pull requests." },
          { role: "user", content: prompt }
        ]
      })
    });

    const aiResult = await aiResponse.json();
    const summary = aiResult.choices?.[0]?.message?.content || "AI assistant failed to generate a summary.";

    // Post AI comment to GitHub PR
    await fetch(`https://api.github.com/repos/${repo.full_name}/issues/${prNumber}/comments`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GITHUB_TOKEN}`,
        "Accept": "application/vnd.github.v3+json"
      },
      body: JSON.stringify({
        body: `🤖 **DevFlow AI Review**

${summary}`
      })
    });
  }

  res.status(200).json({ received: true });
}
