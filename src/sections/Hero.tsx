import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Magnetic } from '../components/Interactive'
import { links } from '../data/portfolio'

const ease = [0.2, 0.8, 0.2, 1] as const
const Word = ({ t, d, cls = '' }: { t: string; d: number; cls?: string }) => (
  <span className="block overflow-hidden pb-[.08em]"><motion.span className={`block ${cls}`} initial={{ y: '112%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: d, ease }}>{t}</motion.span></span>)
const fade = (d: number) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } })

export default function Hero() {
  const { scrollY } = useScroll(); const y = useTransform(scrollY, [0, 700], [0, -60]); const y2 = useTransform(scrollY, [0, 700], [0, 90])
  return (
    <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-24 pt-28 sm:px-8 lg:grid-cols-12">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -right-24 top-16 -z-10 h-[28rem] w-[28rem] rounded-full bg-violet/25 blur-[130px]" />
      <div className="relative z-20 lg:col-span-6">
        <motion.p {...fade(1)} className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-1.5 font-mono text-xs text-mute"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />Available immediately · open to relocation</motion.p>
        <div className="pointer-events-none absolute -inset-x-8 top-16 -z-10 h-64 rounded-full bg-gradient-to-r from-blue/15 via-violet/15 to-cyan/10 blur-3xl" aria-hidden />
        <h1 className="mt-7 text-[clamp(3.6rem,12vw,9.5rem)] font-extrabold leading-[.88] tracking-tighter name-glow"><Word t="Alisha" d={1.1} cls="name-edge text-white" /><Word t="Fatima" d={1.25} cls="bg-gradient-to-r from-blue via-violet to-cyan bg-clip-text text-transparent name-edge" /></h1>
        <motion.p {...fade(1.5)} className="mt-6 flex items-center gap-3 font-mono text-base text-cyan sm:text-lg"><span className="h-px w-10 bg-cyan" />Aspiring Software Engineer</motion.p>
        <motion.p {...fade(1.6)} className="mt-5 max-w-xl text-lg leading-relaxed text-mute">I build full-stack and backend applications with Java, Spring Boot, React and Node.js, test them thoroughly, and design with security in mind. Strong in data structures, problem-solving and reliable systems.</motion.p>
        <motion.div {...fade(1.7)} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic><a className="btn btn-p" href="#projects">View Projects <ArrowDown size={16} /></a></Magnetic>
          <Magnetic><a className="btn" href={links.resume} download="Alisha_Fatima_Resume.pdf"><Download size={16} />Download Resume</a></Magnetic>
          <Magnetic><a className="btn" href="#contact"><Mail size={16} />Contact Me</a></Magnetic></motion.div>
        <motion.div {...fade(1.8)} className="mt-6 flex gap-3">{[[Github, links.github, 'GitHub'], [Linkedin, links.linkedin, 'LinkedIn']].map(([I, h, l]) => { const Icon = I as typeof Github
          return <a key={l as string} href={h as string} target="_blank" rel="noopener noreferrer" aria-label={`${l} (opens in a new tab)`} className="rounded-full border border-line p-3 text-mute transition hover:-translate-y-0.5 hover:border-blue hover:text-white"><Icon size={18} /></a> })}</motion.div>
      </div>
      <motion.div style={{ y }} className="relative z-10 justify-self-center lg:col-span-6 lg:-ml-6">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 1.2, ease }} className="relative h-[19rem] w-[19rem] sm:h-[27rem] sm:w-[27rem] lg:h-[31rem] lg:w-[31rem]">
          {/* decorative layers sit BEHIND the portrait (negative z-index) and never overlap the photo */}
          <div className="absolute -inset-10 -z-10 rounded-full bg-blue/15 blur-3xl" />
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full border border-dashed border-blue/30" style={{ animation: 'orbit 40s linear infinite' }}><span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan shadow-[0_0_14px_#36d4e6]" /></div>
          <div className="ring relative h-full w-full rounded-full p-1"><img src="/images/alisha-profile.jpg" alt="Portrait of Alisha Fatima" width={760} height={912} className="h-full w-full rounded-full border-[5px] border-ink object-cover object-[50%_22%]" /></div>
        </motion.div></motion.div>
      <motion.a href="#skills" aria-label="Scroll to skills" {...fade(2.1)} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[.3em] text-mute sm:flex">Scroll<span className="relative h-10 w-px overflow-hidden bg-line"><motion.span className="absolute inset-x-0 h-4 bg-cyan" animate={{ y: [-16, 40] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} /></span></motion.a>
    </section>)
}
