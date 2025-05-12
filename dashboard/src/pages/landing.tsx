export default function LandingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10 font-mono text-center">
      <h1 className="text-4xl font-bold text-green-400 mb-6">🧠 Welcome to DevFlow AI</h1>
      <p className="text-zinc-300 max-w-xl mx-auto">
        An intelligent GitHub App for automating pull requests, workflow actions, changelogs, and more.
      </p>
      <a
        href="https://github.com/apps/devflow-dashboard/installations/new"
        className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500"
      >
        Install on Your Repo
      </a>
    </main>
  );
}
