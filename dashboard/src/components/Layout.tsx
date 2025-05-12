import { ReactNode } from 'react'
import Navbar from './Navbar'
import { motion, AnimatePresence } from 'framer-motion'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-background min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={typeof window !== 'undefined' ? window.location.pathname : ''}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto px-6 py-8 text-white"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}
