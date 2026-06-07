import { motion } from 'framer-motion'

const rows = [
  {
    label: 'Research & Analysis',
    skills: 'SPSS, R, Python, Qualtrics, Excel, Research design, Qualitative & quantitative methods, Survey design, Experimental protocol',
  },
  {
    label: 'Communication & Writing',
    skills: 'Knowledge translation, Stakeholder communication, Content strategy, Report writing, Public-facing communication, Copywriting, Editorial leadership',
  },
  {
    label: 'Creative & Build',
    skills: 'React, Vite, Tailwind CSS, Framer Motion, Vibe coding, Canva, Notion, Miro, Google Suite, Eventbrite',
  },
  {
    label: 'Collaboration & Leadership',
    skills: 'Team leadership, Cross-functional collaboration, Workshop facilitation, Project coordination, Participant management',
  },
]

export default function Skills() {
  const cells = []
  rows.forEach((row, i) => {
    const isFirst = i === 0
    const isLast = i === rows.length - 1
    const ptop = isFirst ? 48 : 16
    const pbot = isLast ? 80 : 16

    cells.push(
      <motion.div
        key={`l${i}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
        style={{
          backgroundColor: '#2c1f14',
          padding: `${ptop}px 40px ${pbot}px 80px`,
          display: 'flex',
          alignItems: 'flex-start',
          borderTop: i > 0 ? '1px solid rgba(240,235,224,0.1)' : 'none',
        }}
      >
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: '#b5935a',
          lineHeight: 1.6,
        }}>{row.label}</span>
      </motion.div>
    )

    cells.push(
      <motion.div
        key={`r${i}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
        style={{
          backgroundColor: '#f0ebe0',
          padding: `${ptop}px 56px ${pbot}px 48px`,
          borderTop: i > 0 ? '1px solid #d5cfc4' : 'none',
        }}
      >
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          color: '#444',
          lineHeight: 1.6,
          display: 'block',
        }}>{row.skills}</span>
      </motion.div>
    )
  })

  return (
    <section id="skills">

      {/* Full-width cream header — ghost contained here */}
      <div style={{
        backgroundColor: '#f0ebe0',
        padding: '140px 80px 60px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '60px',
          left: '60px',
          fontFamily: "'Oswald', sans-serif",
          fontSize: '180px',
          fontWeight: 700,
          color: 'rgba(26,24,20,0.05)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.02em',
          zIndex: 0,
        }}>04</div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'block',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#b5935a',
            marginBottom: '12px',
          }}>04</span>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw, 80px)',
            letterSpacing: '0.02em',
            lineHeight: 1,
            color: '#1a1814',
            margin: 0,
          }}>SKILLS</h2>
        </div>
      </div>

      {/* 45/55 grid — left labels dark, right skills cream */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '45% 55%',
        alignItems: 'stretch',
      }}>
        {cells}
      </div>

    </section>
  )
}
