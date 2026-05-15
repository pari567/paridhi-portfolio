import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Head of Editorial Board',
    org: 'The Shriram Millennium School',
    dates: 'Apr 2021 – Apr 2022',
    description:
      'Led a 20-member editorial team across content creation, design, and publication. Spearheaded the school\'s first student-run Instagram account. Drafted proposals and oversaw the magazine from concept to completion.',
    link: { label: 'Instagram ↗', href: 'https://www.instagram.com/studentsoftsmsn/' },
    tag: 'Leadership',
  },
  {
    title: 'Drama Workshop Coordinator',
    org: 'Sarvahitey — Vidya Vistar Project',
    dates: 'Jul 2023 – Aug 2023',
    description:
      'Conducted theatre workshops for 30 underprivileged children to build public speaking skills and confidence. Organised and led multiple sessions in collaboration with three other student coordinators.',
    link: null,
    tag: 'Community',
  },
  {
    title: 'Tutor, Teach From Home Initiative',
    org: 'World Youth Council',
    dates: 'Jun 2022 – Aug 2022',
    description:
      'Tutored three underprivileged girls whose education was interrupted by Covid-19. Designed lesson plans, conducted English classes, and assigned homework independently.',
    link: null,
    tag: 'Volunteer',
  },
]

function AlsoMeCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      style={{
        minHeight: '280px',
        backgroundColor: '#ffffff',
        border: '1px solid #e8e3db',
        borderRadius: 0,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      {/* Tag */}
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#c9b99a',
          alignSelf: 'flex-start',
        }}
      >
        {card.tag}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: 1.2,
          color: '#1a1814',
          margin: 0,
        }}
      >
        {card.title}
      </h3>

      {/* Org + dates */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          color: '#b0a898',
          margin: 0,
        }}
      >
        {card.org} · {card.dates}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          color: '#555',
          lineHeight: 1.65,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {card.description}
      </p>

      {/* Link */}
      {card.link && (
        <a
          href={card.link.href}
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#1a1814',
            textDecoration: 'none',
            alignSelf: 'flex-start',
            marginTop: 'auto',
          }}
          onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
          onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
        >
          {card.link.label}
        </a>
      )}
    </motion.div>
  )
}

export default function AlsoMe() {
  return (
    <section id="alsome" style={{ backgroundColor: '#faf8f5' }}>

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
            Also Me
          </h2>
        </div>
        <div style={{ borderTop: '1px solid #d4ccc0' }} />
      </div>

      {/* Cards */}
      <div className="px-8 md:px-14 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <AlsoMeCard key={i} card={card} index={i} />
        ))}
      </div>

    </section>
  )
}
