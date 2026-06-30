import React from 'react'
import { useTheme } from '../hooks/useTheme'
import { useMouseGlow } from '../hooks/useMouseGlow'

import AnimatedBackground from '../components/AnimatedBackground'
import Navbar     from '../components/Navbar'
import Hero       from '../components/Hero'
import About      from '../components/About'
import Skills     from '../components/Skills'
import TechStack  from '../components/TechStack'
import Projects   from '../components/Projects'
import Contact    from '../components/Contact'
import Footer     from '../components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  useMouseGlow()

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--bg)', color: 'var(--ink)' }}>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}