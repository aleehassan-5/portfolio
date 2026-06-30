// Hero — editorial introduction with real photo and typed roles
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

// ── Real photo (base64 placeholder — replace src with actual img import or URL)
// Using the uploaded photo as external URL. In production, move to src/assets/
const PHOTO_URL = '/src/assets/ali-hassan.jpg'

const STATS = [
  { value: 20, suffix: '+', label: 'Projects' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 2,  suffix: '+', label: 'Years' },
]

const SOCIALS = [
  { icon: Github,   href: 'https://github.com/syntralogic',                       label: 'GitHub (syntralogic)' },
  { icon: Github,   href: 'https://github.com/aleehassan-5',                      label: 'GitHub (aleehassan-5)' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-ali-hassan-816a95385/', label: 'LinkedIn' },
  { icon: Mail,     href: 'mailto:aleehassan2293@gmail.com',                       label: 'Email' },
]

const container = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function PhotoFrame() {
  return (
    <div className="relative flex items-center justify-center w-full h-full select-none">
      {/* Background accent shape */}
      <div
        className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl"
        style={{ background: 'var(--primary)', opacity: 0.06, transform: 'rotate(6deg)' }}
      />
      <div
        className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl"
        style={{ background: 'var(--primary)', opacity: 0.04, transform: 'rotate(12deg)' }}
      />

      {/* Photo container */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden"
        style={{ border: '1px solid var(--border)', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
      >
        <img
          src={PHOTO_URL}
          alt="Muhammad Ali Hassan"
          className="w-full h-full object-cover object-top"
          loading="eager"
          onError={(e) => {
            // Fallback: elegant initials avatar
            e.target.style.display = 'none'
            e.target.parentElement.style.background = 'linear-gradient(135deg, #1a1810, #2a2215)'
            const div = document.createElement('div')
            div.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:Syne,sans-serif;font-size:5rem;font-weight:700;color:#C9A96E;opacity:0.8'
            div.textContent = 'MA'
            e.target.parentElement.appendChild(div)
          }}
        />
        {/* Photo overlay gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(12,12,14,0.4) 0%, transparent 50%)' }}
        />
        {/* Available badge */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
          style={{ background: 'rgba(12,12,14,0.85)', border: '1px solid rgba(255,255,255,0.1)', color: '#EDEAE3', backdropFilter: 'blur(12px)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </div>
      </motion.div>

      {/* Floating skill tags */}
      {[
        { label: 'React',     pos: { left: '-5%',  top: '15%' } },
        { label: 'Python',    pos: { right: '-5%', top: '20%' } },
        { label: 'Security',  pos: { left: '-8%',  bottom: '22%' } },
        { label: 'Node.js',   pos: { right: '-5%', bottom: '28%' } },
      ].map(({ label, pos }, i) => (
        <motion.div
          key={label}
          className="absolute hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-custom font-medium"
          style={{ ...pos, background: 'var(--card)', border: '1px solid var(--border2)', color: 'var(--muted)', backdropFilter: 'blur(10px)' }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary)' }} />
          {label}
        </motion.div>
      ))}
    </div>
  )
}

export default function Hero() {
  const typedRef = useRef(null)
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer.', 'Frontend Engineer.', 'Cybersecurity Enthusiast.', 'Problem Solver.'],
      typeSpeed: 50,
      backSpeed: 28,
      loop: true,
      backDelay: 2400,
      cursorChar: '|',
    })
    return () => typed.destroy()
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center py-14 lg:min-h-[calc(100vh-80px)]">

          {/* Left — editorial text */}
          <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col items-start">

            {/* Status pill */}
            <motion.div variants={item} className="mb-8">
              <span className="section-label">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name — editorial large */}
            <motion.div variants={item} className="mb-3">
              <p className="text-sm font-medium tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
                Muhammad Ali Hassan
              </p>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6"
              style={{ color: 'var(--ink)' }}
            >
              Building the
              <br />
              <span style={{ color: 'var(--primary)' }}>digital future,</span>
              <br />
              one line at a time.
            </motion.h1>

            {/* Typed role */}
            <motion.div variants={item} className="flex items-center gap-2 mb-6 h-7">
              <span className="text-sm" style={{ color: 'var(--muted)' }}>→</span>
              <span
                ref={typedRef}
                className="font-mono-custom text-sm font-medium"
                style={{ color: 'var(--primary)' }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: 'var(--muted)' }}
            >
              I craft modern, high-performance web applications and responsive interfaces —
              blending clean frontend engineering with solid full-stack architecture and
              a sharp eye for cybersecurity.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary text-sm font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-ghost text-sm font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-2">
              {SOCIALS.slice(0,3).map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 card rounded-lg flex items-center justify-center"
                  style={{ color: 'var(--muted)' }}
                  whileHover={{ scale: 1.08, color: 'var(--primary)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
              <span className="text-xs ml-1" style={{ color: 'var(--muted2)' }}>
                aleehassan2293@gmail.com
              </span>
            </motion.div>
          </motion.div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-80 sm:h-[420px] lg:h-[520px] flex items-center justify-center"
          >
            <PhotoFrame />
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 24 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap sm:flex-nowrap gap-0 pb-20"
          style={{ borderTop: '1px solid var(--border2)' }}
        >
          {STATS.map(({ value, suffix, label }, i) => (
            <div
              key={label}
              className="flex-1 flex flex-col items-center py-8 px-4"
              style={{ borderRight: i < STATS.length - 1 ? '1px solid var(--border2)' : 'none' }}
            >
              <div className="stat-number text-3xl sm:text-4xl mb-1">
                {statsInView ? <CountUp end={value} duration={2.2} suffix={suffix} /> : `0${suffix}`}
              </div>
              <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: 'var(--muted2)' }}>Scroll</span>
        <ArrowDown size={12} color="var(--muted2)" />
      </motion.div>
    </section>
  )
}
