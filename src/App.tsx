import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Research from './sections/Research'
import Contact from './sections/Contact'
import VoiceIntro from './components/VoiceIntro'

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => { const t = setTimeout(() => setLoading(false), 900); return () => clearTimeout(t) }, [])
  useEffect(() => { // glowing click ripple
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const h = (e: PointerEvent) => { const d = document.createElement('span'); d.className = 'click-glow'; d.style.left = e.clientX + 'px'; d.style.top = e.clientY + 'px'; document.body.append(d); setTimeout(() => d.remove(), 750) }
    window.addEventListener('pointerdown', h); return () => window.removeEventListener('pointerdown', h) }, [])
  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <motion.div key="intro" exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-[100] grid place-items-center bg-ink" aria-hidden>
        <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="name-glow font-mono text-3xl font-bold tracking-[.3em]">AF<span className="text-blue">.</span></motion.span></motion.div>}</AnimatePresence>
      <div className="mesh fixed inset-0 -z-20" aria-hidden /><Nav /><VoiceIntro />
      <main><Hero /><Skills /><Projects /><Experience /><Research /><Contact /></main>
      <footer className="border-t border-line px-5 py-10 text-center text-sm text-mute">
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span className="font-mono font-bold tracking-widest text-white">AF<span className="text-blue">.</span></span> · © {new Date().getFullYear()} Alisha Fatima</motion.p></footer>
    </MotionConfig>)
}
