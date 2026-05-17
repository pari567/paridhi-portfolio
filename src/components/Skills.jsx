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
  // Build interleaved grid cells: [l0, r0, l1, r1, l2, r2, l3, r3]
  const cells = []
  rows.forEach((row, i) => {
    cells.push(
      <motion.div
        key={`l${i}`}
        className="skills-left-row"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
        style={{
          backgroundColor: '#2c1f14',
          padding: '16px 48px 16px 80px',
          display: 'flex',
          alignItems: 'flex-start',
          borderTop: i > 0 ? '1px solid rgba(240,235,224,0.12)' : 'none',
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
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
        style={{
          backgroundColor: '#f0ebe0',
          padding: '16px 80px 16px 56px',
          borderTop: i > 0 ? '1px solid #d5cfc4' : 'none',
        }}
      >
        <span className="skills-mobile-label" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '9px',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: '#b5935a',
          marginBottom: '6px',
          display: 'block',
        }}>{row.label}</span>
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
      <style>{`
        #skills {
          display: grid;
          grid-template-columns: 45% 55%;
        }
        #skills .skills-mobile-label { display: none; }
        @media (max-width: 768px) {
          #skills { display: flex !important; flex-direction: column; }
          #skills .skills-left-row { display: none !important; }
          #skills .skills-mobile-label { display: block !important; }
          #skills .skills-header-spacer { display: none !important; }
        }
      `}</style>

      {/* Header — left dark cell */}
      <div style={{
        backgroundColor: '#2c1f14',
        padding: '100px 48px 60px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-20px',
          left: '-10px',
          fontFamily: "'Oswald', sans-serif",
          fontSize: '280px',
          fontWeight: 700,
          color: 'rgba(240,235,224,0.05)',
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
            marginBottom: '16px',
          }}>04</span>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw, 80px)',
            letterSpacing: '0.02em',
            lineHeight: 1,
            color: '#f0ebe0',
            margin: '0 0 60px',
          }}>SKILLS</h2>
        </div>
      </div>

      {/* Header — right cream spacer (same row as left header) */}
      <div className="skills-header-spacer" style={{ backgroundColor: '#f0ebe0' }} />

      {/* Interleaved row cells */}
      {cells}

      {/* Bottom divider + padding */}
      <div style={{ backgroundColor: '#2c1f14', borderTop: '1px solid rgba(240,235,224,0.12)', paddingBottom: '100px' }} />
      <div style={{ backgroundColor: '#f0ebe0', borderTop: '1px solid #d5cfc4', paddingBottom: '100px' }} />
    </section>
  )
}
