import Hero from '../components/Hero'

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Hero />
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Prossimi Eventi</h2>
        <p className="text-zinc-300 mt-2">Scopri cosa succede questa settimana a 24 MILA BACI.</p>
        <div id="upcoming" className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cards will be shown on Eventi page; here we keep it simple */}
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="h-40 rounded-lg bg-gradient-to-tr from-pink-600/40 to-purple-600/40 mb-4" />
            <h3 className="font-semibold">Neon Fever</h3>
            <p className="text-zinc-400 text-sm">Venerdì • DJ Aurora • €25</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="h-40 rounded-lg bg-gradient-to-tr from-pink-600/40 to-purple-600/40 mb-4" />
            <h3 className="font-semibold">Hologram Nights</h3>
            <p className="text-zinc-400 text-sm">Sabato • DJ Nova • €30</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="h-40 rounded-lg bg-gradient-to-tr from-pink-600/40 to-purple-600/40 mb-4" />
            <h3 className="font-semibold">Retro Future</h3>
            <p className="text-zinc-400 text-sm">Domenica • DJ Vega • €20</p>
          </div>
        </div>
      </section>
    </main>
  )
}
