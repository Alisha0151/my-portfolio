import { ArrowUpRight } from 'lucide-react'
import { Section, Reveal, glow } from '../animations/variants'
import { achievements, papers } from '../data/portfolio'

export default function Research() {
  return <Section id="research" eyebrow="Research & recognition" title="Publications and achievements">
    <div className="grid gap-4 md:grid-cols-2">{papers.map((p, k) => <Reveal key={p.title} delay={k * 0.1}><article className="card h-full" onPointerMove={glow}>
      <p className="font-mono text-xs text-cyan">{p.status}</p><h3 className="mt-3 text-lg font-semibold leading-snug">“{p.title}”</h3><p className="mt-3 text-sm text-mute">{p.meta}</p>
      {p.href && <a href={p.href} target="_blank" rel="noopener noreferrer" className="link mt-4 inline-flex items-center gap-1 text-sm text-blue">{p.cta}<ArrowUpRight size={14} /><span className="sr-only">(opens in a new tab)</span></a>}</article></Reveal>)}</div>
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{achievements.map(([t, d], k) => <Reveal key={t} delay={k * 0.08}><div className="card h-full"><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-mute">{d}</p></div></Reveal>)}</div></Section>
}
