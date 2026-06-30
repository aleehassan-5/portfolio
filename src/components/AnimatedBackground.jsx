import React from 'react'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Base bg */}
      <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Warm amber blob — top right */}
      <div
        className="blob absolute -top-48 -right-48 w-[600px] h-[600px] opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.22) 0%, transparent 65%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Warm glow — bottom left */}
      <div
        className="blob blob-2 absolute -bottom-32 -left-32 w-[500px] h-[500px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.18) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Dark vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(12,12,14,0.6) 100%)' }}
      />
    </div>
  )
}
