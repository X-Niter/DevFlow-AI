import { useEffect, useState } from "react";

type WorkflowRun = {
  id: number;
  name: string;
  status: string;
  conclusion: string;
  html_url: string;
  head_commit: { message: string };
};

export default function WorkflowStatus() {
  const [runs, setRuns] = useState<WorkflowRun[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRuns() {
      try {
        const res = await fetch("/api/github/actions");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch");
        setRuns(data.workflow_runs || []);
      } catch (e: any) {
        setError(e.message);
      }
    }
    fetchRuns();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-6 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-blue-400">🛠 Workflow Status</h1>
      {error && <p className="text-red-400">{error}</p>}
      <ul className="space-y-4">
        {runs.map((run) => (
          <li key={run.id} className="p-4 bg-zinc-900 rounded-xl shadow-md">
            <a href={run.html_url} target="_blank" rel="noopener noreferrer" className="text-lg text-blue-300 font-bold hover:underline">
              {run.name}
            </a>
            <p className="text-sm text-zinc-400">{run.head_commit?.message || "No commit message"}</p>
            <p className="text-sm mt-1">
              <span className={`font-semibold ${run.conclusion === "success" ? "text-green-400" : "text-red-400"}`}>
                {run.status.toUpperCase()} - {run.conclusion.toUpperCase()}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
