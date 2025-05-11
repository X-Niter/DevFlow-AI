import { useEffect } from "react";

export default function OnboardingComplete() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/admin/releases";
    }, 2000);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-white font-mono p-10 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-green-400 font-bold mb-4">✅ Setup Complete!</h1>
      <p className="text-zinc-300 text-center max-w-xl">
        DevFlow AI has been successfully installed. Redirecting to your Admin Release Panel...
      </p>
    </main>
  );
}
