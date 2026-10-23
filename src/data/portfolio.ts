export const links = {
  email: 'alisha001593@gmail.com', phone: '+91 9369944065', phoneTel: '+919369944065', github: 'https://github.com/Alisha0151',
  linkedin: 'https://linkedin.com/in/alisha-fatima-767665348', resume: '/resume/Alisha_Fatima_Resume.pdf',
}
export const nav = ['skills', 'projects', 'experience', 'research', 'contact']
export const stages = [
  ['Observe', 'Collect logs, traces and metrics from the Orders, Inventory and Payments demo services.'],
  ['Detect', 'Identify abnormal error rate or latency.'],
  ['Trace', 'Follow requests across the three services.'],
  ['Reconstruct', 'Rebuild event and state history through time-travel debugging.'],
  ['Analyze', 'AI-assisted root-cause analysis over logs, traces and metrics.'],
  ['Replay', 'Replay the reconstructed events to confirm the cause.'],
  ['Recover', 'Apply recovery only after a human approval gate.'],
  ['Verify', 'Check error rate, latency and service health after recovery.'],
]
export const faults = ['Faulty deployment', 'Payment latency spike', 'Missing database index']
export const skills = [
  { title: 'Languages', icon: 'Code2', hl: ['Java'], items: ['Java', 'SQL', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'] },
  { title: 'Core CS', icon: 'Cpu', hl: ['Data Structures & Algorithms', 'OOP'], items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks', 'SDLC', 'Debugging'] },
  { title: 'Backend & APIs', icon: 'Server', hl: ['Spring Boot', 'REST APIs'], items: ['Spring Boot', 'REST APIs', 'Node.js', 'Express.js', 'FastAPI', 'JWT', 'WebSockets', 'Microservices'] },
  { title: 'Frontend', icon: 'Layout', hl: [], items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'Databases', icon: 'Database', hl: [], items: ['PostgreSQL', 'MongoDB', 'Mongoose', 'Redis'] },
  { title: 'Tools', icon: 'Wrench', hl: [], items: ['Git/GitHub', 'Docker', 'GitHub Actions', 'OpenTelemetry'] },
  { title: 'Testing', icon: 'FlaskConical', hl: [], items: ['Unit & Integration Testing', 'JUnit', 'Testcontainers', 'Playwright', 'Vitest'] },
  { title: 'Security', icon: 'ShieldCheck', hl: [], items: ['Secure Coding', 'End-to-End Encryption', 'Post-Quantum Cryptography', 'Vulnerability Assessment', 'Kali Linux', 'Wireshark', 'Autopsy'] },
]
export const experience = [
  { when: 'May 2026 – Jul 2026', place: 'Gurugram', role: 'Data Analyst Intern', org: 'Tech Speed Appliances Innovative Electricals Pvt. Ltd.',
    points: ['Supported data analysis and market research tasks during a 7-week internship (Internship Completion Certificate).'] },
  { when: 'May 2025 – Jun 2025', place: 'Remote', role: 'Cyber Security Intern', org: 'Threat Prism (via 1stop.ai)',
    points: ['Developed and submitted an Information Gathering Tool as the internship project (Certificate of Project Completion, July 2025).', 'Performed security testing of Android applications to identify vulnerabilities, and carried out digital forensic analysis using Autopsy.'] },
]
export const papers = [
  { status: 'Published · IEEE', title: 'PQ-SecureMsg: A Post-Quantum Cryptography Based Messaging Framework for Web and Mobile',
    meta: 'A. Fatima · 2025 EmergIN Conference, Greater Noida · pp. 614–619', href: 'https://doi.org/10.1109/EmergIN67762.2025.11450807', cta: 'DOI 10.1109/EmergIN67762.2025.11450807' },
  { status: 'Presented · proceedings publication pending', title: 'Quantum-Resilient Healthcare Systems: Secure Medical Image Transmission Using Quantum Key Distribution and Post-Quantum Cryptography',
    meta: 'A. Fatima et al. · NETCRYPT 2026 (4th IEEE International Conference on Networks and Cryptology), JNU, New Delhi, 8–10 Oct 2026' },
]
export const achievements = [
  ['EY Techathon 6.0', 'Qualified for Round 2 of a national-level hackathon with an AI-based automated auditor idea for small-business tax audits and compliance checks.'],
  ['Ascend 2026', 'Participant · SSCBS, University of Delhi.'],
  ['Adobe University Hackathon 2026', 'Participant.'],
  ['FACS Certificate', 'Fundamentals of Advanced Cyber Security · Center for Cyber Security and Cryptology, Sharda University (Jan 2025).'],
]
export const used: Record<string, string> = {
  'Languages': 'Java is my primary language; JavaScript and TypeScript run through the full-stack projects.',
  'Core CS': 'Fundamentals behind my backend work: DSA, OOP, DBMS, operating systems and networks.',
  'Backend & APIs': 'Spring Boot in MindSpace, Node/Express in the chat app, FastAPI in Kairox.',
  'Frontend': 'React in MindSpace and the chat app, Next.js in Kairox, Tailwind CSS in MindSpace.',
  'Databases': 'PostgreSQL in Kairox and MindSpace, Redis in Kairox, MongoDB in the chat app.',
  'Tools': 'Docker and GitHub Actions in Kairox and MindSpace, OpenTelemetry in Kairox.',
  'Testing': 'Testcontainers and Playwright in MindSpace; unit and end-to-end tests in Kairox.',
  'Security': 'Kyber and Dilithium in the chat app and IEEE paper; Autopsy during the Threat Prism internship.',
}
