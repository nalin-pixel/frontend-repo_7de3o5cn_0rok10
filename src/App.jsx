import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ToolFusion from './components/ToolFusion'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_60%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <ToolFusion />
        <Showcase />
        <Footer />
      </main>
    </div>
  )
}

export default App
