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
    <div style={{ userSelect: 'none' }}>
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
            width: '300px',
            backgroundColor: '#f0ebe0',
            padding: '12px 12px 16px 12px',
            boxShadow: '0 16px 56px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.2)',
            borderRadius: '2px',
            cursor: 'grab',
            touchAction: 'none',
          }}
        >
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
    <section id="hero">
      <style>{`
        #hero { display: flex; min-height: 100vh; }
        .hero-left {
          flex: 0 0 55%;
          background: #f0ebe0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 56px;
        }
        .hero-right {
          flex: 0 0 45%;
          background: #2c1f14;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        @media (max-width: 768px) {
          #hero { flex-direction: column-reverse; }
          .hero-right { flex: none; height: 40vh; }
          .hero-left { flex: 1; padding: 48px 32px; }
          .hero-polaroid-wrap { transform: scale(0.78); transform-origin: center center; }
        }
      `}</style>

      {/* Left cream column — text */}
      <div className="hero-left">

        <motion.div {...fade(0.1)} style={{ marginBottom: '28px' }}>
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(64px, 9vw, 120px)',
            lineHeight: 0.9,
            color: '#1a1814',
            letterSpacing: '0.02em',
            display: 'block',
          }}>PARIDHI</div>
          <div style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(60px, 8.5vw, 114px)',
            lineHeight: 0.9,
            color: '#1a1814',
            letterSpacing: '0.02em',
            display: 'block',
            marginTop: '-8px',
          }}>BANSAL</div>
        </motion.div>

        <motion.p {...fade(0.2)} style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
          color: '#b5935a',
          margin: '0 0 8px',
        }}>
          PSYCHOLOGY × DATA SCIENCE
        </motion.p>

        <motion.p {...fade(0.28)} style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#888',
          margin: '0 0 24px',
        }}>
          UX Research · Consumer Insights · People &amp; Culture · Program Coordination
        </motion.p>

        <motion.div {...fade(0.36)} style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '32px' }}>
          {[
            { label: 'Resume ↗', href: 'https://drive.google.com/file/d/1sZZIhCh4s3RCRS8mvQjY3WGeivfomqu2/view?usp=sharing' },
            { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/paridhibansal' },
            { label: 'GitHub ↗', href: 'https://github.com/pari567' },
          ].map(({ label, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#1a1814',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
              onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
            >{label}</a>
          ))}
        </motion.div>

        <motion.p {...fade(0.44)} style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          lineHeight: 1.75,
          color: '#555',
          margin: '0 0 16px',
          maxWidth: '480px',
        }}>
          I have a BA in Psychology and Data Science from UBC, two fields that don't always talk
          to each other, but probably should. I've done everything from running attentional bias
          experiments in the lab to coordinating UX research for an early-stage AI startup to
          analysing user behaviour for a nutrition brand. I'm drawn to roles where the work is
          about understanding people, and where research actually shapes what gets built or decided.
        </motion.p>

        <motion.p {...fade(0.5)} style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          fontStyle: 'italic',
          color: '#888',
          margin: '0 0 20px',
          lineHeight: 1.65,
        }}>
          Originally from New Delhi — now based in Vancouver, asking too many questions and thinking that's a feature, not a bug.
        </motion.p>

        <motion.div {...fade(0.56)}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '9px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#b5935a',
            margin: '0 0 4px',
          }}>Education</p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            color: '#555',
            margin: 0,
          }}>BA, Psychology + Data Science · University of British Columbia · 2026</p>
        </motion.div>

      </div>

      {/* Right dark column — polaroid */}
      <div className="hero-right">
        <div className="hero-polaroid-wrap">
          <PolaroidCard />
        </div>
      </div>

    </section>
  )
}
