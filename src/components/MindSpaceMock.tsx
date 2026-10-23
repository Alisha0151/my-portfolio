import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, BookOpen, Flame, Home, Search, Smile } from 'lucide-react'

const moods = ['Low', 'Okay', 'Good', 'Great']
const entries = ['Walk after class felt calming', 'Exam week planning', 'Started a reading habit', 'Quiet weekend, slow morning']
const nav = [[Home, 'Dashboard'], [Smile, 'Check-in'], [BookOpen, 'Journal'], [Flame, 'Habits'], [BarChart3, 'Insights']] as const

export default function MindSpaceMock() {
  const [mood, setMood] = useState(2); const [q, setQ] = useState('')
  const shown = entries.filter(e => e.toLowerCase().includes(q.toLowerCase()))
  return (<figure className="overflow-hidden rounded-2xl border border-line bg-[#0a0f1d] shadow-[0_30px_80px_-30px_rgba(91,140,255,.35)]">
    <div className="flex items-center gap-1.5 border-b border-line px-4 py-2.5">{[0, 1, 2].map(i => <span key={i} className="h-2.5 w-2.5 rounded-full bg-line" />)}<span className="ml-3 font-mono text-[11px] text-mute">mindspace · sample data</span></div>
    <div className="grid md:grid-cols-[170px_1fr]">
      <ul className="hidden gap-1 border-r border-line p-3 text-sm text-mute md:grid">{nav.map(([I, t], k) => <li key={t} className={`flex items-center gap-2 rounded-lg px-3 py-2 ${k === 0 ? 'bg-blue/10 text-white' : ''}`}><I size={14} />{t}</li>)}</ul>
      <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-2">
        <section className="rounded-xl border border-line p-4"><h4 className="text-sm font-semibold">How are you feeling?</h4>
          <div className="mt-3 grid grid-cols-4 gap-2" role="group" aria-label="Mood check-in">{moods.map((m, k) => <button key={m} onClick={() => setMood(k)} aria-pressed={mood === k} className={`rounded-lg border py-2 text-xs transition ${mood === k ? 'border-blue bg-blue/15 text-white' : 'border-line text-mute hover:border-violet'}`}>{m}</button>)}</div>
          <h4 className="mt-5 text-sm font-semibold">Habit streak</h4><div className="mt-2 flex gap-1.5">{[1, 1, 1, 1, 0, 1, 1].map((f, k) => <motion.i key={k} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ delay: k * 0.07 }} className={`h-6 flex-1 origin-bottom rounded ${f ? 'bg-gradient-to-t from-blue to-cyan' : 'bg-line'}`} />)}</div></section>
        <section className="rounded-xl border border-line p-4"><h4 className="text-sm font-semibold">Journal</h4>
          <label className="mt-3 flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-mute focus-within:border-blue"><Search size={14} /><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search entries" aria-label="Search sample journal entries" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-mute" /></label>
          <ul className="mt-3 space-y-1.5 text-sm text-mute">{shown.length ? shown.map(e => <li key={e} className="rounded-lg bg-ink/60 px-3 py-2">{e}</li>) : <li className="px-1">No matching entries</li>}</ul></section>
        <section className="rounded-xl border border-line p-4 lg:col-span-2"><h4 className="text-sm font-semibold">Insights <span className="font-normal text-mute">· sample week</span></h4>
          <div className="mt-3 flex h-20 items-end gap-2">{[45, 60, 40, 75, 65, 80, 70].map((h, k) => <motion.i key={k} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: k * 0.06 }} className="flex-1 rounded-t bg-gradient-to-t from-violet to-blue" />)}</div></section>
      </div></div>
    <figcaption className="border-t border-line px-4 py-2 text-xs text-mute">Illustrative interface built with React components, not a screenshot of the running app.</figcaption></figure>)
}
