import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="bg-[#f5f5f5] text-black border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="aspect-[4/3] rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0_0_#000]"
        />
        <div>
          <h3 className="text-3xl font-extrabold mb-4">About the Artist</h3>
          <p className="text-lg leading-relaxed">
            I’m an illustration artist focusing on character design, editorial visuals, and brand worlds.
            My work blends bold shapes, playful details, and clean color palettes.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {['Editorial','Brand','Character','Concept'].map((skill) => (
              <li key={skill} className="px-4 py-2 rounded-full border-2 border-black bg-white text-center font-semibold">{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
