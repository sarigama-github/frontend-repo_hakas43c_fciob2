import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="top" className="relative min-h-[80vh] bg-[#f5f5f5] text-black border-b-2 border-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Bold, expressive illustration for brands and stories
          </motion.h1>

          <motion.p
            className="mt-6 text-lg max-w-prose"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            I craft imaginative worlds, character-driven scenes, and editorial visuals with a clean, modern edge.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <a href="#work" className="px-6 py-3 rounded-full bg-black text-white border-2 border-black hover:-translate-y-0.5 active:translate-y-0 transition-transform">
              View Work
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors">
              Commission
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <div className="aspect-[4/3] rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0_0_#000] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.06),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.06),transparent_35%)]" />
            <motion.div
              className="absolute inset-6 border-2 border-black rounded-2xl"
              initial={{ x: -8, y: -8 }}
              animate={{ x: 0, y: 0 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2.8, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-6 right-6 px-3 py-1 rounded-full bg-black text-white border-2 border-black"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              featured piece
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-2 border-black"
        initial={{ scale: 0.9, rotate: 0 }}
        animate={{ scale: 1, rotate: 8 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full border-2 border-black"
        initial={{ scale: 1, rotate: 0 }}
        animate={{ scale: 0.95, rotate: -8 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 10, ease: 'easeInOut' }}
      />
    </section>
  )
}

export default Hero
