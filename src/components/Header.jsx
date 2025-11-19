import { motion } from 'framer-motion'

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#top"
          className="inline-flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-10 h-10 rounded-full bg-black text-white grid place-items-center border-2 border-black">IA</span>
          <span className="text-xl font-semibold tracking-tight text-black">Illustration Artist</span>
        </motion.a>

        <nav className="hidden sm:flex items-center gap-3">
          {[
            { href: '#work', label: 'Work' },
            { href: '#about', label: 'About' },
            { href: '#contact', label: 'Contact' },
          ].map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="px-4 py-2 border-2 border-black rounded-full bg-white text-black hover:bg-black hover:text-white transition-colors"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
