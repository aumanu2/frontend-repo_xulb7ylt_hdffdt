export default function Contatti() {
  return (
    <main className="bg-black min-h-screen text-white pt-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Contatti</h1>
        <p className="text-zinc-400 mt-2">Scrivici per prenotazioni, eventi privati o collaborazioni.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <div className="text-zinc-300">Email</div>
            <a className="text-pink-400" href="mailto:info@24milabaci.club">info@24milabaci.club</a>
            <div className="text-zinc-300 mt-6">Telefono</div>
            <a className="text-pink-400" href="tel:+39020000000">+39 02 0000 000</a>
            <div className="text-zinc-300 mt-6">Indirizzo</div>
            <div>Via della Notte 24, Milano</div>
          </div>
          <div>
            <iframe
              title="mappa"
              className="w-full h-72 rounded-lg border border-white/10"
              src="https://www.google.com/maps?q=Duomo+di+Milano&output=embed"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
