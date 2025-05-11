# DevFlow AI

**DevFlow AI** is an intelligent GitHub App designed to supercharge your development workflow with AI-assisted pull request analysis, issue triage, changelog generation, and real-time workflow monitoring — all from a sleek modern dashboard.

## 🔧 Features
- GitHub App onboarding + manifest handling
- Live GitHub Actions monitoring
- AI prompt interface
- Auto-changelog viewer
- PR suggestion generator
- Self-healing workflows
- Admin UI and setup wizard

## 🚀 Quickstart

```bash
git clone https://github.com/YOUR-USER/devflow-ai
cd devflow-ai/dashboard
npm install
npm run dev
```

## 📦 GitHub App Install

To create your own DevFlow App:
1. Visit: https://github.com/settings/apps/new?manifest_url=https://your-deploy-site/api/github/app/manifest
2. Install it on a repo
3. Head back to `/onboarding/complete`

## 🧠 Developer Scripts

| Command         | Description                      |
|----------------|----------------------------------|
| `npm run dev`  | Start local dev server           |
| `npm run build`| Build Next.js app                |
| `npm run export`| Export static files              |
| `npm run autofix`| Auto-lint and fix broken TS     |

## 💬 Feedback

PRs welcome. Open issues or reach out via GitHub Discussions.
