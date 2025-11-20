export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something great</h3>
            <p className="text-slate-400 mt-3">Tell us about your goals and we’ll propose a plan with timeline, scope, and estimates.</p>
          </div>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Name" />
              <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Company" />
            </div>
            <input className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Email" />
            <textarea rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="Project brief" />
            <button className="inline-flex items-center justify-center rounded-full bg-white/90 text-slate-900 px-6 py-3 font-medium hover:bg-white transition-colors">Request proposal</button>
          </form>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Flames Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#process" className="hover:text-white">Process</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
