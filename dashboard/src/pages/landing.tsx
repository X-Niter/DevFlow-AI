export default function Landing() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-mono p-12">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Welcome to DevFlow AI</h1>
      <p className="text-zinc-300 mb-4 max-w-xl">
        DevFlow AI is a public GitHub App that connects to your repositories, monitors workflows, and uses AI to help you review pull requests, track issues, generate changelogs, and more.
      </p>
      <a
        href="https://github.com/apps/devflow-ai/installations/new"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-500"
      >
        Install DevFlow AI
      </a>
    </main>
  );
}
