import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVite,
  SiTailwindcss, SiBootstrap, SiPython, SiC, SiCplusplus,
  SiGit, SiGithub, SiLinux, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiMysql,
} from 'react-icons/si'
import { Network, ShieldCheck, Globe, Database } from 'lucide-react'

const GROUPS = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5',       Icon: SiHtml5,      color: '#E34F26' },
      { name: 'CSS3',        Icon: SiCss,         color: '#1572B6' },
      { name: 'JavaScript',  Icon: SiJavascript,  color: '#F7DF1E' },
      { name: 'TypeScript',  Icon: SiTypescript,  color: '#3178C6' },
      { name: 'React',       Icon: SiReact,       color: '#61DAFB' },
      { name: 'Tailwind',    Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Bootstrap',   Icon: SiBootstrap,   color: '#7952B3' },
      { name: 'Vite',        Icon: SiVite,        color: '#646CFF' },
    ],
  },
  {
    title: 'Backend & DB',
    skills: [
      { name: 'Python',      Icon: SiPython,      color: '#3776AB' },
      { name: 'Node.js',     Icon: SiNodedotjs,   color: '#68A063' },
      { name: 'Express',     Icon: SiExpress,     color: '#FFFFFF' },
      { name: 'MongoDB',     Icon: SiMongodb,     color: '#47A248' },
      { name: 'PostgreSQL',  Icon: SiPostgresql,  color: '#4169E1' },
      { name: 'MySQL',       Icon: SiMysql,       color: '#4479A1' },
      { name: 'REST APIs',   Icon: Globe,         color: '#06B6D4', lucide: true },
    ],
  },
  {
    title: 'Systems & Security',
    skills: [
      { name: 'C',           Icon: SiC,           color: '#A8B9CC' },
      { name: 'C++',         Icon: SiCplusplus,   color: '#00599C' },
      { name: 'Git',         Icon: SiGit,         color: '#F05032' },
      { name: 'GitHub',      Icon: SiGithub,      color: '#FFFFFF' },
      { name: 'Linux',       Icon: SiLinux,       color: '#FCC624' },
      { name: 'Cybersecurity', Icon: ShieldCheck, color: '#C9A96E', lucide: true },
      { name: 'Networking',  Icon: Network,       color: '#F472B6', lucide: true },
    ],
  },
]

function SkillPill({ name, Icon, color, lucide, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-lg cursor-default transition-all duration-200"
      style={{ background: 'var(--card)', border: '1px solid var(--border2)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}40`
        e.currentTarget.style.background = `${color}0A`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border2)'
        e.currentTarget.style.background = 'var(--card)'
      }}
    >
      <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
        {lucide
          ? <Icon size={16} color={color} />
          : <Icon size={16} color={color} />
        }
      </div>
      <span className="text-sm font-medium whitespace-nowrap" style={{ color: 'var(--ink)' }}>{name}</span>
    </motion.div>
  )
}

function SkillGroup({ title, skills, groupIndex, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: groupIndex * 0.12 }}
    >
      <p className="font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--primary)' }}>
        — {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <SkillPill key={skill.name} {...skill} index={i} inView={inView} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-5 block w-fit">Skills</span>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
              Tools I work with<br />
              <span style={{ color: 'var(--primary)' }}>every day.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              A curated set of technologies I've worked with across real projects —
              from pixel-perfect frontends to Python security tooling.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {GROUPS.map((group, i) => (
            <SkillGroup key={group.title} {...group} groupIndex={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
