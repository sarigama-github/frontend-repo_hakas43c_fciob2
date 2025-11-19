import { useState } from 'react'
import { motion } from 'framer-motion'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', budget: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          budget: form.budget || undefined,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! I will reply shortly.')
      setForm({ name: '', email: '', subject: '', message: '', budget: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="bg-[#f5f5f5] text-black border-b-2 border-black">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-extrabold mb-6">Commission & Contact</h3>
        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border-2 border-black shadow-[6px_6px_0_0_#000]">
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="px-4 py-3 border-2 border-black rounded-lg bg-[#f5f5f5]" />
          <input required name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="px-4 py-3 border-2 border-black rounded-lg bg-[#f5f5f5]" />
          <input required name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="px-4 py-3 border-2 border-black rounded-lg bg-[#f5f5f5] sm:col-span-2" />
          <textarea required rows="5" name="message" value={form.message} onChange={handleChange} placeholder="Project details" className="px-4 py-3 border-2 border-black rounded-lg bg-[#f5f5f5] sm:col-span-2" />

          <div className="sm:col-span-2 flex items-center gap-3">
            <input name="budget" value={form.budget} onChange={handleChange} placeholder="Budget (optional)" className="px-4 py-3 border-2 border-black rounded-lg bg-[#f5f5f5] flex-1" />
            <motion.button whileTap={{ scale: 0.98 }} className="px-6 py-3 rounded-full bg-black text-white border-2 border-black">Send</motion.button>
          </div>
          {status && <p className="sm:col-span-2 text-sm text-black/70">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
