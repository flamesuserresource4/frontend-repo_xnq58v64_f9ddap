import React from 'react'
import { motion } from 'framer-motion'

const Field = ({ label, type = 'text', placeholder }) => (
  <label className="block">
    <span className="text-sm text-zinc-300">{label}</span>
    <input
      type={type}
      placeholder={placeholder}
      className="mt-2 w-full rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-1 ring-white/10 transition focus:border-amber-400/40 focus:ring-amber-400/30"
      required
    />
  </label>
)

const PreOrder = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,0,0.08),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-light tracking-wide md:text-4xl"
        >
          Reserve Your Signature
        </motion.h3>
        <p className="mt-2 text-center text-sm text-zinc-400">A limited release from the Founder’s vault.</p>

        <form className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="Full Name" placeholder="Your name" />
          <Field label="Email" type="email" placeholder="you@example.com" />
          <Field label="Phone" type="tel" placeholder="+971 ..." />
          <Field label="Country" placeholder="United Arab Emirates" />

          <div className="md:col-span-2">
            <label className="block">
              <span className="text-sm text-zinc-300">Message</span>
              <textarea className="mt-2 h-28 w-full resize-none rounded-lg border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none ring-1 ring-white/10 transition focus:border-amber-400/40 focus:ring-amber-400/30" placeholder="Notes or preferences" />
            </label>
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="w-full rounded-full border border-amber-300/30 bg-gradient-to-b from-zinc-900 to-black px-8 py-3 text-sm font-medium tracking-wider text-amber-200 ring-1 ring-white/5 transition hover:border-amber-300/60 hover:text-amber-100 hover:ring-amber-300/30">
              Pre-Order Now
            </button>
          </div>
        </form>
      </div>

      {/* Signature footer */}
      <div className="relative z-10 mt-16 flex items-center justify-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
        <div className="mx-4 text-xs tracking-widest text-amber-300/80">Ahmed Al Maghribi</div>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

export default PreOrder
