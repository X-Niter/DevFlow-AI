
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { agent } from '@/lib/ai/agent'

export default function AdminReleases() {
  const [log, setLog] = useState<string[]>([])

  useEffect(() => {
    const decision = agent.decide('deployment system');
  const output = agent.selfImprove('optimize deployment system')
    setLog(prev => [...prev, output])
    agent.learn('deployment', 'auto-export + GitHub Pages')
  }, [])

  return (
    <>
      <Head>
        <title>Release Panel</title>
      </Head>
      <div className="min-h-screen bg-black text-white p-10 space-y-4">
        <h1 className="text-3xl font-bold">📦 Release Dashboard</h1>
        <p className="text-gray-300">Welcome to the Smart Agent Console.</p>
        <pre className="bg-gray-900 p-4 rounded-xl border border-gray-700 whitespace-pre-wrap">
            Decision: {decision}
            {log.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </pre>
      </div>
    </>
  )
}
