import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'

function PolaroidCard() {
  const rawRotation = useMotionValue(6)
  const rotation = useSpring(rawRotation, { stiffness: 150, damping: 15 })

  const isDragging = useRef(false)
  const startX = useRef(0)

  useEffect(() => {
    rawRotation.set(6)
    const entry = animate(rawRotation, 3, { duration: 0.8, ease: 'easeOut' })
    return () => entry.stop()
  }, [])

  const onPointerDown = (e) => {
    isDragging.current = true
    startX.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
    document.body.style.cursor = 'grabbing'
  }

  const onPointerMove = (e) => {
    if (!isDragging.current) return
    const dx = e.clientX - startX.current
    rawRotation.set(Math.max(-25, Math.min(25, dx / 6)))
  }

  const onPointerUp = () => {
    if (!isDragging.current) return
    isDragging.current = false
    document.body.style.cursor = ''
    animate(rawRotation, 3, { type: 'spring', stiffness: 150, damping: 15 })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', userSelect: 'none' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ rotate: rotation, transformOrigin: 'top center' }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          style={{
            position: 'relative',
            width: '340px',
            backgroundColor: '#ffffff',
            padding: '12px 12px 16px 12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
            borderRadius: '2px',
            cursor: 'grab',
            touchAction: 'none',
          }}
        >
          {/* Pin */}
          <div
            style={{
              position: 'absolute',
              top: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #d4a0a0, #8b3a3a)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              zIndex: 2,
            }}
          />
          <img
            src="/photo.jpg"
            alt="Paridhi Bansal"
            draggable={false}
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              filter: 'contrast(1.05) saturate(1.15) brightness(1.05)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Drag hint — symbol only */}
      <span
        style={{
          fontSize: '10px',
          color: '#c9b99a',
          marginTop: '10px',
          userSelect: 'none',
        }}
      >
        ↔
      </span>
    </div>
  )
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ backgroundColor: '#faf8f5', paddingTop: '40px' }}
      className="flex flex-col"
    >
      {/* ── Name bar ── */}
      <motion.div
        {...fade(0.1)}
        style={{ borderTop: '1px solid #e8e3db', borderBottom: '1px solid #e8e3db' }}
      >
        <div
          className="px-8 md:px-14 lg:px-20"
          style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              color: '#b0a898',
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            00
          </span>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(72px, 10vw, 140px)',
              letterSpacing: '0.02em',
              lineHeight: 0.92,
              color: '#1a1814',
              margin: 0,
              flex: 1,
            }}
          >
            PARIDHI BANSAL
          </h1>
        </div>
      </motion.div>

      {/* ── Two-column content ── */}
      <div
        className="px-8 md:px-14 lg:px-20 py-12"
        style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'flex-start',
          borderBottom: '1px solid #d4ccc0',
        }}
      >
        {/* Left column — 55% */}
        <div
          style={{
            flex: '1 1 55%',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* Tagline */}
          <motion.p
            {...fade(0.3)}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              letterSpacing: '0.12em',
              color: '#c9b99a',
              margin: 0,
            }}
          >
            PSYCHOLOGY × DATA SCIENCE
          </motion.p>

          {/* Roles */}
          <motion.p
            {...fade(0.38)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#888',
              margin: 0,
            }}
          >
            UX Research · Consumer Insights · People &amp; Culture · Program Coordination
          </motion.p>

          {/* Links */}
          <motion.div {...fade(0.46)} style={{ display: 'flex', alignItems: 'center' }}>
            {[
              { label: 'Resume ↗', href: 'https://drive.google.com/file/d/1sZZIhCh4s3RCRS8mvQjY3WGeivfomqu2/view?usp=sharing' },
              { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/paridhibansal' },
              { label: 'GitHub ↗', href: 'https://github.com/pari567' },
            ].map(({ label, href }, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                {i > 0 && (
                  <span style={{ width: '1px', height: '12px', backgroundColor: '#c9b99a', display: 'inline-block', margin: '0 24px' }} />
                )}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#1a1814',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                  onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                >
                  {label}
                </a>
              </div>
            ))}
          </motion.div>

          {/* Blurb */}
          <motion.p
            {...fade(0.54)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#444',
              margin: 0,
            }}
          >
            I have a BA in Psychology and Data Science from UBC, two fields that don't always talk
            to each other, but probably should. I've done everything from running attentional bias
            experiments in the lab to coordinating UX research for an early-stage AI startup to
            analysing user behaviour for a nutrition brand. I'm drawn to roles where the work is
            about understanding people, and where research actually shapes what gets built or
            decided.
          </motion.p>

          {/* Personal note */}
          <motion.p
            {...fade(0.6)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontStyle: 'italic',
              color: '#888',
              margin: 0,
              lineHeight: 1.65,
            }}
          >
            Originally from New Delhi — now based in Vancouver, asking too many questions and thinking that's a feature, not a bug.
          </motion.p>

          {/* Education */}
          <motion.div {...fade(0.65)}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#c9b99a',
              marginBottom: '4px',
              marginTop: 0,
            }}>
              Education
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: '#444',
              margin: 0,
            }}>
              BA, Psychology + Data Science · University of British Columbia · 2026
            </p>
          </motion.div>
        </div>

        {/* Right column — 45%, polaroid at top */}
        <div style={{ flex: '1 1 45%', minWidth: 0 }}>
          <PolaroidCard />
        </div>
      </div>

    </section>
  )
}
