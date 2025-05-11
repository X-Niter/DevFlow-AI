import { useEffect, useState } from "react";

export default function ChangelogPage() {
  const [commits, setCommits] = useState<string[]>([]);
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/github/changelog");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to load changelog");
        setCommits(data.commits || []);
        setSummary(data.summary || "");
      } catch (e: any) {
        setError(e.message);
      }
    }
    load();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-mono p-8">
      <h1 className="text-3xl font-bold text-green-400 mb-4">📋 Changelog</h1>
      {error && <p className="text-red-400">{error}</p>}
      {summary && (
        <div className="bg-zinc-900 rounded p-4 mb-6 shadow">
          <h2 className="text-lg font-semibold mb-2 text-green-300">AI Summary</h2>
          <pre className="whitespace-pre-wrap text-zinc-300">{summary}</pre>
        </div>
      )}
      <div className="bg-zinc-900 rounded p-4 shadow">
        <h2 className="text-lg font-semibold text-blue-300 mb-2">Raw Commits</h2>
        <ul className="list-disc list-inside text-zinc-400 space-y-1">
          {commits.map((msg, i) => (
            <li key={i}>{msg}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
