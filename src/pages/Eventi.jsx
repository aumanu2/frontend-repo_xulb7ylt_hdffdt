import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Eventi() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${API}/api/events`)
      .then(r => r.json())
      .then(data => setEvents(data))
      .finally(() => setLoading(false))
  }, [])

  return (
    <main className="bg-black min-h-screen text-white pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">Eventi</h1>
        <p className="text-zinc-400 mt-2">Scopri tutti gli eventi in programma.</p>

        {loading ? (
          <p className="mt-8 text-zinc-400">Caricamento…</p>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map(ev => (
              <article key={ev.id} className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
                <div className="h-44 bg-gradient-to-br from-pink-600/30 to-purple-600/30">
                  {ev.image && <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />}
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{ev.title}</h3>
                  <p className="text-zinc-400 text-sm">{ev.date} • {ev.dj}</p>
                  <p className="text-pink-400 font-semibold mt-2">€ {ev.price}</p>
                </div>
              </article>
            ))}
            {events.length === 0 && (
              <div className="col-span-full text-zinc-400">Nessun evento al momento.</div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
