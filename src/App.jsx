import Header from './components/Header'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[#f5f5f5] text-black min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Contact />
      <footer className="bg-[#f5f5f5] border-t-2 border-black">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <p className="text-sm">© {new Date().getFullYear()} Illustration Artist. All rights reserved.</p>
          <div className="flex gap-2">
            {['Instagram','Twitter/X','Behance'].map((s) => (
              <a key={s} href="#" className="px-3 py-1 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white transition-colors text-sm">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
