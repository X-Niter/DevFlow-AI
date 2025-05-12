
import Head from 'next/head'

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>DevFlow AI</title>
        <meta name="description" content="Autonomous GitHub App for workflows, PRs, changelogs, and more" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans">
        <header className="sticky top-0 z-50 w-full backdrop-blur bg-black/30 border-b border-gray-700 shadow-sm">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl font-bold tracking-tight text-pink-400">💡 DevFlow AI</h1>
            <a href="https://github.com/X-Niter/devflow-dashboard" target="_blank" rel="noopener noreferrer"
              className="text-sm hover:text-pink-300 transition">GitHub</a>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Welcome to DevFlow AI</h2>
          <p className="text-lg text-gray-300 mb-10">
            An intelligent GitHub App for automating pull requests, workflow actions, changelogs, and more.
          </p>
          <a href="/devflow-dashboard/landing" className="inline-block rounded-2xl bg-pink-600 hover:bg-pink-500 transition px-6 py-3 text-white font-medium shadow-lg">
            Install on Your Repo
          </a>
        </main>

        <footer className="text-center text-sm text-gray-500 py-8">
          &copy; {new Date().getFullYear()} DevFlow AI &bull; All rights reserved.
        </footer>
      </div>
    </>
  );
}
