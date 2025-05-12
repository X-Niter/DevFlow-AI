import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const links = [
  { href: '/landing', label: 'Home' },
  { href: '/admin/releases', label: 'Releases' },
  // add other pages
]

export default function Navbar() {
  const { pathname } = useRouter()

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 w-full bg-surface/80 backdrop-blur-lg z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/landing">
          <h1 className="text-2xl font-bold text-white">DevFlow AI</h1>
        </Link>
        <div className="flex space-x-4">
          {links.map(link => (
            <Link key={link.href} href={link.href}>
              <motion.a
                whileHover={{ scale: 1.1 }}
                className={`px-3 py-2 rounded-xl text-white ${pathname === link.href ? 'bg-primary' : 'hover:bg-primary/50'}`}
              >
                {link.label}
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
