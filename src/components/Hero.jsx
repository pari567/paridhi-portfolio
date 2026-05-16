import { motion } from 'framer-motion'
import { WobblyCircle, RoughUnderline, SmallAsterisk, ArrowRight } from './Annotations.jsx'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section id="hero" style={{ backgroundColor: '#faf8f5', position: 'relative' }} className="flex flex-col">

      {/* Decorative asterisk — top right */}
      <div style={{ position: 'absolute', top: '14px', right: '56px', opacity: 0.4, pointerEvents: 'none', zIndex: 1 }}>
        <SmallAsterisk color="#1a1814" size={22} />
      </div>

      {/* Top ruled line */}
      <div style={{ borderTop: '1px solid #d4ccc0' }} />

      {/* Status row */}
      <motion.div
        {...fade(0.1)}
        className="flex items-center justify-between px-8 md:px-14 lg:px-20 py-3"
        style={{ borderBottom: '1px solid #d4ccc0' }}
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: '#c9b99a' }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{ backgroundColor: '#c9b99a' }}
            />
          </span>
          <span className="text-xs tracking-wide" style={{ color: '#6b6459' }}>
            Available · Vancouver, BC · Eligible to work in Canada (PGWP)
          </span>
        </div>
        <span
          className="text-xs tracking-widest font-light"
          style={{ color: '#b0a898', fontFamily: "'DM Sans', sans-serif" }}
        >
          00
        </span>
      </motion.div>

      {/* Name block */}
      <motion.div
        {...fade(0.2)}
        className="px-8 md:px-14 lg:px-20 py-3"
        style={{ borderBottom: '1px solid #d4ccc0', position: 'relative' }}
      >
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(80px, 13vw, 140px)',
            letterSpacing: '0.02em',
            lineHeight: 0.92,
            color: '#1a1814',
          }}
        >
          PARIDHI BANSAL
        </h1>
        {/* Underline beneath "Bansal" */}
        <div style={{ position: 'absolute', bottom: '10px', left: 'clamp(32px, 5.5vw, 80px)', pointerEvents: 'none' }}>
          <RoughUnderline color="#c9b99a" width={280} />
        </div>
      </motion.div>

      {/* Body — two columns */}
      <div className="flex-1 flex" style={{ borderBottom: '1px solid #d4ccc0', position: 'relative' }}>

        {/* Left column */}
        <div
          className="flex-1 flex flex-col gap-6 px-8 md:px-14 lg:px-20 py-10"
          style={{ borderRight: '1px solid #d4ccc0' }}
        >
          {/* Tagline with WobblyCircle overlay */}
          <div style={{ position: 'relative', alignSelf: 'flex-start' }}>
            <motion.p
              {...fade(0.3)}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(18px, 2.5vw, 26px)',
                letterSpacing: '0.12em',
                color: '#c9b99a',
                position: 'relative',
                zIndex: 2,
              }}
            >
              PSYCHOLOGY × DATA SCIENCE
            </motion.p>
            <div style={{ position: 'absolute', top: '-16px', left: '-18px', pointerEvents: 'none', zIndex: 1 }}>
              <WobblyCircle color="#1a1814" size={360} />
            </div>
          </div>

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

        {/* Arrow pointing at the card — sits at vertical midpoint between columns */}
        <div
          className="hidden md:flex items-center"
          style={{
            position: 'absolute',
            left: 'calc(62% - 52px)',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <ArrowRight color="#c9b99a" size={44} />
        </div>

        {/* Right column — placeholder card */}
        <motion.div
          {...fade(0.35)}
          className="hidden md:flex items-center justify-center px-10 lg:px-16 py-10"
          style={{ width: '38%', flexShrink: 0 }}
        >
          <div
            className="w-full flex items-center justify-center"
            style={{
              aspectRatio: '3 / 4',
              border: '1px solid #c9b99a',
              backgroundColor: 'rgba(201,185,154,0.04)',
            }}
          >
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: '#b0a898', fontFamily: "'DM Sans', sans-serif" }}
            >
              photo coming soon
            </span>
          </div>
        </motion.div>
      </div>

      {/* Currently strip */}
      <motion.div
        {...fade(0.65)}
        className="grid grid-cols-3 text-xs"
        style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b6459' }}
      >
        {[
          'BA completed · Psychology + Data Science, UBC May 2026',
          'Building in public · this site and a few other projects',
          'Open to work · UX research, consumer insights, people-focused roles',
        ].map((item, i) => (
          <div
            key={i}
            className="px-8 md:px-14 lg:px-20 py-4 leading-relaxed font-light"
            style={i < 2 ? { borderRight: '1px solid #d4ccc0' } : {}}
          >
            {item}
          </div>
        ))}
      </motion.div>

    </section>
  )
}
