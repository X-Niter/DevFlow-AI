# 🚀 DevFlow AI: Public Installer Guide

DevFlow AI is a GitHub App + AI dashboard designed to automate your pull requests, changelogs, and workflow monitoring.

---

## 📦 One-Command Setup

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🔐 Required Setup

1. Copy `.env.example` → `.env`
2. Fill in:
   - `GITHUB_TOKEN`
   - `OPENAI_API_KEY`
   - `GITHUB_APP_ID`

---

## 🌐 Hosting Options

You can deploy via:
- Vercel (recommended)
- GitHub Pages (via `npm run export`)
- Docker (coming soon)

---

## ✅ After Install

- Visit `/landing` to install the GitHub App.
- Configure via `/admin/install`
- View changelog, workflows, PR summaries from the dashboard

---

Need help? Visit the [Docs](./docs/README.md) or open an issue.
