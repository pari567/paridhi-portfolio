import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    num: '01',
    type: 'Built · Live',
    title: 'Threads',
    oneliner: 'A routine-building web app, fully designed and deployed',
    description:
      'Built entirely as a deployed web application — a tool for creating and managing daily routines. Threads is live, functional, and the first thing I shipped independently.',
    tools: ['React', 'Claude', 'Netlify'],
    links: [{ label: 'Live Site', href: 'https://threadroutinebuilder.netlify.app' }],
  },
  {
    num: '02',
    type: 'Research',
    title: 'Heartstrings & Headlines',
    oneliner: 'Does aesthetic design make people care more about news?',
    description:
      'A between-subjects experiment testing whether aesthetically designed news media produces greater sympathetic engagement than plain text versions of the same article. Co-designed the study, built and distributed the survey in Qualtrics, and analysed Likert-scale responses in SPSS and R across 21 UBC participants. We found that participants in the aesthetic condition reported significantly greater personal distress and emotional engagement.',
    tools: ['Qualtrics', 'SPSS', 'R', 'Between-subjects design'],
    links: [],
  },
  {
    num: '03',
    type: 'Data Science',
    title: 'Online Shoppers Classification',
    oneliner: 'Predicting purchase intent from browsing behaviour using machine learning',
    description:
      'Built machine learning classification models to predict whether an online shopping session results in a purchase. Used SHAP values to interpret model predictions — PageValue and ExitRates emerged as the strongest predictors. The entire pipeline is containerised with Docker for full reproducibility, and includes unit tests, data validation, and a Quarto report.',
    tools: ['Python', 'scikit-learn', 'SHAP', 'Docker', 'pandas', 'Quarto'],
    links: [{ label: 'GitHub', href: 'https://github.com/UBC-DSCI-310-2025W2/dsci-310-group-09' }],
  },
  {
    num: '04',
    type: 'Data Science',
    title: 'Bank Marketing Dashboard',
    oneliner: 'Interactive dashboards uncovering what predicts term deposit subscriptions',
    description:
      'Built four interactive dashboards analysing 41,188 records from a Portuguese bank\'s telephone marketing campaigns. My two views focused on demographic and financial predictors — a linked heatmap showing how education and marital status interact, an age group bar chart, and a brushable scatter plot of macroeconomic indicators. Built with Altair using bi-directional linked highlighting and interval selection.',
    tools: ['Python', 'Altair', 'Vega-Lite', 'pandas', 'Jupyter'],
    links: [],
  },
  {
    num: '05',
    type: 'Built · Live',
    title: 'This Portfolio',
    oneliner: 'Designed and built from scratch — React, Framer Motion, editorial design system',
    description:
      'This site. Built with React, Vite, Tailwind, and Framer Motion. Designed around an editorial aesthetic — Bebas Neue display type, Cormorant Garamond headings, a warm cream palette, and hand-drawn annotation overlays. Includes an interactive Lab section with a custom attentional bias detector.',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    links: [],
    noLink: true,
  },
]

function ToolPill({ label }) {
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

function ProjectCard({ project, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        height: '380px',
        border: `1px solid ${hovered ? '#1a1814' : '#e8e3db'}`,
        cursor: 'pointer',
        transition: 'border-color 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 0,
        overflow: 'hidden',
      }}
    >
      {/* Cover — top 60% */}
      <div
        style={{
          flex: '0 0 60%',
          backgroundColor: '#2c2420',
          opacity: hovered ? 0.85 : 1,
          transition: 'opacity 0.2s ease',
        }}
      />

      {/* Info — bottom 40% */}
      <div
        style={{
          flex: '0 0 40%',
          backgroundColor: '#ffffff',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          overflow: 'hidden',
        }}
      >
        {/* Number + type */}
        <div className="flex items-center justify-between">
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#b0a898' }}>
            {project.num}
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#c9b99a',
            }}
          >
            {project.type}
          </span>
        </div>

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
          {project.title}
        </h3>

        {/* One-liner — single line, truncated */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px',
            color: '#888',
            lineHeight: 1.4,
            margin: 0,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {project.oneliner}
        </p>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(26,24,20,0.45)',
              zIndex: 40,
            }}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              inset: '5%',
              backgroundColor: '#faf8f5',
              zIndex: 50,
              overflowY: 'auto',
              padding: '48px 56px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '24px',
                right: '32px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                color: '#1a1814',
                cursor: 'pointer',
                lineHeight: 1,
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              ×
            </button>

            {/* Number + type */}
            <div className="flex items-center gap-4">
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#b0a898' }}>
                {project.num}
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#c9b99a',
                }}
              >
                {project.type}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 400,
                lineHeight: 1.05,
                color: '#1a1814',
              }}
            >
              {project.title}
            </h2>

            <div style={{ borderTop: '1px solid #d4ccc0' }} />

            {/* Description */}
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                lineHeight: 1.8,
                color: '#444',
                maxWidth: '60ch',
              }}
            >
              {project.description}
            </p>

            {/* Tools */}
            <div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#b0a898', marginBottom: '10px' }}>
                Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map(t => <ToolPill key={t} label={t} />)}
              </div>
            </div>

            {/* Links */}
            {project.links.length > 0 && (
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#b0a898', marginBottom: '10px' }}>
                  Links
                </p>
                <div className="flex flex-col gap-2">
                  {project.links.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '14px',
                        color: '#1a1814',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                      onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Work() {
  const [active, setActive] = useState(null)

  return (
    <section id="work" style={{ backgroundColor: '#faf8f5' }}>

      {/* Section header */}
      <div className="px-8 md:px-14 lg:px-20 pt-20 pb-0">
        <div className="flex items-baseline gap-5 pb-4">
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#b0a898' }}>02</span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(48px, 7vw, 80px)',
              letterSpacing: '0.04em',
              lineHeight: 1,
              color: '#1a1814',
            }}
          >
            Work
          </h2>
        </div>
        <div style={{ borderTop: '1px solid #d4ccc0' }} />
      </div>

      {/* Grid */}
      <div
        className="px-8 md:px-14 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
          >
            <ProjectCard project={p} onClick={() => setActive(p)} />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />

    </section>
  )
}
