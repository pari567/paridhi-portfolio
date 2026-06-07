import { motion } from 'framer-motion'

const contactLinks = [
  { label: 'Email ↗',    href: 'mailto:paridhibansal567@gmail.com' },
  { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/paridhibansal' },
  { label: 'Resume ↗',   href: 'https://drive.google.com/file/d/1sZZIhCh4s3RCRS8mvQjY3WGeivfomqu2/view?usp=sharing' },
]

const openTo = [
  'UX Research',
  'Consumer Insights',
  'People & Culture',
  'Program Coordination',
  'Research Assistant roles',
  'Banking & Financial Services',
]

export default function Contact() {
  return (
    <section id="contact" style={{
      backgroundColor: '#f0ebe0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Ghost number */}
      <div style={{
        position: 'absolute',
        top: '60px',
        left: '60px',
        fontFamily: "'Oswald', sans-serif",
        fontSize: '180px',
        fontWeight: 700,
        color: 'rgba(26,24,20,0.06)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '-0.02em',
        zIndex: 0,
      }}>05</div>

      {/* Main content — grows to fill space, footer stays pinned */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="px-8 md:px-14 lg:px-20">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', paddingTop: '140px', marginBottom: '48px' }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#b5935a',
            }}>05</span>
            <h2 style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(48px, 7vw, 80px)',
              letterSpacing: '0.02em',
              lineHeight: 1,
              color: '#1a1814',
              margin: 0,
            }}>CONTACT</h2>
          </div>
        </div>

        {/* Two-column body */}
        <div
          className="px-8 md:px-14 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16"
          style={{ paddingBottom: '80px' }}
        >
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: '#1a1814',
              margin: 0,
            }}>Let's talk.</h3>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#888',
              lineHeight: 1.7,
              margin: 0,
            }}>
              I'm currently open to full-time roles, internships, and research collaborations in Vancouver.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#1a1814',
                    textDecoration: 'none',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                  onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                >{label}</a>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#b5935a',
              margin: 0,
            }}>Open To</p>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {openTo.map((item) => (
                <div key={item} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  color: '#444',
                  padding: '10px 0',
                }}>{item}</div>
              ))}
            </div>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontStyle: 'italic',
              color: '#888',
              margin: 0,
            }}>Eligible to work in Canada (PGWP)</p>
          </motion.div>
        </div>

      </div>

      {/* Dark footer strip — pinned to bottom */}
      <div style={{
        backgroundColor: '#2c1f14',
        padding: '24px 80px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          color: 'rgba(240,235,224,0.5)',
          letterSpacing: '0.08em',
        }}>Paridhi Bansal © 2026</span>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          color: 'rgba(240,235,224,0.3)',
          letterSpacing: '0.08em',
        }}>Built with React, Vite, and Claude</span>
      </div>

    </section>
  )
}
