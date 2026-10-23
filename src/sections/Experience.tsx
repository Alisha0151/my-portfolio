import { Section, Reveal } from '../animations/variants'
import { experience } from '../data/portfolio'

export default function Experience() {
  return <Section id="experience" eyebrow="Experience & education" title="Where I’ve worked">
    <ol className="relative ml-2 grid gap-6 border-l border-line pl-8">{experience.map((e, k) => <li key={e.role} className="relative">
      <span className="absolute -left-[39px] top-7 h-3 w-3 rounded-full bg-blue shadow-[0_0_0_4px_rgba(91,140,255,.2)]" />
      <Reveal delay={k * 0.1}><div className="card"><p className="font-mono text-xs text-cyan">{e.when} · {e.place}</p><h3 className="mt-2 text-xl font-semibold">{e.role}</h3><p className="text-mute">{e.org}</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-mute">{e.points.map(p => <li key={p}>{p}</li>)}</ul></div></Reveal></li>)}
      <li className="relative"><span className="absolute -left-[39px] top-7 h-3 w-3 rounded-full bg-violet shadow-[0_0_0_4px_rgba(139,108,240,.2)]" />
        <Reveal delay={0.2}><div className="card"><p className="font-mono text-xs text-cyan">2023 – 2027 · Greater Noida</p><h3 className="mt-2 text-xl font-semibold">B.Tech, Computer Science & Engineering</h3>
          <p className="text-mute">Sharda University · Specialization: Cyber Security & Digital Forensics</p></div></Reveal></li></ol></Section>
}
