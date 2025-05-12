import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

const SECRET = process.env.GITHUB_WEBHOOK_SECRET || "";

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
    console.log(`[PR Opened] ${pr.title} by ${pr.user.login}`);
  }

  res.status(200).json({ received: true });
}
