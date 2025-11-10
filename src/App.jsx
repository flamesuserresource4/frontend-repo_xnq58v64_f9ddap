import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './Hero'
import Scene from './components/Scene'
import PreOrder from './components/PreOrder'

function App() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: scrollRef })
  const timelineGlow = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.7, 1])

  const handleCta = () => {
    const el = document.getElementById('scene-2000')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={scrollRef} className="min-h-screen w-full bg-black text-white">
      {/* Hero with Spline animation */}
      <Hero onCtaClick={handleCta} />

      {/* Timeline indicator */}
      <motion.div
        style={{ opacity: timelineGlow }}
        className="sticky top-4 z-50 mx-auto mt-6 flex w-full max-w-7xl items-center justify-center px-6"
      >
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
          <span className="text-amber-300/80">2000</span>
          <span className="h-px w-24 bg-gradient-to-r from-amber-400/40 via-zinc-500/40 to-zinc-500/20" />
          <span className="text-zinc-300/80">2025</span>
          <span className="h-px w-24 bg-gradient-to-r from-zinc-500/20 via-zinc-500/40 to-white/40" />
          <span className="text-zinc-100">2050</span>
        </div>
      </motion.div>

      {/* Scroll scenes */}
      <Scene
        id="scene-2000"
        index={0}
        title="2000 – The Roots"
        subtitle="Warm desert oud, carved by wind and time"
        notes={["Top: Saffron, Date Nectar", "Heart: Oud, Sandalwood", "Base: Amber Resins"]}
        tone="past"
      />

      <Scene
        id="scene-2025"
        index={1}
        title="2025 – The Alchemy Lab"
        subtitle="Liquid gold swirls; ideas crystallize"
        notes={["Top: Bergamot Spark", "Heart: Orris, Labdanum", "Base: White Musk, Vanilla Absolute"]}
        tone="present"
      />

      <Scene
        id="scene-2050"
        index={2}
        title="2050 – The Beyond"
        subtitle="A quiet, silver horizon; time glides forward"
        notes={["Top: Cold Citrus", "Heart: ISO-E Aura", "Base: Clean Amber, Silver Woods"]}
        tone="future"
      />

      {/* Pre-order portal */}
      <PreOrder />
    </div>
  )
}

export default App
