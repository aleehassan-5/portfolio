import { useEffect } from 'react'

export function useMouseGlow() {
  useEffect(() => {
    const el = document.createElement('div')
    el.style.cssText = `
      position: fixed;
      width: 320px;
      height: 320px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%);
      pointer-events: none;
      z-index: 1;
      transform: translate(-50%, -50%);
      transition: opacity 0.4s ease;
      opacity: 0;
      will-change: transform;
    `
    document.body.appendChild(el)

    let raf = null
    const onMove = (e) => {
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.left = e.clientX + 'px'
        el.style.top  = e.clientY + 'px'
        el.style.opacity = '1'
      })
    }
    const onLeave = () => { el.style.opacity = '0' }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      el.remove()
    }
  }, [])
}
