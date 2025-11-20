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
  const laptopRef = useRef(null)
  const lidRef = useRef(null)
  const screenRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Start icons scattered around center
      iconsRef.current.forEach((el, i) => {
        const angle = (i / tools.length) * Math.PI * 2
        const radius = 180 + Math.random() * 120
        gsap.set(el, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          rotate: gsap.utils.random(-25, 25),
          opacity: 0.85,
          scale: 1,
        })
      })

      // Laptop initial state: lid closed
      gsap.set(lidRef.current, {
        rotateX: -110,
        transformOrigin: 'bottom center',
      })
      gsap.set(screenRef.current, { opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%',
          end: '+=1400',
          scrub: 1.2,
          pin: false,
        },
      })

      // Phase 1: subtle float
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

      // Phase 2: icons converge behind the laptop base
      tl.to(
        iconsRef.current,
        {
          duration: 1.8,
          x: 0,
          y: 40,
          rotate: 0,
          scale: 0.9,
          opacity: 1,
          ease: 'power2.out',
          stagger: 0.05,
        },
        '>-0.1'
      )

      // Phase 3: icons compress into the laptop (blur/scale down)
      tl.to(
        iconsRef.current,
        {
          duration: 1.2,
          scale: 0.2,
          opacity: 0,
          filter: 'blur(8px)',
          ease: 'power3.inOut',
          stagger: 0.03,
        },
        '>-0.1'
      )

      // Phase 4: laptop lid opens, then screen content fades in
      tl.to(
        lidRef.current,
        {
          rotateX: 0,
          duration: 1.2,
          ease: 'power3.out',
        },
        '>-0.4'
      )

      tl.to(
        screenRef.current,
        { opacity: 1, duration: 0.8, ease: 'power2.out' },
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

        <div className="relative flex items-center justify-center h-[560px]">
          {/* scattered icons (positioned behind the laptop) */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
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

          {/* Laptop assembly */}
          <div
            ref={laptopRef}
            className="relative z-20"
            style={{ perspective: '1400px' }}
          >
            {/* Lid */}
            <div
              ref={lidRef}
              className="relative mx-auto w-[520px] max-w-[80vw] h-[310px] origin-bottom [transform-style:preserve-3d]"
            >
              {/* Screen frame */}
              <div className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl overflow-hidden">
                {/* Bezel top bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/30" />
                {/* Camera dot */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/40" />
                {/* Screen content */}
                <div ref={screenRef} className="absolute inset-8 rounded-lg">
                  {/* CRM skeleton */}
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="h-3 w-24 rounded bg-white/20" />
                      <div className="flex gap-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />
                        <div className="h-2 w-2 rounded-full bg-amber-400" />
                        <div className="h-2 w-2 rounded-full bg-rose-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-2 space-y-2">
                        <div className="h-8 rounded bg-white/10" />
                        <div className="h-24 rounded bg-white/10" />
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-12 rounded bg-white/10" />
                          <div className="h-12 rounded bg-white/10" />
                          <div className="h-12 rounded bg-white/10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-8 rounded bg-white/10" />
                        <div className="h-32 rounded bg-white/10" />
                        <div className="h-14 rounded bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lid thickness for 3D feel */}
              <div className="absolute inset-0 rounded-xl border border-white/5 bg-black/30 translate-z-[-6px]" />
            </div>

            {/* Base */}
            <div className="relative mx-auto mt-3 w-[580px] max-w-[86vw] h-6">
              <div className="absolute inset-0 rounded-b-2xl bg-gradient-to-b from-slate-300/20 to-slate-50/5 border-x border-b border-white/10" />
              {/* Trackpad hint */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0.5 w-24 h-3 rounded bg-white/10" />
              {/* Glow when powered on */}
              <div className="absolute -inset-x-10 -bottom-8 h-20 blur-2xl bg-emerald-400/0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
