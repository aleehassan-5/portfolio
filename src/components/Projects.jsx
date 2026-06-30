import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

// ── Real projects based on GitHub profiles and provided info ──
const PROJECTS = [
  {
    id: 1,
    name: 'Synergy Social',
    tagline: 'Full-featured social media platform',
    description:
      'A production-grade social media app with real-time features, authentication, stories, follow systems, and a highly polished UI. Built to match the quality of leading social platforms.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS'],
    links: [
      { label: 'Live Demo', icon: ExternalLink, href: 'https://synergy-social-frontend.vercel.app/', primary: true },
      { label: 'GitHub', icon: Github, href: 'https://github.com/syntralogic', primary: false },
    ],
    featured: true,
    category: 'Full Stack',
  },
  {
    id: 2,
    name: 'Shopire',
    tagline: 'Temu-inspired eCommerce marketplace',
    description:
      'A conversion-optimised marketplace with cart management, wishlists, category filters, and a clean checkout flow. Designed for real purchasing decisions with a strong product UX.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/syntralogic', primary: true },
    ],
    featured: false,
    category: 'Full Stack',
  },
  {
    id: 3,
    name: 'Cyber Toolkit',
    tagline: 'Python cybersecurity utility suite',
    description:
      'A professional-grade CLI toolkit for ethical security research — network sniffing, port scanning, OSINT recon, and host enumeration. Built for security professionals who value clean tooling.',
    tech: ['Python', 'Scapy', 'Socket', 'OSINT', 'CLI', 'Linux'],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/aleehassan-5', primary: true },
    ],
    featured: false,
    category: 'Cybersecurity',
  },
  {
    id: 4,
    name: 'Portfolio v2',
    tagline: 'Premium developer portfolio',
    description:
      'This portfolio — engineered with Framer Motion, Lenis smooth scroll, and a handcrafted design system. Built for performance, accessibility, and a premium editorial feel.',
    tech: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Node.js'],
    links: [
      { label: 'GitHub', icon: Github, href: 'https://github.com/syntralogic', primary: true },
    ],
    featured: false,
    category: 'Frontend',
  },
]

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })
  const { name, tagline, description, tech, links, featured, category } = project

  const onMouseMove = (e) => {
    const el = cardRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width - 0.5) * 10
    const y = ((e.clientY - r.top) / r.height - 0.5) * -10
    el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateZ(4px)`
  }
  const onMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="group card-accent h-full flex flex-col p-7"
        style={{
          background: 'var(--card)',
          transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.25s ease, border-color 0.25s ease',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--card-hover)'; e.currentTarget.style.borderColor = 'var(--border)' }}
        onMouseLeaveCapture={(e) => { e.currentTarget.style.background = 'var(--card)'; e.currentTarget.style.borderColor = 'var(--border2)' }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6">
          <span className="tag">{category}</span>
          {featured && (
            <span className="text-[10px] font-mono-custom font-semibold uppercase tracking-widest px-2.5 py-1 rounded"
              style={{ background: 'rgba(201,169,110,0.12)', color: 'var(--primary)', border: '1px solid rgba(201,169,110,0.2)' }}>
              Featured
            </span>
          )}
        </div>

        {/* Content */}
        <h3 className="font-syne font-bold text-xl mb-1 transition-colors duration-200 group-hover:text-[var(--primary)]"
          style={{ color: 'var(--ink)' }}>
          {name}
        </h3>
        <p className="text-xs font-mono-custom mb-4" style={{ color: 'var(--primary)', opacity: 0.8 }}>{tagline}</p>
        <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--muted)' }}>{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tech.map((t) => (
            <span key={t} className="tag text-[10px]">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {links.map(({ label, icon: Icon, href, primary }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                primary ? 'btn-primary' : 'btn-ghost'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <Icon size={13} />
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="projects" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-5 block w-fit">Work</span>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
              Selected projects<br />
              <span style={{ color: 'var(--primary)' }}>I'm proud of.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              Real-world applications built with care — from social platforms to
              cybersecurity tooling. Quality over quantity.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm mb-4" style={{ color: 'var(--muted)' }}>Want to see more?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://github.com/syntralogic"
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              <Github size={14} /> github/syntralogic
            </a>
            <a
              href="https://github.com/aleehassan-5"
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              <Github size={14} /> github/aleehassan-5
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
