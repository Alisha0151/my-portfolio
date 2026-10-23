import { motion } from 'framer-motion'
import type { ReactNode, PointerEvent } from 'react'
const ease = [0.2, 0.8, 0.2, 1] as const
export const Reveal = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease }}>{children}</motion.div>)
export const glow = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`)
}
export const Section = ({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
    <Reveal><p className="eyebrow">{eyebrow}</p><h2 className="mt-3 overflow-hidden pb-1 text-4xl font-extrabold tracking-tight sm:text-6xl"><motion.span className="block" initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}>{title}</motion.span></h2>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-blue via-violet to-transparent" /></Reveal>
    <div className="mt-12">{children}</div></section>)
export { motion }
