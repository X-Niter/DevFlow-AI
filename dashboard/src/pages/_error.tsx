import type { NextPageContext } from "next";

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-10 font-mono">
      <h1 className="text-4xl font-bold text-yellow-400 mb-2">Something went wrong.</h1>
      <p className="text-zinc-300 mb-4">
        {statusCode ? `An error ${statusCode} occurred on server.` : "An error occurred on client."}
      </p>
      <a href="/landing" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">Return to Landing</a>
    </main>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode ?? err?.statusCode;
  return { statusCode };
};

export default Error;
