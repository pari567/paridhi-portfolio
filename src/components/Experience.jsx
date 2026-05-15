import { useState } from 'react'
import { motion } from 'framer-motion'

const entries = [
  {
    role: 'UX Research & Event Operations Assistant',
    company: 'Curiouser.AI',
    type: 'Internship · Remote',
    dates: 'Jun 2025 – Aug 2025',
    location: 'United States',
    bullets: [
      'Supported research planning by tracking user feedback and contributing to early-stage UX discussions',
      'Managed Eventbrite setup, participant communication, and scheduling across multiple workshop sessions',
      'Coordinated logistics to ensure smooth event flow and high attendee engagement',
    ],
    tags: ['Eventbrite', 'Zoom', 'UX Research'],
  },
  {
    role: 'Content & Field Research Intern',
    company: 'Rocket Learning',
    type: 'Internship · Hybrid',
    dates: 'Jul 2025 – Aug 2025',
    location: 'New Delhi, India',
    bullets: [
      'Designed and refined educational content for children aged 3–6 based on curriculum goals',
      'Conducted field visits to observe Anganwadi teacher training sessions and evaluate learning modules',
      'Tested interactive educational games on-ground with young children to assess usability',
      'Synthesized field observations and user feedback to iterate and improve content effectiveness',
    ],
    tags: ['Excel', 'Field Research', 'Content Design'],
  },
  {
    role: 'Research & Digital Marketing Intern',
    company: 'YumFuel Nutrition',
    type: 'Internship · Remote',
    dates: 'Jun 2024 – Aug 2024',
    location: 'United States',
    bullets: [
      'Designed and carried out user surveys and usability tests to evaluate platform engagement',
      'Analysed qualitative and quantitative feedback to identify behavioural patterns',
      'Developed research-backed content aligned with behaviour change principles and product goals',
    ],
    tags: ['Qualtrics', 'Excel', 'Behaviour Research'],
  },
  {
    role: 'Sales Assistant',
    company: 'Patanjali Wellness Centre',
    type: 'Part-time · On-site',
    dates: 'May 2022 – Sep 2022',
    location: 'New Delhi, India',
    bullets: [
      'Assisted customers in selecting products through personalised recommendations',
      'Promoted products and services to support sales targets',
      'Maintained organised store layout and contributed to a reported 10% sales increase',
    ],
    tags: ['Customer Service', 'Retail', 'Inventory'],
  },
]

function TagPill({ label }) {
  return (
    <span
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '11px',
        letterSpacing: '0.04em',
        color: '#6b6459',
        border: '1px solid #d4ccc0',
        padding: '2px 8px',
      }}
    >
      {label}
    </span>
  )
}

function ExperienceEntry({ entry, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', gap: '48px', position: 'relative' }}
    >
      {/* Timeline column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '20px' }}>
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            border: '2px solid #1a1814',
            backgroundColor: hovered ? '#1a1814' : '#faf8f5',
            flexShrink: 0,
            marginTop: '4px',
            zIndex: 1,
            transition: 'background-color 0.2s ease',
          }}
        />
        <div style={{ width: '1px', flexGrow: 1, backgroundColor: '#e8e3db', marginTop: '6px' }} />
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          paddingBottom: index < entries.length - 1 ? '64px' : '0',
          paddingLeft: '16px',
        }}
      >
        {/* Dates + location */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#c9b99a',
            marginBottom: '6px',
          }}
        >
          {entry.dates} · {entry.location}
        </p>

        {/* Company + type */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '2px' }}>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: '17px',
              color: '#1a1814',
            }}
          >
            {entry.company}
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              color: '#b0a898',
            }}
          >
            {entry.type}
          </span>
        </div>

        {/* Role */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: '22px',
            color: '#1a1814',
            marginBottom: '14px',
            lineHeight: 1.3,
          }}
        >
          {entry.role}
        </p>

        {/* Bullets */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {entry.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                color: '#555',
                lineHeight: 1.7,
                paddingLeft: '14px',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: '#c9b99a' }}>·</span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {entry.tags.map(t => <TagPill key={t} label={t} />)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ backgroundColor: '#faf8f5' }}>

      {/* Section header */}
      <div className="px-8 md:px-14 lg:px-20 pt-20 pb-0">
        <div className="flex items-baseline gap-5 pb-4">
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#b0a898' }}>03</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 7vw, 80px)',
              letterSpacing: '0.04em',
              lineHeight: 1,
              color: '#1a1814',
            }}
          >
            Experience
          </h2>
        </div>
        <div style={{ borderTop: '1px solid #d4ccc0' }} />
      </div>

      {/* Timeline */}
      <div className="px-8 md:px-14 lg:px-20 py-14">
        {entries.map((entry, i) => (
          <ExperienceEntry key={i} entry={entry} index={i} />
        ))}
      </div>

    </section>
  )
}
