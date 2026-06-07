import { useRef, useEffect } from 'react'

const RADIUS = 120
const STRENGTH = 0.30
const SPRING = 0.11
const FRICTION = 0.82

const clusters = [
  {
    label: 'RESEARCH & ANALYSIS',
    skills: ['SPSS', 'R', 'Python', 'Qualtrics', 'Excel', 'Research design', 'Survey design'],
  },
  {
    label: 'COMMUNICATION & WRITING',
    skills: ['Knowledge translation', 'Stakeholder comms', 'Content strategy', 'Report writing', 'Copywriting'],
  },
  {
    label: 'CREATIVE & BUILD',
    skills: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'Vibe coding', 'Canva', 'Notion'],
  },
  {
    label: 'COLLABORATION & LEADERSHIP',
    skills: ['Team leadership', 'Workshop facilitation', 'Project coordination', 'Participant management'],
  },
]

export default function Skills() {
  const sectionRef = useRef(null)
  const pillsData = useRef([])
  const mouseRef = useRef({ x: -9999, y: -9999, inside: false })
  const rafRef = useRef(null)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    const section = sectionRef.current
    if (!section) return

    const cachePillPositions = () => {
      const sr = section.getBoundingClientRect()
      const pills = Array.from(section.querySelectorAll('[data-pill]'))
      pillsData.current = pills.map(el => {
        const r = el.getBoundingClientRect()
        return {
          el,
          baseX: r.left - sr.left + r.width / 2,
          baseY: r.top - sr.top + r.height / 2,
          ox: 0, oy: 0, vx: 0, vy: 0,
        }
      })
    }

    cachePillPositions()

    if (isTouchDevice) return

    const onMouseMove = e => {
      const r = section.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top, inside: true }
    }
    const onMouseLeave = () => { mouseRef.current.inside = false }
    section.addEventListener('mousemove', onMouseMove)
    section.addEventListener('mouseleave', onMouseLeave)

    const onResize = () => {
      pillsData.current.forEach(p => {
        p.ox = 0; p.oy = 0; p.vx = 0; p.vy = 0
        p.el.style.transform = ''
      })
      cachePillPositions()
    }
    window.addEventListener('resize', onResize)

    const loop = () => {
      const { x: mx, y: my, inside } = mouseRef.current

      pillsData.current.forEach(p => {
        const px = p.baseX + p.ox
        const py = p.baseY + p.oy

        if (inside) {
          const dx = px - mx, dy = py - my
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < RADIUS && dist > 0) {
            const force = (1 - dist / RADIUS) * STRENGTH * 15
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        p.vx += -p.ox * SPRING
        p.vy += -p.oy * SPRING
        p.vx *= FRICTION
        p.vy *= FRICTION
        p.ox += p.vx
        p.oy += p.vy

        p.el.style.transform = `translate(${p.ox}px, ${p.oy}px)`

        const dist2 = Math.sqrt((p.baseX + p.ox - mx) ** 2 + (p.baseY + p.oy - my) ** 2)
        if (dist2 < RADIUS * 0.6 && inside) {
          p.el.style.color = '#b5935a'
          p.el.style.borderColor = 'rgba(181,147,90,0.7)'
        } else {
          p.el.style.color = 'rgba(240,235,224,0.6)'
          p.el.style.borderColor = 'rgba(240,235,224,0.2)'
        }
      })

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      section.removeEventListener('mousemove', onMouseMove)
      section.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} style={{
      background: '#2c1f14',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; padding: 0 32px 48px !important; }
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
      }}>04</div>

      {/* Section header */}
      <div className="px-8 md:px-14 lg:px-20" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', paddingTop: '140px', marginBottom: '48px' }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#b5935a',
          }}>04</span>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw, 80px)',
            letterSpacing: '0.02em',
            lineHeight: 1,
            color: '#f0ebe0',
            margin: 0,
          }}>SKILLS</h2>
        </div>
      </div>

      {/* Clusters grid */}
      <div
        className="skills-grid"
        style={{
          flex: 1,
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '32px 64px',
          alignContent: 'center',
          padding: '0 80px 48px',
        }}
      >
        {clusters.map((cluster, ci) => (
          <div key={ci}>
            <div style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: '15px',
              letterSpacing: '2px',
              color: '#b5935a',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}>{cluster.label}</div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {cluster.skills.map((skill, si) => (
                <div
                  key={si}
                  data-pill="true"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '15px',
                    color: 'rgba(240,235,224,0.6)',
                    border: '1px solid rgba(240,235,224,0.2)',
                    padding: '10px 18px',
                    borderRadius: '2px',
                    whiteSpace: 'nowrap',
                    willChange: 'transform',
                    display: 'inline-block',
                    cursor: 'default',
                    userSelect: 'none',
                  }}
                >{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
