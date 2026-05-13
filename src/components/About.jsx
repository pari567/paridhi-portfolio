import { motion } from 'framer-motion'

const stats = [
  { number: '3+', label: 'Years researching' },
  { number: '5+', label: 'Projects shipped' },
  { number: '20+', label: 'Research participants' },
]

const skills = [
  'Python', 'R', 'SPSS', 'Qualtrics',
  'Framer Motion', 'React', 'Survey Design', 'Usability Testing',
]

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut', delay },
})

const s = {
  section: {
    padding: '80px 32px',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 80,
    alignItems: 'center',
  },

  // Left column
  eyebrow: {
    fontSize: 11,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: '#ff6b35',
    fontFamily: 'DM Sans, sans-serif',
    marginBottom: 16,
    display: 'block',
  },
  heading: {
    fontFamily: 'Fraunces, serif',
    fontWeight: 900,
    fontSize: 56,
    color: '#1a1a2e',
    lineHeight: 1.1,
    margin: 0,
  },
  accentLine: {
    width: 2,
    height: 48,
    background: '#ff6b35',
    margin: '24px 0',
  },
  statsRow: {
    display: 'flex',
    gap: 24,
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  statNumber: {
    fontFamily: 'Fraunces, serif',
    fontWeight: 700,
    fontSize: 36,
    color: '#ff6b35',
    lineHeight: 1,
  },
  statLabel: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 12,
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  // Right column
  card: {
    background: '#ffffff',
    border: '1px solid #e8e4de',
    borderRadius: 16,
    padding: 32,
  },
  para: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 15,
    color: '#1a1a2e',
    lineHeight: 1.8,
    margin: 0,
  },
  paraSpaced: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 15,
    color: '#1a1a2e',
    lineHeight: 1.8,
    margin: '20px 0 0',
  },
  pillsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 16,
  },
  pill: {
    border: '1px solid #e8e4de',
    borderRadius: 100,
    padding: '6px 14px',
    fontSize: 12,
    color: '#6b7280',
    backgroundColor: '#fafaf7',
    fontFamily: 'DM Sans, sans-serif',
  },
}

export default function About() {
  return (
    <section id="about" style={s.section}>
      <div style={s.inner}>

        {/* Left column */}
        <motion.div {...inView(0)}>
          <span style={s.eyebrow}>About</span>
          <h2 style={s.heading}>
            I study people.<br />I build things.
          </h2>
          <div style={s.accentLine} />
          <div style={s.statsRow}>
            {stats.map((stat) => (
              <div key={stat.number} style={s.statBox}>
                <span style={s.statNumber}>{stat.number}</span>
                <span style={s.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column */}
        <motion.div {...inView(0.2)}>
          <div style={s.card}>
            <p style={s.para}>
              I'm a UBC Psychology and Data Science graduate with a background in behavioural
              research and quantitative analysis. I care about understanding why people do what
              they do — and building tools that make that understanding useful.
            </p>
            <p style={s.paraSpaced}>
              From running attentional bias experiments to auditing ML models for fairness,
              I bring the same rigour to research as I do to building. Currently vibe coding
              my way through new projects.
            </p>
          </div>
          <div style={s.pillsRow}>
            {skills.map((skill) => (
              <span key={skill} style={s.pill}>{skill}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
