import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

const script = [
  "Hello, and thank you for listening. I'm Alisha Fatima, an aspiring software engineer.",
  "I'm completing my B.Tech in Computer Science Engineering at Sharda University in Greater Noida, with a specialization in Cyber Security and Digital Forensics, graduating in twenty twenty-seven.",
  "I have strong fundamentals in Java, data structures and algorithms, object-oriented programming and database systems. I build full-stack and backend applications with Spring Boot, REST APIs, React and Node.js, backed by automated unit, integration and end-to-end testing.",
  "My flagship project is Kairox, a causal time-travel debugging and recovery platform. It runs an eight-stage workflow across three demo microservices: observe, detect, trace, reconstruct, analyze, replay, recover and verify, with a human approval gate before recovery. It is validated by eighteen unit tests and an end-to-end test.",
  "MindSpace is a privacy-first journaling and wellness app built with Java twenty-one, Spring Boot three, PostgreSQL and React. It has ten feature modules, secure cookie sessions with rotating refresh tokens, and is verified by twenty-four Testcontainers integration tests, sixty-three of sixty-three domain tests, one hundred seventy-three of one hundred seventy-three SQL assertions, and three Playwright scenarios.",
  "My third project is a post-quantum secure chat application. It uses CRYSTALS-Kyber for key encapsulation and CRYSTALS-Dilithium for digital signatures, with a median Kyber encapsulation time of point four five milliseconds.",
  "That work was published as an IEEE paper at the twenty twenty-five EmergIN conference. I also presented a second paper, on quantum-resilient healthcare systems, at NETCRYPT twenty twenty-six, where proceedings publication is still pending.",
  "For experience, I was a Cyber Security Intern at Threat Prism through 1stop.ai in twenty twenty-five, where I built an information gathering tool and tested Android applications. In twenty twenty-six I was a Data Analyst Intern at Tech Speed Appliances.",
  "I qualified for Round 2 of EY Techathon six point zero, and I participated in Ascend twenty twenty-six and the Adobe University Hackathon.",
  "I'm available immediately, open to relocation, and looking for software engineer opportunities. You can reach me by email at alisha zero zero one five nine three at gmail dot com, or through LinkedIn and GitHub. Thank you!",
]
const MALE = /\b(male|david|mark|daniel|alex|fred|rishi|ravi|prabhat|james|george|thomas|oliver|aaron)\b/i
const FEMALE = /veena|raveena|neerja|kalpana|swara|samantha|karen|moira|tessa|fiona|victoria|allison|ava|susan|zira|heera|hazel|aria|jenny|libby|female/i

function pickVoice() {
  const v = speechSynthesis.getVoices().filter(x => /^en/i.test(x.lang) && !MALE.test(x.name))
  return v.find(x => x.lang === 'en-IN' && FEMALE.test(x.name)) ?? v.find(x => FEMALE.test(x.name)) ?? v.find(x => x.lang === 'en-IN') ?? v[0]
}

export default function VoiceIntro() {
  const [on, setOn] = useState(false); const [idx, setIdx] = useState(0); const stop = useRef(true)
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window
  useEffect(() => { const off = () => speechSynthesis.cancel(); window.addEventListener('pagehide', off); return () => { off(); window.removeEventListener('pagehide', off) } }, [])
  const say = (i: number) => {
    if (stop.current) return
    const u = new SpeechSynthesisUtterance(script[i]); const v = pickVoice()
    if (v) { u.voice = v; u.lang = v.lang } else { u.lang = 'en-IN'; u.pitch = 1.15 }
    u.rate = 0.96; setIdx(i)
    u.onend = () => { if (stop.current) return; if (i + 1 < script.length) say(i + 1); else setOn(false) }
    u.onerror = () => { if (!stop.current) setOn(false) }
    speechSynthesis.speak(u)
  }
  const toggle = () => {
    if (on) { stop.current = true; speechSynthesis.cancel(); setOn(false); return }
    stop.current = false; speechSynthesis.cancel(); setOn(true)
    if (speechSynthesis.getVoices().length) say(0); else { let done = false; const go = () => { if (!done) { done = true; say(0) } }; speechSynthesis.onvoiceschanged = go; setTimeout(go, 600) }
  }
  if (!supported) return null
  return (
    <div className="fixed bottom-5 left-5 z-[70] flex max-w-[calc(100vw-2.5rem)] flex-col items-start gap-2">
      {on && <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} aria-live="polite" className="max-w-sm rounded-xl border border-line bg-panel/95 p-3 text-xs leading-relaxed text-slate-300 shadow-[0_0_30px_-8px_rgba(91,140,255,.6)]">{script[idx]}</motion.p>}
      <button onClick={toggle} aria-pressed={on} aria-label={on ? 'Stop audio introduction' : 'Play audio introduction'}
        className={`inline-flex min-h-12 items-center gap-2.5 rounded-full border bg-panel/95 px-5 text-sm font-semibold backdrop-blur transition ${on ? 'border-cyan shadow-[0_0_28px_rgba(54,212,230,.55)]' : 'border-blue shadow-[0_0_22px_rgba(91,140,255,.45)] hover:shadow-[0_0_34px_rgba(139,108,240,.6)]'}`}>
        {on ? <VolumeX size={18} /> : <Volume2 size={18} />}{on ? 'Stop intro' : 'Hear my intro'}
        {on && <span className="flex h-4 items-end gap-0.5" aria-hidden>{[0, 1, 2, 3].map(k => <motion.i key={k} className="w-0.5 rounded bg-cyan" animate={{ height: ['30%', '100%', '40%'] }} transition={{ duration: 0.8, repeat: Infinity, delay: k * 0.12 }} />)}</span>}
      </button></div>)
}
