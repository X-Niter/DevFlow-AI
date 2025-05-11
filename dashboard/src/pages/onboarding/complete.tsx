export default function OnboardingComplete() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white font-mono p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-green-400 font-bold mb-4">✅ You're all set!</h1>
      <p className="text-zinc-300 text-center max-w-xl">
        DevFlow AI has been successfully installed. You can now return to the dashboard to begin exploring its features.
      </p>
      <a href="/dashboard" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
        Go to Dashboard
      </a>
    </main>
  );
}
