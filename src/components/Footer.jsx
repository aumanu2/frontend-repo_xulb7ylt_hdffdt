export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/60">
      <div className="max-w-6xl mx-auto px-4 py-8 text-zinc-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} 24 MILA BACI – Tutti i diritti riservati.</p>
        <p>
          Via della Notte 24, Milano • <a className="text-pink-400 hover:text-pink-300" href="mailto:info@24milabaci.club">info@24milabaci.club</a>
        </p>
      </div>
    </footer>
  )
}
