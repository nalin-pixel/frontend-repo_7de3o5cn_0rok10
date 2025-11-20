import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

import googleSheets from '/tool-icons/google-sheets.svg'
import zoom from '/tool-icons/zoom.svg'
import openai from '/tool-icons/openai.svg'
import stripe from '/tool-icons/stripe.svg'
import twilio from '/tool-icons/twilio.svg'

gsap.registerPlugin(ScrollTrigger)

const tools = [
  { src: googleSheets, name: 'Google Sheets' },
  { src: zoom, name: 'Zoom' },
  { src: openai, name: 'OpenAI' },
  { src: stripe, name: 'Stripe' },
  { src: twilio, name: 'Twilio' },
]

export default function ToolFusion() {
  const container = useRef(null)
  const iconsRef = useRef([])
  const crmRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start icons scattered
      iconsRef.current.forEach((el, i) => {
        const angle = (i / tools.length) * Math.PI * 2
        const radius = 180 + Math.random() * 100
        gsap.set(el, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          rotate: gsap.utils.random(-20, 20),
          opacity: 0.8,
          scale: 1,
        })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          end: '+=1200',
          scrub: 1.2,
          pin: false,
        },
      })

      // Phase 1: float and jitter
      tl.to(
        iconsRef.current,
        {
          duration: 1,
          x: (i) => `+=${gsap.utils.random(-60, 60)}`,
          y: (i) => `+=${gsap.utils.random(-60, 60)}`,
          ease: 'sine.inOut',
          stagger: 0.05,
        },
        0
      )

      // Phase 2: converge towards center
      tl.to(
        iconsRef.current,
        {
          duration: 2,
          x: 0,
          y: 0,
          rotate: 0,
          scale: 0.9,
          opacity: 1,
          ease: 'power2.out',
          stagger: 0.05,
        },
        '>-0.2'
      )

      // Phase 3: morph into CRM card
      tl.to(
        iconsRef.current,
        {
          duration: 1.2,
          scale: 0.2,
          opacity: 0,
          filter: 'blur(6px)',
          ease: 'power3.inOut',
          stagger: 0.03,
        },
        '>-0.1'
      )

      tl.fromTo(
        crmRef.current,
        { opacity: 0, y: 60, scale: 0.96, filter: 'blur(10px)' },
        { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.4, ease: 'power3.out' },
        '>-0.6'
      )
    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section id="services" ref={container} className="relative bg-slate-950 text-white py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Custom Integrations that click</h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">We orchestrate your stack – communications, billing, AI and data – into one smooth CRM tailored to your workflow.</p>
        </div>

        <div className="relative flex items-center justify-center h-[540px]">
          {/* scattered icons */}
          <div className="absolute inset-0 flex items-center justify-center">
            {tools.map((t, i) => (
              <div
                key={t.name}
                ref={(el) => (iconsRef.current[i] = el)}
                className="absolute w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.15)]"
              >
                <img src={t.src} alt={t.name} className="w-10 h-10 md:w-12 md:h-12 object-contain" />
              </div>
            ))}
          </div>

          {/* CRM card result */}
          <div ref={crmRef} className="relative w-full max-w-3xl mx-auto opacity-0">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="h-3 w-24 rounded bg-white/20" />
                <div className="flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <div className="h-2 w-2 rounded-full bg-rose-400" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 space-y-3">
                  <div className="h-9 rounded bg-white/10" />
                  <div className="h-28 rounded bg-white/10" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-14 rounded bg-white/10" />
                    <div className="h-14 rounded bg-white/10" />
                    <div className="h-14 rounded bg-white/10" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-9 rounded bg-white/10" />
                  <div className="h-40 rounded bg-white/10" />
                  <div className="h-16 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
