import { motion } from 'framer-motion'

const fadeUp = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const s = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '32px',
    width: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, auto)',
    gap: 12,
  },

  // Card 1 — Name
  nameCard: {
    gridColumn: 'span 2',
    background: '#1a1a2e',
    borderRadius: 16,
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 220,
    cursor: 'default',
  },
  nameBadge: {
    color: '#ff6b35',
    fontSize: 11,
    letterSpacing: 3,
    fontFamily: 'DM Sans, sans-serif',
    textTransform: 'uppercase',
  },
  nameHeading: {
    fontFamily: 'Fraunces, serif',
    fontWeight: 900,
    fontSize: 80,
    color: '#ffffff',
    lineHeight: 1,
    margin: '12px 0 0',
  },
  nameBansal: {
    fontStyle: 'italic',
    color: '#ff6b35',
  },
  nameSubtitle: {
    color: '#6b7280',
    fontSize: 12,
    fontFamily: 'DM Sans, sans-serif',
    marginTop: 12,
  },

  // Card 2 — Status
  statusCard: {
    background: '#ff6b35',
    borderRadius: 16,
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    minHeight: 220,
    cursor: 'default',
  },
  statusTitle: {
    fontFamily: 'Fraunces, serif',
    fontStyle: 'italic',
    fontSize: 28,
    color: '#ffffff',
    margin: 0,
  },
  statusList: {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  statusItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#ffffff',
    fontSize: 13,
    fontFamily: 'DM Sans, sans-serif',
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: '50%',
    background: '#ffffff',
    flexShrink: 0,
  },

  // Card 3 — Tagline
  taglineCard: {
    background: '#ffffff',
    border: '1px solid #e8e4de',
    borderRadius: 16,
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 180,
    cursor: 'default',
  },
  taglineQuote: {
    fontFamily: 'Fraunces, serif',
    fontStyle: 'italic',
    fontSize: 20,
    color: '#1a1a2e',
    lineHeight: 1.45,
    margin: 0,
  },
  taglineLabel: {
    color: '#6b7280',
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    marginTop: 16,
  },

  // Card 4 — Built with
  builtCard: {
    background: '#7c3aed',
    borderRadius: 16,
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: 180,
    cursor: 'default',
  },
  builtLabel: {
    color: '#ffffff',
    fontSize: 11,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    opacity: 0.75,
    marginBottom: 14,
  },
  pillsWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-start',
  },
  pill: {
    background: '#ffffff',
    color: '#7c3aed',
    borderRadius: 100,
    padding: '4px 12px',
    fontSize: 11,
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 600,
  },
  builtLink: {
    color: '#ffffff',
    fontSize: 13,
    fontFamily: 'DM Sans, sans-serif',
    textDecoration: 'underline',
    textUnderlineOffset: 3,
    marginTop: 16,
    display: 'inline-block',
  },

  // Card 5 — CTA
  ctaCard: {
    background: '#ffffff',
    border: '2px solid #ff6b35',
    borderRadius: 16,
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    minHeight: 180,
    textAlign: 'center',
    cursor: 'default',
  },
  ctaArrow: {
    fontFamily: 'Fraunces, serif',
    fontSize: 48,
    color: '#ff6b35',
    lineHeight: 1,
  },
  ctaText: {
    fontFamily: 'Fraunces, serif',
    fontStyle: 'italic',
    fontSize: 18,
    color: '#1a1a2e',
    margin: 0,
  },
  ctaButtons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    width: '100%',
  },
  btnPrimary: {
    background: '#ff6b35',
    color: '#ffffff',
    borderRadius: 100,
    padding: '10px 24px',
    fontSize: 13,
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 500,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
  },
  btnOutline: {
    background: 'transparent',
    color: '#ff6b35',
    borderRadius: 100,
    padding: '10px 24px',
    fontSize: 13,
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: 500,
    border: '1.5px solid #ff6b35',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'block',
    textAlign: 'center',
  },
}

// Blob background
function Blob({ style }) {
  return <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none', ...style }} />
}

function PulsingDot() {
  return <span style={s.statusDot} />
}

const cardHover = { scale: 1.01 }
const cardTap = { scale: 0.99 }

export default function Hero() {
  return (
    <section style={s.section}>
      <Blob style={{ width: 400, height: 400, background: '#ff6b35', opacity: 0.06, top: -80, left: -80 }} />
      <Blob style={{ width: 300, height: 300, background: '#7c3aed', opacity: 0.05, bottom: 60, right: -60 }} />
      <Blob style={{ width: 200, height: 200, background: '#34d399', opacity: 0.04, top: '40%', right: '25%' }} />

      <div style={s.container}>
        <div style={s.grid}>

          {/* Card 1 — Name */}
          <motion.div {...fadeUp(0.1)} whileHover={cardHover} whileTap={cardTap} style={s.nameCard}>
            <span style={s.nameBadge}>✦ Open to work · Vancouver, BC</span>
            <div>
              <div style={s.nameHeading}>
                Paridhi <span style={s.nameBansal}>Bansal</span>
              </div>
              <p style={s.nameSubtitle}>Psychology × Data Science &nbsp;·&nbsp; UBC 2026</p>
            </div>
          </motion.div>

          {/* Card 2 — Status */}
          <motion.div {...fadeUp(0.2)} whileHover={cardHover} whileTap={cardTap} style={s.statusCard}>
            <p style={s.statusTitle}>Currently</p>
            <ul style={s.statusList}>
              {['Graduating May 2026', 'PGWP eligible', 'Building: Threads'].map((item) => (
                <li key={item} style={s.statusItem}>
                  <PulsingDot />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3 — Tagline */}
          <motion.div {...fadeUp(0.3)} whileHover={cardHover} whileTap={cardTap} style={s.taglineCard}>
            <p style={s.taglineQuote}>
              "I study how people think. I build tools to understand it."
            </p>
            <span style={s.taglineLabel}>Behavioural Researcher &amp; Builder</span>
          </motion.div>

          {/* Card 4 — Built with */}
          <motion.div {...fadeUp(0.4)} whileHover={cardHover} whileTap={cardTap} style={s.builtCard}>
            <div>
              <p style={s.builtLabel}>Vibe coded with</p>
              <div style={s.pillsWrap}>
                {['React', 'Framer Motion', 'Tailwind'].map((tech) => (
                  <span key={tech} style={s.pill}>{tech}</span>
                ))}
              </div>
            </div>
            <a href="#projects" style={s.builtLink}>↗ See projects</a>
          </motion.div>

          {/* Card 5 — CTA */}
          <motion.div {...fadeUp(0.5)} whileHover={cardHover} whileTap={cardTap} style={s.ctaCard}>
            <span style={s.ctaArrow}>→</span>
            <p style={s.ctaText}>Let's work together</p>
            <div style={s.ctaButtons}>
              <a href="/resume.pdf" style={s.btnPrimary}>Resume ↓</a>
              <a href="https://linkedin.com/in/paridhibansal" target="_blank" rel="noreferrer" style={s.btnOutline}>LinkedIn ↗</a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
