import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90svh] md:min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 md:pt-40 md:pb-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl"
        >
          Custom Web & Mobile Products for Ambitious Teams
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl"
        >
          We design, build and scale interactive applications. Global reach. Minimalistic aesthetics. Real business impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white/90 text-slate-900 px-6 py-3 font-medium hover:bg-white transition-colors">Start a project</a>
          <a href="#work" className="inline-flex items-center justify-center rounded-full bg-slate-900/60 text-white px-6 py-3 font-medium border border-white/10 hover:bg-slate-900/80 transition-colors">See our work</a>
        </motion.div>
      </div>
    </section>
  )
}
