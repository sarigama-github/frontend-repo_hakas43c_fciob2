import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Gallery() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/artworks?limit=12`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        // fallback demo items
        setItems([
          { _id: '1', title: 'Neon Dreams', image_url: 'https://images.unsplash.com/photo-1526312426976-593c2d0b-...w=1200&q=80' },
          { _id: '2', title: 'Quiet City', image_url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80' },
          { _id: '3', title: 'Forest Spirit', image_url: 'https://images.unsplash.com/photo-1520975693416-83bed9d0ae6b?w=1200&q=80' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchArtworks()
  }, [])

  return (
    <section id="work" className="bg-[#f5f5f5] text-black border-b-2 border-black">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Selected Work</h2>
          <span className="px-3 py-1 border-2 border-black rounded-full bg-white text-sm">{items.length} pieces</span>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] rounded-2xl border-2 border-black bg-white animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((art, idx) => (
              <motion.div
                key={art._id || idx}
                className="group relative overflow-hidden rounded-2xl border-2 border-black bg-white shadow-[6px_6px_0_0_#000]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
              >
                <img
                  src={art.image_url}
                  alt={art.title}
                  className="w-full h-full object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 flex items-center justify-between bg-white/80 border-t-2 border-black">
                  <span className="font-semibold truncate pr-2">{art.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full border-2 border-black bg-[#f5f5f5]">Illustration</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
