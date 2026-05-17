import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion'

const CARD_W = 320
const CARD_H = 440
const CARD_GAP = 24
const CARD_TOTAL = CARD_W + CARD_GAP
const TRACK_H = 520

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
    type: 'Academic · Research',
    title: 'Heartstrings & Headlines',
    oneliner: 'Does aesthetic design make people care more about news?',
    description:
      'A between-subjects experiment testing whether aesthetically designed news media produces greater sympathetic engagement than plain text versions of the same article. Co-designed the study, built and distributed the survey in Qualtrics, and analysed Likert-scale responses in SPSS and R across 21 UBC participants. We found that participants in the aesthetic condition reported significantly greater personal distress and emotional engagement.',
    tools: ['Qualtrics', 'SPSS', 'R', 'Between-subjects design'],
    links: [],
  },
  {
    num: '03',
    type: 'Academic · Data Science',
    title: 'Online Shoppers Classification',
    oneliner: 'Predicting purchase intent from browsing behaviour using machine learning',
    description:
      'Built machine learning classification models to predict whether an online shopping session results in a purchase. Used SHAP values to interpret model predictions — PageValue and ExitRates emerged as the strongest predictors. The entire pipeline is containerised with Docker for full reproducibility, and includes unit tests, data validation, and a Quarto report.',
    tools: ['Python', 'scikit-learn', 'SHAP', 'Docker', 'pandas', 'Quarto'],
    links: [{ label: 'GitHub', href: 'https://github.com/UBC-DSCI-310-2025W2/dsci-310-group-09' }],
  },
  {
    num: '04',
    type: 'Academic · Data Science',
    title: 'Bank Marketing Dashboard',
    oneliner: 'Interactive dashboards uncovering what predicts term deposit subscriptions',
    description:
      "Built four interactive dashboards analysing 41,188 records from a Portuguese bank's telephone marketing campaigns. My two views focused on demographic and financial predictors — a linked heatmap showing how education and marital status interact, an age group bar chart, and a brushable scatter plot of macroeconomic indicators. Built with Altair using bi-directional linked highlighting and interval selection.",
    tools: ['Python', 'Altair', 'Vega-Lite', 'pandas', 'Jupyter'],
    links: [],
  },
  {
    num: '05',
    type: 'Built · Live',
    title: 'This Portfolio',
    oneliner: 'Designed and built from scratch — React, Framer Motion, editorial design system',
    description:
      'This site. Built with React, Vite, Tailwind, and Framer Motion. Designed around an editorial aesthetic — Bebas Neue display type, Cormorant Garamond headings, a warm cream palette, and hand-drawn annotation overlays.',
    tools: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    links: [],
    noLink: true,
  },
]

// ── ProjectCard ──────────────────────────────────────────────────────────────

