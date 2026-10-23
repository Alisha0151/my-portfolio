import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { Code2, Cpu, Database, FlaskConical, Layout, Server, ShieldCheck, Wrench } from 'lucide-react'
import { Section, glow } from '../animations/variants'
import { skills, used } from '../data/portfolio'

const icons: Record<string, typeof Code2> = { Code2, Cpu, Server, Layout, Database, Wrench, FlaskConical, ShieldCheck }
const all = [...new Set(skills.flatMap(s => s.items))]
// bento layout on large screens: 3+3, 4+2, 2+2+2, 6 (written out so Tailwind keeps the classes)
const span = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-6']

const Strip = ({ items, rev = false }: { items: string[]; rev?: boolean }) => (
  <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]" aria-hidden>
    <div className="flex w-max gap-3" style={{ animation: `marq ${rev ? 55 : 45}s linear infinite ${rev ? 'reverse' : ''}` }}>
      {[...items, ...items].map((s, k) => <span key={k} className="rounded-full border border-line bg-panel/60 px-4 py-1.5 font-mono text-xs text-mute">{s}</span>)}</div></div>)

const chips = { show: { transition: { staggerChildren: 0.05, delayChildren: 0.25 } } }
const pop = { hidden: { opacity: 0, scale: 0.7, y: 10 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 260, damping: 18 } } }

export default function Skills() {
  return <Section id="skills" eyebrow="Engineering skills" title="What I build with">
    <p className="-mt-6 mb-8 font-mono text-xs text-mute">{skills.length} areas · {all.length} technologies · all from my resume</p>
    <div className="grid gap-3" ><Strip items={all.slice(0, Math.ceil(all.length / 2))} /><Strip items={all.slice(Math.ceil(all.length / 2))} rev /></div>
    <div className="mt-10 grid gap-5 lg:grid-cols-6">{skills.map((g, k) => { const Icon = icons[g.icon]
      return <motion.article key={g.title} initial={{ opacity: 0, y: 36, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.7, delay: (k % 3) * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        whileHover={{ y: -4 }} onPointerMove={glow} style={{ '--d': `${7 + k}s` } as CSSProperties} className={`gcard p-6 ${span[k]}`}>
        <span className="spot" />
        <header className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue to-violet text-white shadow-[0_0_20px_rgba(91,140,255,.55)]"><Icon size={18} /></span>
          <div><h3 className="font-bold leading-tight">{g.title}</h3><p className="font-mono text-[11px] text-cyan">{g.items.length} technologies</p></div></header>
        <p className="mt-3 text-sm leading-relaxed text-mute">{used[g.title]}</p>
        <motion.ul variants={chips} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-4 flex flex-wrap gap-2">
          {g.items.map(s => <motion.li key={s} variants={pop} whileHover={{ scale: 1.07, y: -2 }} className={`rounded-lg border px-3 py-1.5 text-sm transition-shadow ${g.hl.includes(s) ? 'border-blue bg-blue/10 font-semibold text-white shadow-[0_0_16px_rgba(91,140,255,.45)]' : 'border-line bg-ink/60 text-slate-300 hover:border-violet hover:shadow-[0_0_14px_rgba(139,108,240,.4)]'}`}>{s}</motion.li>)}</motion.ul>
      </motion.article> })}</div></Section>
}
