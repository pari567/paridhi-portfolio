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
  return (
    <section id="skills" style={{ backgroundColor: '#faf8f5' }}>

      {/* Section header */}
      <div className="px-8 md:px-14 lg:px-20 pt-20 pb-0">
        <div className="flex items-baseline gap-5 pb-4">
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#b0a898' }}>04</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 7vw, 80px)',
              letterSpacing: '0.04em',
              lineHeight: 1,
              color: '#1a1814',
            }}
          >
            Skills
          </h2>
        </div>
        <div style={{ borderTop: '1px solid #d4ccc0' }} />
      </div>

      {/* Rows */}
      <div className="px-8 md:px-14 lg:px-20 pb-12">
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
          >
            <div style={{ borderTop: '1px solid #e8e3db' }} />
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '32px',
                padding: '16px 0',
              }}
            >
              {/* Category label */}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '9px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: '#c9b99a',
                  flexShrink: 0,
                  width: '200px',
                  lineHeight: 1.6,
                }}
              >
                {row.label}
              </span>

              {/* Vertical divider */}
              <div style={{ width: '1px', alignSelf: 'stretch', backgroundColor: '#e8e3db', flexShrink: 0 }} />

              {/* Skills */}
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  color: '#444',
                  lineHeight: 1.6,
                }}
              >
                {row.skills}
              </span>
            </div>
          </motion.div>
        ))}
        {/* Bottom ruled line */}
        <div style={{ borderTop: '1px solid #e8e3db' }} />
      </div>

    </section>
  )
}
