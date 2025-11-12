import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md transition-colors ${
          isActive ? 'bg-pink-500/20 text-pink-300' : 'text-zinc-200 hover:text-white hover:bg-white/5'
        }`
      }
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-black tracking-wider text-xl text-white">
          <span className="text-pink-500">24</span> MILA <span className="text-purple-400">BACI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {navItem('/', 'Home')}
          {navItem('/eventi', 'Eventi')}
          {navItem('/biglietti', 'Biglietti')}
          {navItem('/galleria', 'Galleria')}
          {navItem('/contatti', 'Contatti')}
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-black/70 border-t border-white/10">
          {navItem('/', 'Home')}
          {navItem('/eventi', 'Eventi')}
          {navItem('/biglietti', 'Biglietti')}
          {navItem('/galleria', 'Galleria')}
          {navItem('/contatti', 'Contatti')}
        </div>
      )}
    </header>
  )
}
