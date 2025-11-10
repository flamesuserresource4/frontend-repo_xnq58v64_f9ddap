import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Scene = ({ id, title, subtitle, tone, notes, index }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  useEffect(() => {
    // No side effects; framer-motion handles transforms
  }, [])

  const palette = {
    past: {
      bg: 'from-[#1a130a] via-[#2a1e10] to-[#0c0906]',
      accent: 'text-amber-200',
    },
    present: {
      bg: 'from-[#0f0a06] via-[#121212] to-[#0a0a0a]',
      accent: 'text-yellow-200',
    },
    future: {
      bg: 'from-[#0b0b0b] via-[#0d0f12] to-[#0a0b0e]',
      accent: 'text-zinc-100',
    },
  }[tone]

  return (
    <section id={id} ref={ref} className={`relative min-h-[120svh] w-full overflow-hidden bg-gradient-to-br ${palette.bg} text-white`}>      
      {/* Particles shimmer */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-10 top-10 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-28 md:grid-cols-2">
        <motion.div style={{ y, opacity }} className="order-2 md:order-1">
          <h2 className="text-3xl font-light tracking-wide md:text-5xl">{title}</h2>
          <p className={`mt-2 text-sm uppercase tracking-[0.3em] ${palette.accent}`}>{subtitle}</p>
          <div className="mt-6 space-y-2 text-zinc-300">
            {notes?.map((n, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-[1px] w-6 bg-amber-400/40" />
                <span>{n}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Placeholder image panel mimicking bottle close-up */}
        <motion.div style={{ opacity }} className="order-1 aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-[1px] md:order-2">
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,128,0.2),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_35%)]" />
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,200,150,0.08)_0deg,rgba(255,255,255,0.08)_120deg,rgba(255,200,150,0.08)_240deg,rgba(255,255,255,0.08)_360deg)] mix-blend-screen" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-52 w-40 rounded-xl bg-gradient-to-b from-amber-300/70 to-amber-800/80 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scene labels at bottom */}
      <div className="pointer-events-none relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 pb-16 text-xs text-zinc-400">
        <span>{index === 0 ? '2000 – The Roots' : index === 1 ? '2025 – The Alchemy Lab' : '2050 – The Beyond'}</span>
        <span>Ahmed Al Maghribi Perfumes</span>
      </div>

      {/* Soft fog */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}

export default Scene
