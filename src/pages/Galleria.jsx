export default function Galleria() {
  const images = Array.from({ length: 12 }).map((_, i) => `https://images.unsplash.com/photo-155${i}0${i}0-8a1c1bcee3a5?q=80&w=1200&auto=format&fit=crop`)
  return (
    <main className="bg-black min-h-screen text-white pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold">Galleria</h1>
        <p className="text-zinc-400 mt-2">Uno sguardo alle nostre notti.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((src, idx) => (
            <img key={idx} src={src} alt="Club" className="rounded-lg aspect-square object-cover hover:scale-[1.02] transition" />
          ))}
        </div>
      </div>
    </main>
  )
}
