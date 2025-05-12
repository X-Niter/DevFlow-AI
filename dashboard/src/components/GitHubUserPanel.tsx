/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element
import { useEffect, useState } from "react";

export default function GitHubUserPanel() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        setUser(data.user);
      } catch (e) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  const logout = async () => {
    await fetch("/api/auth/session", { method: "DELETE" });
    setUser(null);
    alert("👋 You've been signed out. See you soon!");
    setTimeout(() => window.location.href = "/landing", 800);
  };

  if (loading) return <p className="text-zinc-400">Loading user info...</p>;
  if (!user) return <p className="text-zinc-500">Not signed in</p>;

  return (
    <div className="p-4 bg-zinc-900 rounded-xl shadow flex items-center gap-4">
      <img src={user.avatar_url} alt="avatar" className="w-12 h-12 rounded-full border border-zinc-700" />
      <div>
        <p className="text-sm font-semibold text-white">{user.name || user.login}</p>
        <p className="text-xs text-zinc-400">@{user.login}</p>
      </div>
      <button
        className="ml-auto px-4 py-1 text-sm bg-red-500 hover:bg-red-400 text-white rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
