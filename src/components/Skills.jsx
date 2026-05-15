import { motion } from 'framer-motion'

const groups = [
  {
    label: 'Research & Analysis',
    skills: [
      'SPSS', 'R', 'Python', 'Qualtrics', 'Excel',
      'Research design', 'Qualitative & quantitative methods',
      'Survey design', 'Experimental protocol',
    ],
  },
  {
    label: 'Communication & Writing',
    skills: [
      'Knowledge translation', 'Stakeholder communication',
      'Content strategy', 'Report writing',
      'Public-facing communication', 'Copywriting', 'Editorial leadership',
    ],
  },
  {
    label: 'Creative & Build',
    skills: [
      'React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vibe coding',
      'Canva', 'Notion', 'Miro', 'Google Suite', 'Eventbrite',
    ],
  },
  {
    label: 'Collaboration & Leadership',
    skills: [
      'Team leadership', 'Cross-functional collaboration',
      'Workshop facilitation', 'Project coordination', 'Participant management',
    ],
  },
]

function SkillGroup({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.07 }}
    >
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.16em',
          color: '#c9b99a',
          marginBottom: '10px',
        }}
      >
        {group.label}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {group.skills.map(skill => (
          <li
            key={skill}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#444',
              lineHeight: 2.0,
            }}
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

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

      {/* Two-column grid */}
      <div
        className="px-8 md:px-14 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-x-16"
        style={{ rowGap: '48px' }}
      >
        {groups.map((group, i) => (
          <SkillGroup key={group.label} group={group} index={i} />
        ))}
      </div>

    </section>
  )
}
