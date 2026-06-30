import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  return (
    <footer className="relative" style={{ borderTop: '1px solid var(--border2)' }}>
      {/* Thin gold accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-48 opacity-60"
        style={{ background: 'linear-gradient(90deg, transparent, var(--primary), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 group"
            aria-label="Back to top"
          >
            <div className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
              style={{ background: 'var(--primary)', color: '#0C0C0E' }}>
              M
            </div>
            <span className="font-syne font-semibold text-sm" style={{ color: 'var(--ink)' }}>
              Ali Hassan
            </span>
          </button>

          {/* Copyright */}
          <p className="text-xs order-last sm:order-none" style={{ color: 'var(--muted2)' }}>
            © {year} Muhammad Ali Hassan · Built with ☕
          </p>

          {/* Socials + back to top */}
          <div className="flex items-center gap-2">
            {[
              { icon: Github,   href: 'https://github.com/syntralogic',                           label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-ali-hassan-816a95385/', label: 'LinkedIn' },
              { icon: Mail,     href: 'mailto:aleehassan2293@gmail.com',                            label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 card rounded-lg flex items-center justify-center"
                style={{ color: 'var(--muted)' }}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={13} />
              </motion.a>
            ))}

            <motion.button
              onClick={scrollTop}
              aria-label="Back to top"
              className="w-8 h-8 rounded-lg flex items-center justify-center ml-1 btn-primary"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={13} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