function ProjectCard({ project, index, scrollX, containerWidthMV, trackPaddingMV, onOpen }) {
  const [hovered, setHovered] = useState(false)
  const hoverScaleMV = useMotionValue(1)

  // Distance of this card's center from the visible viewport center
  const dist = useTransform(
    [scrollX, containerWidthMV, trackPaddingMV],
    ([s, cw, tp]) => (tp + index * CARD_TOTAL + CARD_W / 2) - (s + cw / 2)
  )

  const cardRotateY = useTransform(dist, [-900, 0, 900], [12, 0, -12])
  const cardScale   = useTransform(dist, [-900, 0, 900], [0.94, 1, 0.94])
  const cardOpacity = useTransform(dist, [-900, 0, 900], [0.7, 1, 0.7])
  // Multiply scroll-driven scale with hover-driven scale so they compose
  const finalScale = useTransform([cardScale, hoverScaleMV], ([ss, hs]) => ss * hs)

  const onHoverStart = () => {
    setHovered(true)
    animate(hoverScaleMV, 1.02, { duration: 0.15 })
  }
  const onHoverEnd = () => {
    setHovered(false)
    animate(hoverScaleMV, 1, { duration: 0.15 })
  }

  return (
    // Outer: entry animation only
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      style={{ flexShrink: 0 }}
    >
      {/* Inner: 3D scroll transforms + hover */}
      <motion.div
        onClick={() => onOpen(project)}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        style={{
          width: `${CARD_W}px`,
          height: `${CARD_H}px`,
          transformPerspective: 1200,
          rotateY: cardRotateY,
          scale: finalScale,
          opacity: cardOpacity,
          cursor: 'pointer',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: hovered ? '#1a1814' : '#e8e3db',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'border-color 0.2s ease',
        }}
      >
        {/* Cover */}
        <div
          style={{
            flex: '0 0 60%',
            backgroundColor: '#2c1f14',
            opacity: hovered ? 0.85 : 1,
            transition: 'opacity 0.2s ease',
          }}
        />

        {/* Info */}
        <div
          style={{
            flex: '0 0 40%',
            backgroundColor: '#ffffff',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            overflow: 'hidden',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: '#b0a898' }}>
              {project.num}
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#c9b99a' }}>
              {project.type}
            </span>
          </div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 400, lineHeight: 1.2, color: '#1a1814', margin: 0 }}>
            {project.title}
          </h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#888', lineHeight: 1.4, margin: 0, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            {project.oneliner}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ── ProjectModal ─────────────────────────────────────────────────────────────

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            backgroundColor: '#f0ebe0',
            overflowY: 'auto',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'fixed',
              top: '24px',
              right: '32px',
              background: 'none',
              border: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#1a1814',
              cursor: 'pointer',
              padding: '8px',
              zIndex: 51,
            }}
          >
            CLOSE ×
          </button>

          {/* Two-column layout */}
          <div
            style={{
              display: 'flex',
              minHeight: '100vh',
              padding: 'clamp(32px, 5vw, 60px)',
              gap: '60px',
            }}
          >
            {/* Left column — 45% */}
            <div
              style={{
                flex: '0 0 45%',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                paddingTop: '20px',
              }}
            >
              {/* Num + type */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', color: '#b0a898' }}>
                  {project.num}
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#c9b99a' }}>
                  {project.type}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '52px',
                  fontWeight: 400,
                  lineHeight: 1.05,
                  color: '#1a1814',
                  margin: 0,
                }}
              >
                {project.title}
              </h2>

              <div style={{ borderTop: '1px solid #d4ccc0' }} />

              {/* Description */}
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', color: '#555', lineHeight: 1.75, margin: 0 }}>
                {project.description}
              </p>

              {/* Built with */}
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.16em', color: '#c9b99a', margin: '0 0 8px' }}>
                  Built With
                </p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '13px', color: '#555', margin: 0, lineHeight: 1.6 }}>
                  {project.tools.join(', ')}
                </p>
              </div>

              {/* Links */}
              {project.links?.length > 0 && (
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  {project.links.map(link => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1a1814', textDecoration: 'none' }}
                      onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                      onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Right column — 55%, dark visual anchor */}
            <div
              style={{
                flex: '0 0 55%',
                backgroundColor: '#2c1f14',
                borderRadius: '2px',
                minHeight: '100%',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ── Work ─────────────────────────────────────────────────────────────────────

export default function Work() {
  const [active, setActive]   = useState(null)
  const trackRef              = useRef(null)
  const containerRef          = useRef(null)
  const scrollX               = useMotionValue(0)
  const containerWidthMV      = useMotionValue(1200)
  const trackPaddingMV        = useMotionValue(80)
  const isDragging            = useRef(false)
  const hasDragged            = useRef(false)
  const dragStartX            = useRef(0)
  const dragStartScroll       = useRef(0)

  // Measure container and track padding on mount + resize
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) containerWidthMV.set(containerRef.current.offsetWidth)
      if (trackRef.current) {
        const pl = parseFloat(window.getComputedStyle(trackRef.current).paddingLeft) || 80
        trackPaddingMV.set(pl)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Convert vertical wheel to horizontal scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onWheel = (e) => {
      e.preventDefault()
      track.scrollLeft += e.deltaY + e.deltaX
    }
    track.addEventListener('wheel', onWheel, { passive: false })
    return () => track.removeEventListener('wheel', onWheel)
  }, [])

  // Global pointer move/up for drag (works even if pointer leaves track)
  useEffect(() => {
    const onMove = (e) => {
      if (!isDragging.current) return
      const dx = e.clientX - dragStartX.current
      if (Math.abs(dx) > 5) hasDragged.current = true
      if (trackRef.current) trackRef.current.scrollLeft = dragStartScroll.current - dx
    }
    const onUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      document.body.style.cursor = ''
      requestAnimationFrame(() => { hasDragged.current = false })
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [])

  const handleScroll = () => scrollX.set(trackRef.current?.scrollLeft ?? 0)

  const handlePointerDown = (e) => {
    if (e.button !== 0) return
    isDragging.current = true
    hasDragged.current = false
    dragStartX.current = e.clientX
    dragStartScroll.current = trackRef.current?.scrollLeft ?? 0
    document.body.style.cursor = 'grabbing'
  }

  const handleCardOpen = (proj) => {
    if (hasDragged.current) return
    setActive(proj)
  }

  // Progress bar: scaleX 0→1
  const totalScroll = Math.max(1, projects.length * CARD_TOTAL - containerWidthMV.get() + trackPaddingMV.get() * 2)
  const progressScaleX = useTransform(scrollX, [0, totalScroll], [0, 1])

  return (
    <section id="work" style={{ backgroundColor: '#f0ebe0', position: 'relative', overflow: 'hidden' }}>
      <style>{`#work .projects-track::-webkit-scrollbar { display: none; }`}</style>

      {/* Ghost number */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        left: '-10px',
        fontFamily: "'Oswald', sans-serif",
        fontSize: '280px',
        fontWeight: 700,
        color: 'rgba(26,24,20,0.06)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        letterSpacing: '-0.02em',
        zIndex: 0,
      }}>01</div>

      {/* Section header */}
      <div className="px-8 md:px-14 lg:px-20" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', paddingTop: '120px', marginBottom: '48px' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#b5935a',
          }}>01</span>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw, 80px)',
            letterSpacing: '0.02em',
            lineHeight: 1,
            color: '#1a1814',
            margin: 0,
          }}>PROJECTS</h2>
        </div>
      </div>

      {/* Track */}
      <div ref={containerRef}>
        <div
          ref={trackRef}
          className="projects-track px-8 md:px-14 lg:px-20"
          onScroll={handleScroll}
          onPointerDown={handlePointerDown}
          style={{
            display: 'flex',
            gap: `${CARD_GAP}px`,
            overflowX: 'scroll',
            overflowY: 'hidden',
            height: `${TRACK_H}px`,
            alignItems: 'center',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            cursor: 'grab',
            userSelect: 'none',
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard
              key={p.num}
              project={p}
              index={i}
              scrollX={scrollX}
              containerWidthMV={containerWidthMV}
              trackPaddingMV={trackPaddingMV}
              onOpen={handleCardOpen}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="px-8 md:px-14 lg:px-20" style={{ paddingTop: '12px', paddingBottom: '100px' }}>
          <div style={{ height: '1px', backgroundColor: '#e8e3db', overflow: 'hidden' }}>
            <motion.div
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#c9b99a',
                scaleX: progressScaleX,
                originX: 0,
              }}
            />
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
