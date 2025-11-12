import { useEffect, useMemo, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Biglietti() {
  const [events, setEvents] = useState([])
  const [selected, setSelected] = useState('')
  const [qty, setQty] = useState(1)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [status, setStatus] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/events`).then(r=>r.json()).then(setEvents)
  }, [])

  const event = useMemo(() => events.find(e => e.id === selected), [events, selected])
  const total = useMemo(() => (event ? (Number(event.price) * qty) : 0), [event, qty])

  const submit = async (e) => {
    e.preventDefault()
    if (!event) return
    setStatus('loading')
    const res = await fetch(`${API}/api/tickets/purchase`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        buyer_name: form.name,
        email: form.email,
        phone: form.phone,
        event_id: event.id,
        quantity: qty,
      })
    })
    const data = await res.json()
    if (res.ok) setStatus({ ok: true, data })
    else setStatus({ ok: false, error: data.detail || 'Errore acquisto' })
  }

  return (
    <main className="bg-black min-h-screen text-white pt-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Acquista Biglietti</h1>
        <p className="text-zinc-400 mt-2">Seleziona un evento e completa l'acquisto.</p>

        <form onSubmit={submit} className="mt-8 grid gap-6">
          <div>
            <label className="block text-sm text-zinc-300 mb-2">Evento</label>
            <select value={selected} onChange={e=>setSelected(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2">
              <option value="">Seleziona…</option>
              {events.map(e => <option key={e.id} value={e.id}>{e.title} – {e.date} – €{e.price}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-zinc-300 mb-2">Nome e cognome</label>
              <input required value={form.name} onChange={e=>setForm(f=>({...f, name: e.target.value}))} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-2">Email</label>
              <input required type="email" value={form.email} onChange={e=>setForm(f=>({...f, email: e.target.value}))} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm text-zinc-300 mb-2">Telefono</label>
              <input value={form.phone} onChange={e=>setForm(f=>({...f, phone: e.target.value}))} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 items-end">
            <div>
              <label className="block text-sm text-zinc-300 mb-2">Quantità</label>
              <input type="number" min={1} value={qty} onChange={e=>setQty(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
            </div>
            <div className="text-right">
              <div className="text-zinc-400 text-sm">Totale</div>
              <div className="text-2xl font-bold text-pink-400">€ {total.toFixed(2)}</div>
            </div>
          </div>

          <button disabled={!event} className="px-6 py-3 rounded-md bg-pink-600 hover:bg-pink-500 disabled:opacity-50">Procedi al pagamento</button>
        </form>

        {status && status.ok && (
          <div className="mt-6 p-4 rounded-md bg-green-500/10 border border-green-500/30">
            <div className="font-semibold">Acquisto completato!</div>
            <div className="text-sm text-zinc-300 mt-1">Hai acquistato {status.data?.event_title} – {qty} biglietti. Totale € {status.data?.total_price?.toFixed(2)}</div>
          </div>
        )}
        {status && !status.ok && (
          <div className="mt-6 p-4 rounded-md bg-red-500/10 border border-red-500/30 text-red-200">
            {status.error}
          </div>
        )}
      </div>
    </main>
  )
}
