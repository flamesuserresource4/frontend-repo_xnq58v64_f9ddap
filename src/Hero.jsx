import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const Hero = ({ onCtaClick }) => {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Cinematic vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.8)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-balance text-4xl font-light tracking-wide sm:text-5xl md:text-6xl"
        >
          Three Eras. <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-200 bg-clip-text text-transparent">One Vision.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 text-sm uppercase tracking-[0.3em] text-zinc-300 sm:text-base"
        >
          The Founder’s Signature Collection
        </motion.p>

        <motion.button
          onClick={onCtaClick}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10 rounded-full border border-amber-300/30 bg-gradient-to-b from-zinc-900 to-black px-7 py-3 text-sm font-medium tracking-wider text-amber-200 shadow-[inset_0_0_1px_rgba(255,255,255,0.2)] ring-1 ring-white/5 hover:border-amber-300/60 hover:text-amber-100 hover:ring-amber-300/30"
        >
          Experience the Journey
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-6 sm:flex"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
          <div className="text-xs tracking-widest text-zinc-400">Scroll to Move Through Time</div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
