export default function AdminSelfCheck() {
  const secretsPresent = Boolean(process.env.GITHUB_CLIENT_SECRET && process.env.GITHUB_TOKEN);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10 font-mono">
      <h1 className="text-3xl font-bold text-green-400 mb-4">🔍 DevFlow AI Self Check</h1>
      <ul className="list-disc ml-6 text-zinc-300 space-y-2">
        <li>Status: ✅ App loaded</li>
        <li>GitHub Secrets: {secretsPresent ? "✅ Present" : "❌ Missing (Check Vercel/GitHub Secrets)"}</li>
        <li>Dashboard routes: Validated via build script</li>
        <li>Last PR activity: [Coming Soon]</li>
      </ul>
    </main>
  );
}
