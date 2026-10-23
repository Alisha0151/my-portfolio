import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/portfolio'

export default function Nav() {
  const [active, setActive] = useState(''); const [open, setOpen] = useState(false); const [solid, setSolid] = useState(false)
  const { scrollYProgress } = useScroll(); const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el) })
    const s = () => setSolid(window.scrollY > 20); s(); window.addEventListener('scroll', s, { passive: true })
    return () => { io.disconnect(); window.removeEventListener('scroll', s) }
  }, [])
  return (<>
    <motion.div style={{ scaleX }} className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-blue via-violet to-cyan" />
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid ? 'border-b border-line bg-ink/80 backdrop-blur-md' : ''}`}>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="name-glow font-mono text-sm font-bold tracking-widest">AF<span className="text-blue">.</span></a>
        <ul className="hidden gap-1 md:flex">{nav.map(id => (
          <li key={id}><a href={`#${id}`} className={`relative rounded-full px-4 py-2 text-sm capitalize transition ${active === id ? 'text-white' : 'text-mute hover:text-white'}`}>
            {active === id && <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full border border-line bg-panel" />}{id}</a></li>))}</ul>
        <button className="rounded-full border border-line p-2.5 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </nav>
      {open && <motion.ul initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="mx-4 mb-3 grid gap-1 rounded-2xl border border-line bg-panel p-3 md:hidden">
        {nav.map(id => <li key={id}><a onClick={() => setOpen(false)} href={`#${id}`} className="block rounded-xl px-4 py-3 capitalize hover:bg-ink">{id}</a></li>)}</motion.ul>}
    </header></>)
}
