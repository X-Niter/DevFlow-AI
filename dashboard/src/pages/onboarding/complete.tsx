
import Head from 'next/head'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

export default function OnboardingComplete() {
  useEffect(() => {
    toast.success('🎉 Setup Complete! You are now ready to explore DevFlow.')
  }, [])

  return (
    <>
      <Head>
        <title>Onboarding Complete</title>
      </Head>
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-center p-8 rounded-2xl shadow-xl border border-gray-700 bg-gray-900">
          <h1 className="text-4xl font-bold mb-4">✅ Setup Complete</h1>
          <p className="text-lg text-gray-300 mb-4">
            Your DevFlow AI onboarding is now complete and your dashboard is ready to go!
          </p>
          <a
            href="/admin/releases"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Go to Admin Panel
          </a>
        </div>
      </div>
    </>
  )
}
