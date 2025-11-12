import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Admin() {
  const [events, setEvents] = useState([])
  const [form, setForm] = useState({ title: '', date: '', dj: '', price: '', description: '', image: '' })
  const [token, setToken] = useState('')

  const load = () => fetch(`${API}/api/events`).then(r=>r.json()).then(setEvents)
  useEffect(() => { load() }, [])

  const submit = async (e) => {
    e.preventDefault()
    const res = await fetch(`${API}/api/admin/events?token=${encodeURIComponent(token)}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        ...form, price: Number(form.price)
      })
    })
    if (res.ok) { setForm({ title: '', date: '', dj: '', price: '', description: '', image: '' }); load() }
  }

  const remove = async (id) => {
    await fetch(`${API}/api/admin/events/${id}?token=${encodeURIComponent(token)}`, { method: 'DELETE' })
    load()
  }

  return (
    <main className="bg-black min-h-screen text-white pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">Admin Eventi</h1>
        <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
          <label className="text-sm text-zinc-300">Token</label>
          <input value={token} onChange={e=>setToken(e.target.value)} className="block w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 mt-1" />
        </div>

        <form onSubmit={submit} className="mt-6 grid md:grid-cols-2 gap-4">
          {['title','date','dj','price','image'].map(key => (
            <div key={key}>
              <label className="block text-sm text-zinc-300 mb-1">{key.toUpperCase()}</label>
              <input value={form[key]} onChange={e=>setForm(f=>({...f,[key]: e.target.value}))} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" />
            </div>
          ))}
          <div className="md:col-span-2">
            <label className="block text-sm text-zinc-300 mb-1">DESCRIZIONE</label>
            <textarea value={form.description} onChange={e=>setForm(f=>({...f,description: e.target.value}))} className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2" rows={3} />
          </div>
          <div className="md:col-span-2 text-right">
            <button className="px-6 py-3 rounded-md bg-pink-600 hover:bg-pink-500">Aggiungi evento</button>
          </div>
        </form>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(ev => (
            <div key={ev.id} className="rounded-xl overflow-hidden bg-white/5 border border-white/10">
              <div className="h-40 bg-gradient-to-br from-pink-600/30 to-purple-600/30">
                {ev.image && <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />}
              </div>
              <div className="p-4">
                <div className="font-semibold">{ev.title}</div>
                <div className="text-zinc-400 text-sm">{ev.date} • {ev.dj}</div>
                <div className="text-pink-400 font-semibold">€ {ev.price}</div>
                <button onClick={() => remove(ev.id)} className="mt-3 text-sm text-red-300 hover:text-red-200">Elimina</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
