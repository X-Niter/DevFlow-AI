import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "devflow-secret";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies["devflow_token"];

  if (req.method === "GET") {
    if (!token) return res.status(200).json({ user: null });
    try {
      const decoded = jwt.verify(token, SECRET);
      return res.status(200).json({ user: decoded });
    } catch {
      return res.status(401).json({ user: null });
    }
  }

  if (req.method === "POST") {
    const { github } = req.body;
    if (!github) return res.status(400).json({ error: "Missing GitHub user info" });

    const signed = jwt.sign(github, SECRET, { expiresIn: "7d" });

    res.setHeader(
      "Set-Cookie",
      serialize("devflow_token", signed, {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7
      })
    );

    return res.status(200).json({ user: github });
  }

  if (req.method === "DELETE") {
    res.setHeader(
      "Set-Cookie",
      serialize("devflow_token", "", {
        path: "/",
        httpOnly: true,
        maxAge: 0
      })
    );
    return res.status(200).json({ user: null });
  }
}
