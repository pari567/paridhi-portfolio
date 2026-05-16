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
    <section id="contact" style={{ backgroundColor: '#faf8f5' }}>

      {/* Section header */}
      <div className="px-8 md:px-14 lg:px-20 pt-20 pb-0">
        <div className="flex items-baseline gap-5 pb-4">
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#b0a898' }}>05</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 7vw, 80px)',
              letterSpacing: '0.04em',
              lineHeight: 1,
              color: '#1a1814',
            }}
          >
            Contact
          </h2>
        </div>
        <div style={{ borderTop: '1px solid #d4ccc0' }} />
      </div>

      {/* Two-column body */}
      <div className="px-8 md:px-14 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.05,
              color: '#1a1814',
              margin: 0,
            }}
          >
            Let's talk.
          </h3>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#888',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
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
              >
                {label}
              </a>
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
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#c9b99a',
              margin: 0,
            }}
          >
            Open To
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {openTo.map((item, i) => (
              <div
                key={item}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  color: '#444',
                  padding: '12px 0',
                  borderTop: i === 0 ? '1px solid #e8e3db' : 'none',
                  borderBottom: '1px solid #e8e3db',
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #e8e3db', paddingTop: '10px' }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              fontStyle: 'italic',
              color: '#b0a898',
              margin: 0,
            }}>
              Eligible to work in Canada (PGWP)
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer strip */}
      <div style={{ borderTop: '1px solid #d4ccc0' }}>
        <div
          className="px-8 md:px-14 lg:px-20 py-5"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#b0a898' }}>
            Paridhi Bansal © 2026
          </span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#b0a898' }}>
            Built with React, Vite, and Claude
          </span>
        </div>
      </div>

    </section>
  )
}
