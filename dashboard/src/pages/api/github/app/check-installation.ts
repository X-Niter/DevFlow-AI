import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const installed = !!process.env.GITHUB_APP_ID && !!process.env.GITHUB_TOKEN;
  res.status(200).json({ installed, appId: process.env.GITHUB_APP_ID || null });
}
