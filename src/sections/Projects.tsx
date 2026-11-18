import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, KeyRound, Lock, PenLine, ShieldCheck, User } from 'lucide-react'
import { Reveal, Section, glow } from '../animations/variants'
import { Tilt } from '../components/Interactive'
import MindSpaceMock from '../components/MindSpaceMock'
import { faults, stages } from '../data/portfolio'

const Head = ({ n, title, sub, stack, href }: { n: string; title: string; sub: string; stack: string[]; href: string }) => (
  <div><p className="font-mono text-xs text-blue">{n}</p><h3 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h3><p className="mt-1 text-mute">{sub}</p>
    <div className="mt-4 flex flex-wrap gap-1.5">{stack.map(s => <span key={s} className="chip">{s}</span>)}</div>
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn mt-5">{<Github size={16} />}GitHub repository<ArrowUpRight size={14} /><span className="sr-only">(opens in a new tab)</span></a></div>)

function Paywell() {
  const spend: [string, number][] = [['Food', 62], ['Travel', 38], ['Bills', 80], ['Fun', 24]]
  const rows = ['Groceries', 'Wallet top-up', 'Transfer to friend']
  const flow: [string, string][] = [['Flutter app', 'Dart · 10+ screens'], ['REST API', 'Java 21 · Spring Boot'], ['Data layer', 'PostgreSQL · Redis'], ['Fraud service', 'Python · FastAPI']]
  const facts: [string, string][] = [['10+', 'mobile screens'], ['15+', 'REST API endpoints'], ['10+', 'database entities']]
  return (<div className="card grid gap-10 border-cyan/30 lg:grid-cols-[1.1fr_.9fr]" onPointerMove={glow}>
    <div><p className="font-mono text-xs text-cyan">01 · FINTECH · IN PROGRESS</p><h3 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">PAYWELL</h3><p className="mt-1 text-mute">Fintech Mobile Application</p>
      <p className="mt-4 inline-flex rounded-full border border-cyan/40 px-3 py-1 font-mono text-xs text-cyan">Founder &amp; Full-Stack Developer · Nov 2026 – Present</p>
      <div className="mt-4 flex flex-wrap gap-1.5">{['Flutter', 'Dart', 'Java 21', 'Spring Boot', 'PostgreSQL', 'Redis', 'Python', 'FastAPI', 'Docker', 'REST APIs'].map(s => <span key={s} className="chip">{s}</span>)}</div>
      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-mute"><li>Building a cross-platform fintech app with Flutter, Dart, Java 21 and Spring Boot.</li><li>REST APIs for user authentication, wallet management, simulated payments and transaction tracking.</li><li>Money Radar: smart budgeting, spending insights and financial activity monitoring.</li><li>PostgreSQL architecture designed for transaction integrity, idempotency and audit logging.</li><li>Python FastAPI-based fraud detection service integrated into a scalable backend architecture.</li></ul>
      <div className="mt-6 grid grid-cols-3 gap-2">{facts.map(([a, b]) => <div key={b} className="rounded-xl border border-line bg-ink/60 p-3"><div className="text-xl font-bold text-cyan">{a}</div><div className="text-xs text-mute">{b}</div></div>)}</div></div>
    <div><div className="mx-auto w-60 rounded-[2.2rem] border border-line bg-[#080c18] p-3 shadow-[0_0_60px_-15px_rgba(54,212,230,.5)]"><div className="rounded-[1.7rem] bg-ink p-4">
      <div className="flex items-center gap-2 text-sm font-semibold"><Wallet size={16} className="text-cyan" />Money Radar</div>
      <div className="mt-4 flex h-24 items-end gap-2">{spend.map(([l, h], k) => <div key={l} className="flex h-full flex-1 flex-col items-center justify-end gap-1"><motion.i initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: k * 0.1 }} className="w-full rounded-t bg-gradient-to-t from-blue to-cyan" /><span className="text-[10px] text-mute">{l}</span></div>)}</div>
      <p className="mt-4 text-[10px] uppercase tracking-widest text-mute">Recent activity</p>
      <ul className="mt-2 space-y-1.5 text-xs">{rows.map((r, k) => <motion.li key={r} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + k * 0.12 }} className="rounded-lg border border-line px-2.5 py-2 text-slate-300">{r}</motion.li>)}</ul>
      <p className="mt-3 flex items-center gap-1.5 text-[10px] text-cyan"><ShieldCheck size={12} />Fraud-check service</p></div></div>
      <ol className="mt-6 grid grid-cols-2 gap-2">{flow.map(([t, d], k) => <motion.li key={t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.12 }} className="rounded-xl border border-line bg-ink/60 p-3"><span className="font-mono text-[10px] text-cyan">0{k + 1}</span><b className="block text-sm">{t}</b><span className="text-xs text-mute">{d}</span></motion.li>)}</ol>
      <p className="mt-3 text-xs text-mute">Illustrative interface and architecture with sample data, not a screenshot.</p></div></div>)
}

