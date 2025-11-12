import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
        >
          24 MILA BACI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          className="mt-4 text-lg md:text-2xl text-zinc-200 max-w-2xl"
        >
          Futuristic nightlife in the heart of Italia. Neon vibes, top DJs, and immersive experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
          className="mt-8 flex gap-4"
        >
          <a href="/eventi" className="px-6 py-3 rounded-md bg-pink-600 hover:bg-pink-500 text-white font-semibold shadow-[0_0_20px_rgba(236,72,153,0.5)] transition">Scopri gli eventi</a>
          <a href="/biglietti" className="px-6 py-3 rounded-md bg-purple-600 hover:bg-purple-500 text-white font-semibold transition">Acquista biglietti</a>
        </motion.div>
      </div>
    </section>
  )
}
