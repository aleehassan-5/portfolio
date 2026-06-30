import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TRAITS = ['Clean Architecture', 'Security-Aware', 'Detail-Oriented', 'Fast Delivery', 'Always Learning']

const WHAT_I_DO = [
  {
    number: '01',
    title: 'Frontend Engineering',
    desc: 'Crafting pixel-perfect, responsive interfaces with React and modern CSS. Every interaction is intentional, every animation purposeful.',
  },
  {
    number: '02',
    title: 'Full Stack Development',
    desc: 'Building complete web applications with Node.js backends, REST APIs, and databases — architected for scale from day one.',
  },
  {
    number: '03',
    title: 'Cybersecurity Tools',
    desc: 'Developing Python-powered security utilities: network scanners, port analysers, OSINT tools, and reconnaissance scripts.',
  },
  {
    number: '04',
    title: 'Python Automation',
    desc: 'Turning complex, repetitive workflows into elegant automated pipelines. From scripts to full automation systems.',
  },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label mb-5 block w-fit">About</span>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1]" style={{ color: 'var(--ink)' }}>
              Passion for craft,<br />
              <span style={{ color: 'var(--primary)' }}>precision in every line.</span>
            </h2>
            <div>
              <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
                I'm a <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Full Stack Developer</strong> and{' '}
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Cybersecurity Enthusiast</strong> who thrives
                at the intersection of design and engineering. I specialise in building modern web applications that
                are both visually refined and technically sound.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
                Beyond the frontend, I build backend systems, REST APIs, and Python-powered automation and
                cybersecurity utilities — from pixel-perfect landing pages to network reconnaissance tools,
                built with care and precision every time.
              </p>
              <div className="flex flex-wrap gap-2">
                {TRAITS.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* What I do — numbered grid */}
        <div className="grid sm:grid-cols-2 gap-px" style={{ background: 'var(--border2)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border2)' }}>
          {WHAT_I_DO.map(({ number, title, desc }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group p-8 transition-colors duration-300 cursor-default"
              style={{ background: 'var(--bg)' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg)' }}
            >
              <p className="font-mono-custom text-xs mb-4 transition-colors duration-200"
                style={{ color: 'var(--primary)', opacity: 0.7 }}>
                {number}
              </p>
              <h3 className="font-syne font-semibold text-lg mb-3 transition-colors duration-200"
                style={{ color: 'var(--ink)' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Code snippet — about section signature */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 card p-6 font-mono-custom text-sm leading-loose overflow-x-auto"
        >
          <div className="flex gap-1.5 mb-5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
          </div>
          <div className="space-y-0.5 text-xs sm:text-sm">
            <p><span style={{ color: 'var(--primary)' }}>const</span> <span style={{ color: '#A8D8EA' }}>developer</span> <span style={{ color: 'var(--muted)' }}>=</span> {'{'}</p>
            <p className="pl-5"><span style={{ color: '#B5EAD7' }}>name</span><span style={{ color: 'var(--muted)' }}>:</span> <span style={{ color: '#FFD700' }}>'Muhammad Ali Hassan'</span><span style={{ color: 'var(--muted)' }}>,</span></p>
            <p className="pl-5"><span style={{ color: '#B5EAD7' }}>role</span><span style={{ color: 'var(--muted)' }}>:</span> <span style={{ color: '#FFD700' }}>'Full Stack Developer &amp; Security Enthusiast'</span><span style={{ color: 'var(--muted)' }}>,</span></p>
            <p className="pl-5"><span style={{ color: '#B5EAD7' }}>location</span><span style={{ color: 'var(--muted)' }}>:</span> <span style={{ color: '#FFD700' }}>'Pakistan 🇵🇰'</span><span style={{ color: 'var(--muted)' }}>,</span></p>
            <p className="pl-5"><span style={{ color: '#B5EAD7' }}>stack</span><span style={{ color: 'var(--muted)' }}>:</span> [<span style={{ color: '#FFD700' }}>'React'</span><span style={{ color: 'var(--muted)' }}>,</span> <span style={{ color: '#FFD700' }}>'Node.js'</span><span style={{ color: 'var(--muted)' }}>,</span> <span style={{ color: '#FFD700' }}>'Python'</span>]<span style={{ color: 'var(--muted)' }}>,</span></p>
            <p className="pl-5"><span style={{ color: '#B5EAD7' }}>available</span><span style={{ color: 'var(--muted)' }}>:</span> <span style={{ color: '#C9A96E' }}>true</span><span style={{ color: 'var(--muted)' }}>,</span></p>
            <p className="pl-5"><span style={{ color: '#B5EAD7' }}>email</span><span style={{ color: 'var(--muted)' }}>:</span> <span style={{ color: '#FFD700' }}>'aleehassan2293@gmail.com'</span></p>
            <p>{'}'}<span style={{ color: 'var(--muted)' }}>;</span></p>
            <motion.p
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              style={{ color: 'var(--primary)' }}
            >
              █
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
