import { Phone, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Reveal } from '../animations/variants'
import { links } from '../data/portfolio'

export default function Contact() {
  return <section id="contact" className="mx-auto max-w-6xl px-5 py-28 text-center sm:px-8"><Reveal>
    <p className="eyebrow">Contact</p><h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">Let’s build something <span className="bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent">reliable</span>.</h2>
    <p className="mx-auto mt-5 max-w-xl text-mute">I’m looking for Software Engineer opportunities and am available immediately and open to relocation.</p>
    <a href={`mailto:${links.email}`} className="link mt-6 inline-block text-xl sm:text-3xl">{links.email}</a>
    <p className="mt-3"><a href={`tel:${links.phoneTel}`} className="link text-lg text-mute hover:text-white">{links.phone}</a></p>
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <a className="btn btn-p" href={`mailto:${links.email}`}><Mail size={16} />Email me</a>
      <a className="btn" href={links.resume} download="Alisha_Fatima_Resume.pdf"><Download size={16} />Download Resume</a>
      <a className="btn" href={`tel:${links.phoneTel}`}><Phone size={16} />Call</a>
      <a className="btn" href={links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} />LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
      <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer"><Github size={16} />GitHub<span className="sr-only"> (opens in a new tab)</span></a></div></Reveal></section>
}