function Kairox() {
  const [i, setI] = useState(0); const [play, setPlay] = useState(false)
  useEffect(() => { if (!play) return; const t = setInterval(() => setI(v => (v + 1) % 8), 1700); return () => clearInterval(t) }, [play])
  return (<div className="card grid gap-8 lg:grid-cols-[1fr_1.15fr]" onPointerMove={glow}>
    <div><Head n="01 · RELIABILITY PLATFORM" title="Kairox" sub="Causal Time-Travel Debugging & Recovery Platform" href="https://github.com/Alisha0151/kairox"
      stack={['Next.js', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSockets', 'OpenTelemetry', 'Docker', 'GitHub Actions']} />
      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-mute"><li>Multi-service incident recovery over 3 demo microservices: Orders, Inventory, Payments.</li><li>Event and state reconstruction with AI-assisted root-cause analysis over logs, traces and metrics.</li><li>Human approval gate before recovery, then post-recovery verification of error rate, latency and service health.</li><li>Validated by 18 unit tests and an end-to-end test covering traffic generation, fault injection, replay, recovery and verification.</li></ul></div>
    <div><div className="flex items-center justify-between"><p className="font-mono text-xs text-mute">8-STAGE WORKFLOW · select a stage</p><button onClick={() => setPlay(!play)} className="rounded-full border border-line px-3 py-1 font-mono text-xs hover:border-blue">{play ? "Pause" : "Auto-play"}</button></div>
      <div className="mt-3 grid grid-cols-4 gap-2" role="group" aria-label="Kairox workflow stages">{stages.map(([s], k) => (
        <button key={s} onClick={() => setI(k)} aria-pressed={i === k} className={`rounded-xl border px-2 py-3 text-left text-xs transition ${i === k ? 'border-blue bg-blue/10' : 'border-line hover:border-violet'}`}>
          <span className="block font-mono text-[10px] text-mute">0{k + 1}</span>{s}{k < i && <span className="ml-1 text-emerald-400">✓</span>}</button>))}</div>
      <div className="my-4 h-1 rounded bg-line"><motion.div className="relative h-full bg-gradient-to-r from-blue to-cyan" animate={{ width: `${((i + 1) / 8) * 100}%` }}><span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-cyan shadow-[0_0_12px_#36d4e6]" /></motion.div></div>
      <div className="min-h-24 rounded-xl border border-line bg-ink/60 p-4 text-sm" aria-live="polite"><b>{stages[i][0]}.</b> <span className="text-mute">{stages[i][1]}</span></div>
      <p className="mt-4 font-mono text-xs text-mute">3 CONTROLLED FAULT-INJECTION SCENARIOS</p><div className="mt-2 flex flex-wrap gap-2">{faults.map(f => <span key={f} className="chip chip-hl">{f}</span>)}</div>
      <p className="mt-3 text-xs text-mute">Illustrative diagram, not a live system.</p></div></div>)
}

function MindSpace() {
  const ev: [string, string][] = [['24', 'Testcontainers integration tests'], ['63/63', 'domain tests'], ['173/173', 'SQL assertions'], ['3', 'Playwright end-to-end scenarios']]
  return (<div className="card grid gap-8 lg:grid-cols-2" onPointerMove={glow}>
    <div><Head n="02 · FULL-STACK APPLICATION" title="MindSpace" sub="Privacy-First Mental Wellness & Journaling App" href="https://github.com/Alisha0151/MindSpace"
      stack={['Java 21', 'Spring Boot 3', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS', 'Docker', 'GitHub Actions']} />
      <p className="mt-5 text-sm text-mute">10 feature modules including mood check-ins, full-text journal search, habit streaks and insights, exposed through a REST API with Flyway database migrations. Containerized with Docker Compose.</p></div>
    <div><p className="font-mono text-xs text-mute">SECURITY MEASURES</p><ul className="mt-2 grid gap-2 text-sm text-mute sm:grid-cols-2">{['HttpOnly cookie sessions', 'Rotating refresh tokens with reuse detection', 'CSRF protection', 'BCrypt password hashing', 'Rate limiting'].map(s => <li key={s} className="flex gap-2"><Lock size={14} className="mt-1 shrink-0 text-cyan" />{s}</li>)}</ul>
      <p className="mt-5 font-mono text-xs text-mute">TESTING EVIDENCE</p><div className="mt-2 grid grid-cols-2 gap-2">{ev.map(([a, b]) => <div key={b} className="rounded-xl border border-line bg-ink/60 p-3"><div className="text-xl font-bold text-blue">{a}</div><div className="text-xs text-mute">{b}</div></div>)}</div></div><div className="lg:col-span-2"><MindSpaceMock /></div></div>)
}

function Chat() {
  const flow = [[User, 'Sender', 'Composes message'], [KeyRound, 'CRYSTALS-Kyber', 'Key encapsulation: establishes the shared secret'], [PenLine, 'CRYSTALS-Dilithium', 'Digital signature: proves who sent it'], [Lock, 'End-to-end encryption', 'Message data is protected'], [ShieldCheck, 'Receiver', 'Decrypts and verifies']]
  return (<div className="card border-cyan/30 bg-[#08101a]" onPointerMove={glow}>
    <Head n="03 · SECURITY & CRYPTOGRAPHY" title="Post-Quantum Secure Chat Application" sub="Real-time messaging with REST APIs and JWT-based authentication" href="https://github.com/Alisha0151/Post-Quantum-Secure-Chat-app" stack={['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT']} />
    <ol className="mt-6 grid gap-3 md:grid-cols-5">{flow.map(([I, t, d], k) => { const Icon = I as typeof User
      return <motion.li key={t as string} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: k * 0.12 }} className="rounded-xl border border-line bg-ink/60 p-4"><Icon size={18} className="text-cyan" /><b className="mt-2 block text-sm">{t as string}</b><span className="text-xs text-mute">{d as string}</span></motion.li> })}</ol>
    <div className="mt-6 grid gap-3 sm:grid-cols-3">{[['0.45 ms', 'median Kyber encapsulation'], ['0.85 ms', 'Dilithium signing'], ['5–10 ms', 'end-to-end message exchange']].map(([a, b]) => <div key={b} className="rounded-xl border border-cyan/30 p-4"><div className="font-mono text-2xl font-bold text-cyan">{a}</div><div className="text-xs text-mute">{b}</div></div>)}</div>
    <p className="mt-3 text-xs text-mute">Benchmarks reported in the author's IEEE paper. The flow above is an explanatory visual, not a live benchmark.</p></div>)
}

export default function Projects() {
  return <Section id="projects" eyebrow="Selected work" title="Projects"><div className="grid gap-8"><Reveal><Kairox /></Reveal><Reveal><MindSpace /></Reveal><Reveal><Tilt><Chat /></Tilt></Reveal></div></Section>
}
