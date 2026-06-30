import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [active,    setActive]    = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    setActive(href)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, menuOpen ? 300 : 0)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background:   scrolled ? 'var(--glass)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border2)' : '1px solid transparent',
          padding:      scrolled ? '12px 0' : '22px 0',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2.5 group"
            aria-label="Muhammad Ali Hassan — home"
          >
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
              style={{ background: 'var(--primary)', color: '#0C0C0E' }}
            >
              M
            </div>
            <span className="font-syne font-semibold text-sm tracking-wide" style={{ color: 'var(--ink)' }}>
              Ali Hassan
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className={`text-sm font-medium transition-colors duration-200 link-underline ${
                  active === href ? 'accent-text' : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              className="hidden md:inline-flex btn-primary text-xs font-semibold px-4 py-2 rounded-lg"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg card"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={16} color="var(--ink)" /> : <Menu size={16} color="var(--ink)" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{  opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-10"
            style={{ background: 'var(--bg)', backdropFilter: 'blur(24px)' }}
          >
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }, i) => (
                <motion.button
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNav(href)}
                  className="text-left text-2xl font-syne font-semibold py-3 border-b"
                  style={{ borderColor: 'var(--border2)', color: active === href ? 'var(--primary)' : 'var(--ink)' }}
                >
                  {label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-8">
              <a
                href="mailto:aleehassan2293@gmail.com"
                className="btn-primary text-sm font-semibold px-6 py-3 rounded-xl inline-flex"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
