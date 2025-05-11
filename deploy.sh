#!/bin/bash
echo "🔧 Setting up DevFlow AI..."

cd dashboard

# Ensure environment is configured
if [ ! -f .env ]; then
  echo "⚠️  .env not found! Please copy .env.example to .env and add your tokens."
  exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🧪 Running pre-deploy checks..."
npm run lint
npm run build
npm run export

echo "✅ Build complete. You can now deploy using Vercel, GitHub Pages, or your preferred host."
