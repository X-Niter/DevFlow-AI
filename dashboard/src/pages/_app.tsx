import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DevFlow AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="AI-powered GitHub automation dashboard" />
        <link rel="icon" href="/devflow-dashboard/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
