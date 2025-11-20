import { motion } from 'framer-motion'

export default function Showcase() {
  const items = [
    { title: 'SaaS Platform', desc: 'Subscriptions, billing, roles, analytics.' },
    { title: 'Internal Tools', desc: 'Dashboards, workflows, automations.' },
    { title: 'AI Assistants', desc: 'Chat, retrieval, fine-tuning, actions.' },
  ]
  return (
    <section id="work" className="relative bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Selected capabilities</h2>
          <p className="text-slate-400 max-w-md hidden md:block">We ship fast without sacrificing polish. From prototype to production and beyond.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur p-6"
            >
              <div className="h-10 w-10 rounded-lg bg-white/10 mb-4" />
              <h3 className="text-xl font-medium">{card.title}</h3>
              <p className="text-slate-400 mt-2">{card.desc}</p>
              <div className="h-40 rounded-xl bg-white/10 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
