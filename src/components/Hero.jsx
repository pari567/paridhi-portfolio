import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, animate } from 'framer-motion'

function PolaroidCard() {
  const rawRotation = useMotionValue(12)
  const rotation = useSpring(rawRotation, { stiffness: 150, damping: 15 })

  const isDragging = useRef(false)
  const startX = useRef(0)

  // Entry only: 12deg → 3deg over 1s easeOut, then still
  useEffect(() => {
    rawRotation.set(12)
    const entry = animate(rawRotation, 3, { duration: 1, ease: 'easeOut' })
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
    <div
      style={{
        width: '380px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          rotate: rotation,
          transformOrigin: 'top center',
        }}
      >
        {/* Attachment circle */}
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#c9b99a', flexShrink: 0 }} />

        {/* String */}
        <div style={{ width: '1.5px', height: '60px', backgroundColor: '#c9b99a', flexShrink: 0 }} />

        {/* Bottom circle where string meets card */}
        <div
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#b0a090',
            flexShrink: 0,
            position: 'relative',
            top: '3px',
            zIndex: 1,
          }}
        />

        {/* Polaroid card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          style={{
            width: '340px',
            backgroundColor: '#ffffff',
            padding: '12px 12px 40px 12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
            borderRadius: '2px',
            cursor: 'grab',
            touchAction: 'none',
          }}
        >
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
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '14px',
              color: '#1a1814',
              textAlign: 'center',
              margin: '8px 0 3px',
            }}
          >
            Paridhi Bansal
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#c9b99a',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Psychology × Data Science
          </p>
        </motion.div>
      </motion.div>

      {/* Label */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '9px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#b0a898',
          marginTop: '14px',
        }}
      >
        ↔ drag me
      </p>
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
      style={{ backgroundColor: '#faf8f5', paddingTop: '80px' }}
      className="flex flex-col"
    >
      {/* Name block */}
      <motion.div
        {...fade(0.2)}
        className="px-8 md:px-14 lg:px-20 py-3"
      >
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(48px, 7vw, 96px)',
            letterSpacing: '0.02em',
            lineHeight: 0.92,
            color: '#1a1814',
          }}
        >
          PARIDHI BANSAL
        </h1>
      </motion.div>

      {/* Body — two columns */}
      <div
        className="flex-1 flex"
        style={{ borderBottom: '1px solid #d4ccc0', gap: '40px' }}
      >
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-6 px-8 md:px-14 lg:px-20 py-10">

          {/* Tagline */}
          <motion.p
            {...fade(0.3)}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              letterSpacing: '0.12em',
              color: '#c9b99a',
            }}
          >
            PSYCHOLOGY × DATA SCIENCE
          </motion.p>

          {/* Roles */}
          <motion.p
            {...fade(0.38)}
            className="text-xs uppercase tracking-widest"
            style={{ color: '#888', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.15em' }}
          >
            UX Research · Consumer Insights · People &amp; Culture · Program Coordination
          </motion.p>

          {/* Links */}
          <motion.div {...fade(0.46)} className="flex items-center">
            {[
              { label: 'Resume ↗', href: 'https://drive.google.com/file/d/1sZZIhCh4s3RCRS8mvQjY3WGeivfomqu2/view?usp=sharing' },
              { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/paridhibansal' },
              { label: 'GitHub ↗', href: 'https://github.com/pari567' },
            ].map(({ label, href }, i) => (
              <div key={i} className="flex items-center">
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
              maxWidth: '42ch',
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
              marginTop: '16px',
              maxWidth: '42ch',
              lineHeight: 1.65,
            }}
          >
            Originally from New Delhi — now based in Vancouver, asking too many questions and thinking that's a feature, not a bug.
          </motion.p>

          {/* Education */}
          <motion.div {...fade(0.65)} style={{ marginTop: '12px' }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#c9b99a',
              marginBottom: '4px',
            }}>
              Education
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: '#444',
            }}>
              BA, Psychology + Data Science · University of British Columbia · 2026
            </p>
          </motion.div>

        </div>

        {/* Right column — no border, card floats freely, tucked up -20px */}
        <motion.div
          {...fade(0.35)}
          className="hidden md:flex items-start justify-center py-10"
          style={{ width: '42%', flexShrink: 0, paddingRight: '40px', marginTop: '-20px' }}
        >
          <PolaroidCard />
        </motion.div>
      </div>

    </section>
  )
}
