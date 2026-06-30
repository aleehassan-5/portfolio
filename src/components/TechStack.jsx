// TechStack marquee — scrolling tech logos strip
import React from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiPython, SiTailwindcss, SiMongodb,
  SiGit, SiLinux, SiVite, SiExpress, SiJavascript, SiHtml5, SiGithub
} from 'react-icons/si'

const TECHS = [
  { Icon: SiReact,       label: 'React',      color: '#61DAFB' },
  { Icon: SiNodedotjs,   label: 'Node.js',    color: '#68A063' },
  { Icon: SiPython,      label: 'Python',     color: '#3776AB' },
  { Icon: SiJavascript,  label: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiTailwindcss, label: 'Tailwind',   color: '#06B6D4' },
  { Icon: SiMongodb,     label: 'MongoDB',    color: '#47A248' },
  { Icon: SiExpress,     label: 'Express',    color: '#FFFFFF' },
  { Icon: SiVite,        label: 'Vite',       color: '#646CFF' },
  { Icon: SiGit,         label: 'Git',        color: '#F05032' },
  { Icon: SiLinux,       label: 'Linux',      color: '#FCC624' },
  { Icon: SiHtml5,       label: 'HTML5',      color: '#E34F26' },
  { Icon: SiGithub,      label: 'GitHub',     color: '#FFFFFF' },
]

const doubled = [...TECHS, ...TECHS]

export default function TechStack() {
  return (
    <section className="py-16 overflow-hidden" style={{ borderTop: '1px solid var(--border2)', borderBottom: '1px solid var(--border2)' }}>
      <div className="flex overflow-hidden">
        <div className="marquee-track">
          {doubled.map(({ Icon, label, color }, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 mx-8 opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-default whitespace-nowrap"
            >
              <Icon size={18} color={color} />
              <span className="font-mono-custom text-sm" style={{ color: 'var(--muted)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
