import { useState } from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const tabs = [
  {
    tab: 'CURIOUSER.AI',
    label: 'INTERNSHIP · REMOTE · UNITED STATES',
    company: 'Curiouser.AI',
    date: 'Jun 2025 – Aug 2025',
    title: 'UX Research & Event Operations Assistant',
    bullets: [
      'Supported research planning by tracking user feedback and contributing to early-stage UX discussions',
      'Managed Eventbrite setup, participant communication, and scheduling across multiple workshop sessions',
      'Coordinated logistics to ensure smooth event flow and high attendee engagement',
    ],
    tags: ['Eventbrite', 'Zoom', 'UX Research'],
    year: '2025',
    takeaway: 'Learned how early-stage UX research actually gets coordinated behind the scenes.',
  },
  {
    tab: 'ROCKET LEARNING',
    label: 'INTERNSHIP · HYBRID · NEW DELHI, INDIA',
    company: 'Rocket Learning',
    date: 'Jul 2025 – Aug 2025',
    title: 'Content & Field Research Intern',
    bullets: [
      'Designed and refined educational content for children aged 3–6 based on curriculum goals',
      'Conducted field visits to observe Anganwadi teacher training sessions and evaluate learning modules',
      'Tested interactive educational games on-ground with young children to assess usability',
      'Synthesized field observations and user feedback to iterate and improve content effectiveness',
    ],
    tags: ['Excel', 'Field Research', 'Content Design'],
    year: '2025',
    takeaway: 'Learned to turn messy field observations into content decisions that work for kids.',
  },
  {
    tab: 'YUMFUEL',
    label: 'INTERNSHIP · REMOTE · UNITED STATES',
    company: 'YumFuel Nutrition',
    date: 'Jun 2024 – Aug 2024',
    title: 'Research & Digital Marketing Intern',
    bullets: [
      'Designed and carried out user surveys and usability tests to evaluate platform engagement',
      'Analysed qualitative and quantitative feedback to identify behavioural patterns',
      'Developed research-backed content aligned with behaviour change principles and product goals',
    ],
    tags: ['Qualtrics', 'Excel', 'Behaviour Research'],
    year: '2024',
    takeaway: 'Learned to read user behaviour and turn it into content that changes habits.',
  },
  {
    tab: 'PATANJALI',
    label: 'PART-TIME · ON-SITE · NEW DELHI, INDIA',
    company: 'Patanjali Wellness Centre',
    date: 'May 2022 – Sep 2022',
    title: 'Sales Assistant',
    bullets: [
      'Assisted customers in selecting products through personalised recommendations',
      'Promoted products and services to support sales targets',
      'Maintained organised store layout and contributed to a reported 10% sales increase',
    ],
    tags: ['Customer Service', 'Retail', 'Inventory'],
    year: '2022',
    takeaway: 'My first taste of reading people in real time and adjusting on the spot.',
  },
]

export default function Experience() {
  const [active, setActive] = useState(0)
  const entry = tabs[active]

  return (
    <section id="experience" style={{ background: '#2c1f14', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        .tab-strip::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .exp-panel { flex-direction: column !important; }
          .exp-left { max-width: 100% !important; }
          .exp-right { align-items: flex-start !important; margin-top: 32px; }
        }
      `}</style>

      {/* Ghost number */}
      <div style={{
        position: 'absolute',
        top: '60px',
        left: '60px',
        fontFamily: "'Oswald', sans-serif",
        fontSize: '180px',
        fontWeight: 700,
        color: '#f0ebe0',
        opacity: 0.05,
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '-0.02em',
        zIndex: 0,
      }}>02</div>

      {/* Section header */}
      <div className="px-8 md:px-14 lg:px-20" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', paddingTop: '140px', marginBottom: '48px' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#b5935a',
          }}>02</span>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw, 80px)',
            letterSpacing: '0.02em',
            lineHeight: 1,
            color: '#f0ebe0',
            margin: 0,
          }}>EXPERIENCE</h2>
        </div>
      </div>

      {/* Tab strip */}
      <div
        className="tab-strip"
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: '32px',
          paddingLeft: '80px',
          paddingRight: '80px',
          display: 'flex',
          borderBottom: '1px solid rgba(240,235,224,0.1)',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {tabs.map((t, i) => (
          <button
            key={t.tab}
            onClick={() => setActive(i)}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: '12px',
              letterSpacing: '1.5px',
              padding: '10px 24px 14px',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              borderBottom: i === active ? '2px solid #b5935a' : '2px solid transparent',
              marginBottom: '-1px',
              color: i === active ? '#b5935a' : 'rgba(240,235,224,0.35)',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
          >{t.tab}</button>
        ))}
      </div>

      {/* Content panel */}
      <div style={{ position: 'relative', zIndex: 1, padding: '44px 80px 48px' }}>
        <motion.div key={active} variants={container} initial="hidden" animate="show">
          <div className="exp-panel" style={{ display: 'flex', gap: '48px', alignItems: 'flex-start' }}>

            {/* Left column — role details */}
            <div className="exp-left" style={{ flex: '1 1 0', minWidth: 0, maxWidth: '58%' }}>

              <motion.div variants={item} style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: '12px',
                letterSpacing: '2px',
                color: '#b5935a',
                marginBottom: '6px',
                textTransform: 'uppercase',
              }}>{entry.label}</motion.div>

              <motion.div variants={item} style={{ display: 'flex', alignItems: 'baseline', marginBottom: '6px' }}>
                <span style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: '40px',
                  color: '#f0ebe0',
                }}>{entry.company}</span>
                <span style={{
                  fontSize: '15px',
                  color: 'rgba(240,235,224,0.4)',
                  marginLeft: '14px',
                }}>{entry.date}</span>
              </motion.div>

              <motion.div variants={item} style={{
                fontSize: '22px',
                fontStyle: 'italic',
                fontFamily: 'Georgia, serif',
                color: 'rgba(240,235,224,0.7)',
                marginBottom: '24px',
              }}>{entry.title}</motion.div>

              <motion.div variants={item} style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '0 0 28px 0' }}>
                {entry.bullets.map((b, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px' }}>
                    <span style={{ color: '#b5935a', flexShrink: 0 }}>·</span>
                    <span style={{ fontSize: '17px', color: 'rgba(240,235,224,0.65)', lineHeight: 1.65 }}>{b}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {entry.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: '10px',
                    letterSpacing: '1.5px',
                    color: 'rgba(181,147,90,0.7)',
                    border: '1px solid rgba(181,147,90,0.25)',
                    padding: '4px 10px',
                    textTransform: 'uppercase',
                  }}>{tag}</span>
                ))}
              </motion.div>

            </div>

            {/* Right column — year + takeaway */}
            <div className="exp-right" style={{ flex: '1 1 0', minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>

              <motion.div variants={item} style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: '160px',
                lineHeight: 0.85,
                color: 'rgba(240,235,224,0.05)',
                letterSpacing: '-4px',
                textAlign: 'right',
                pointerEvents: 'none',
                userSelect: 'none',
              }}>{entry.year}</motion.div>

              <motion.div variants={item} style={{ maxWidth: '320px', marginLeft: 'auto', marginTop: '20px' }}>
                <div style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '1.5px',
                  color: '#b5935a',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}>WHAT I TOOK AWAY</div>
                <div style={{
                  fontFamily: 'Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: '18px',
                  lineHeight: 1.45,
                  color: 'rgba(240,235,224,0.75)',
                }}>{entry.takeaway}</div>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
