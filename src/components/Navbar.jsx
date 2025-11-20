import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (label) => (
    <a href={`#${label.toLowerCase()}`} className="text-slate-200/80 hover:text-white transition-colors">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src="/flame-icon.svg" className="w-7 h-7" alt="logo" />
          <span className="text-white font-semibold tracking-tight">Flames Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navItem('Work')}
          {navItem('Services')}
          {navItem('Process')}
          {navItem('Contact')}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
          <Menu size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/80 backdrop-blur border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#work" className="text-slate-200" onClick={() => setOpen(false)}>Work</a>
            <a href="#services" className="text-slate-200" onClick={() => setOpen(false)}>Services</a>
            <a href="#process" className="text-slate-200" onClick={() => setOpen(false)}>Process</a>
            <a href="#contact" className="text-slate-200" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
