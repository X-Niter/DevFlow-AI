import Link from 'next/link'
// eslint-disable-next-line @next/next/no-html-link-for-pages
export default function Custom404() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-10 font-mono">
      <h1 className="text-5xl text-red-500 font-bold mb-4">404</h1>
      <p className="text-zinc-300">Page not found. You might have taken a wrong turn into a broken workflow.</p>
      <Link href="/devflow-dashboard/landing" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
        Return to Safety
      </Link>
    </main>
  );
}
