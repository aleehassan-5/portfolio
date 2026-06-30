import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Github, Linkedin, Mail, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

// EmailJS config — set these in your .env file (see .env.example)
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const SOCIALS = [
  { icon: Github,   label: 'GitHub (syntralogic)',  href: 'https://github.com/syntralogic',                       sub: 'github.com/syntralogic' },
  { icon: Github,   label: 'GitHub (aleehassan-5)', href: 'https://github.com/aleehassan-5',                      sub: 'github.com/aleehassan-5' },
  { icon: Linkedin, label: 'LinkedIn',               href: 'https://www.linkedin.com/in/muhammad-ali-hassan-816a95385/', sub: 'Muhammad Ali Hassan' },
  { icon: Mail,     label: 'Email',                  href: 'mailto:aleehassan2293@gmail.com',                       sub: 'aleehassan2293@gmail.com' },
]

function Field({ label, id, type = 'text', placeholder, value, onChange, rows }) {
  const Tag = rows ? 'textarea' : 'input'
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
        {label}
      </label>
      <Tag
        id={id} name={id} type={type} placeholder={placeholder}
        value={value} onChange={onChange} rows={rows} required
        className="px-4 py-3 rounded-lg text-sm placeholder:text-[var(--muted2)] outline-none resize-none transition-all duration-200"
        style={{ background: 'var(--card)', border: '1px solid var(--border2)', color: 'var(--ink)' }}
        onFocus={(e)  => { e.target.style.borderColor = 'rgba(201,169,110,0.5)' }}
        onBlur={(e)   => { e.target.style.borderColor = 'var(--border2)' }}
      />
    </div>
  )
}

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })
  const [form, setForm]  = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [errMsg, setErrMsg] = useState('')

  const update = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrMsg('')

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setErrMsg('Email is not configured yet. Add your EmailJS keys to .env')
      setStatus('error')
      return
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      setErrMsg('Could not send message. Please try again or email me directly.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="section-label mb-5 block w-fit">Contact</span>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
              Let's build something<br />
              <span style={{ color: 'var(--primary)' }}>great together.</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              Open to freelance projects, contract work, and full-time opportunities.
              I respond within 24 hours.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="card-accent p-7 sm:p-9" style={{ background: 'var(--card)' }}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-14 text-center gap-4"
                >
                  <CheckCircle size={40} color="var(--primary)" />
                  <h3 className="font-syne font-bold text-xl" style={{ color: 'var(--ink)' }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name"    id="name"    placeholder="Your name"          value={form.name}    onChange={update('name')} />
                    <Field label="Email"   id="email"   type="email" placeholder="your@email.com" value={form.email}   onChange={update('email')} />
                  </div>
                  <Field label="Subject"  id="subject" placeholder="Project inquiry, collaboration..." value={form.subject} onChange={update('subject')} />
                  <Field label="Message"  id="message" placeholder="Tell me about your project..." value={form.message} onChange={update('message')} rows={5} />

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm px-1"
                      style={{ color: '#F87171' }}
                    >
                      {errMsg}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed w-full"
                    whileHover={status !== 'sending' ? { scale: 1.01 } : {}}
                    whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
                  >
                    {status === 'sending' ? (
                      <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} style={{ display: 'inline-block' }}>
                        ⟳
                      </motion.span>
                    ) : (
                      <><Send size={14} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Availability */}
            <div className="card p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-syne font-semibold text-sm" style={{ color: 'var(--ink)' }}>Available for work</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Open to freelance projects, contract work, and full-time positions. Response within 24 hours.
              </p>
              <div className="mt-4 space-y-2 text-xs" style={{ color: 'var(--muted)' }}>
                <p>📍 Pakistan · Remote worldwide</p>
                <p>⚡ Fast delivery, quality guaranteed</p>
                <p>💬 Clear communication throughout</p>
              </div>
            </div>

            {/* Social links */}
            <div className="card p-6">
              <p className="font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: 'var(--primary)' }}>
                — Find me on
              </p>
              <div className="flex flex-col gap-1">
                {SOCIALS.map(({ icon: Icon, label, href, sub }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-3 rounded-lg transition-colors duration-200 group"
                    style={{ color: 'var(--muted)' }}
                    whileHover={{ x: 3 }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--card)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--card)', border: '1px solid var(--border2)' }}>
                      <Icon size={14} color="var(--primary)" />
                    </div>
                    <div>
                      <p className="text-xs font-medium" style={{ color: 'var(--ink)' }}>{label}</p>
                      <p className="text-xs font-mono-custom" style={{ color: 'var(--muted2)' }}>{sub}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
