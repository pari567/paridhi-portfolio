import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CANVAS = 500
const MARGIN = 30

const emotions = [
  { name: 'Excited',   valence:  0.70, arousal:  0.80, explanation: "You're energised and looking forward to something — high energy, positive outlook." },
  { name: 'Elated',    valence:  0.50, arousal:  0.90, explanation: "You're on a high right now — intense positive emotion with strong activation." },
  { name: 'Happy',     valence:  0.82, arousal:  0.40, explanation: "Things feel good. You're in a pleasant, engaged state." },
  { name: 'Alert',     valence:  0.18, arousal:  0.88, explanation: "You're switched on and attentive — ready to respond." },
  { name: 'Content',   valence:  0.62, arousal: -0.28, explanation: "Quietly satisfied. Things are okay and you feel it." },
  { name: 'Calm',      valence:  0.52, arousal: -0.58, explanation: "You're settled and at ease — low stimulation, positive feeling." },
  { name: 'Relaxed',   valence:  0.70, arousal: -0.70, explanation: "You're unwound and comfortable, without much on your mind." },
  { name: 'Serene',    valence:  0.38, arousal: -0.62, explanation: "A quiet kind of good — peaceful and undisturbed." },
  { name: 'Tense',     valence: -0.62, arousal:  0.80, explanation: "You're wound up — high activation with an unpleasant edge." },
  { name: 'Stressed',  valence: -0.50, arousal:  0.68, explanation: "You're carrying a lot right now — activated but not in a good way." },
  { name: 'Upset',     valence: -0.68, arousal:  0.48, explanation: "Something's got to you. High arousal, negative valence." },
  { name: 'Nervous',   valence: -0.28, arousal:  0.62, explanation: "Anticipatory tension — activated but unsure." },
  { name: 'Sad',       valence: -0.58, arousal: -0.68, explanation: "Low energy and low mood. Something feels heavy right now." },
  { name: 'Depressed', valence: -0.72, arousal: -0.80, explanation: "You're feeling flat and disengaged — low arousal, low valence." },
  { name: 'Bored',     valence: -0.38, arousal: -0.68, explanation: "Nothing's holding your attention. You're understimulated." },
  { name: 'Fatigued',  valence: -0.18, arousal: -0.82, explanation: "You're running low — depleted and ready to rest." },
]

const toCanvas = (valence, arousal) => ({
  x: CANVAS / 2 + valence * (CANVAS / 2 - MARGIN),
  y: CANVAS / 2 - arousal * (CANVAS / 2 - MARGIN),
})

const getQuadrant = (cx, cy) => {
  if (cx >= CANVAS / 2 && cy <  CANVAS / 2) return 'High Arousal · Positive Valence'
  if (cx <  CANVAS / 2 && cy <  CANVAS / 2) return 'High Arousal · Negative Valence'
  if (cx >= CANVAS / 2 && cy >= CANVAS / 2) return 'Low Arousal · Positive Valence'
  return 'Low Arousal · Negative Valence'
}

const getNearestEmotion = (cx, cy) => {
  const vx = (cx - CANVAS / 2) / (CANVAS / 2)
  const vy = -(cy - CANVAS / 2) / (CANVAS / 2)
  return emotions.reduce((nearest, e) => {
    const d = Math.hypot(e.valence - vx, e.arousal - vy)
    const nd = Math.hypot(nearest.valence - vx, nearest.arousal - vy)
    return d < nd ? e : nearest
  })
}

// Per-emotion label anchor to avoid overlap
const labelAnchor = (name, x) => {
  const overrides = { Alert: 'end', Elated: 'end', Nervous: 'end', Fatigued: 'start', Bored: 'end' }
  if (overrides[name]) return overrides[name]
  return x > CANVAS / 2 ? 'start' : 'end'
}
const labelDx = (name, x) => {
  const anchor = labelAnchor(name, x)
  return anchor === 'start' ? 8 : -8
}

export default function Lab() {
  const [click, setClick] = useState(null)
  const [result, setResult] = useState(null)

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const scale = CANVAS / rect.width
    const cx = (e.clientX - rect.left) * scale
    const cy = (e.clientY - rect.top) * scale
    const emotion = getNearestEmotion(cx, cy)
    setClick({ x: cx, y: cy })
    setResult({ emotion, quadrant: getQuadrant(cx, cy) })
  }

  return (
    <section id="lab" style={{ backgroundColor: '#faf8f5' }}>

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
            The Lab
          </h2>
        </div>
        <div style={{ borderTop: '1px solid #d4ccc0' }} />
      </div>

      <div className="px-8 md:px-14 lg:px-20 py-12 flex flex-col items-center gap-10">

        {/* Intro */}
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '26px',
              color: '#1a1814',
              marginBottom: '10px',
              lineHeight: 1.25,
            }}
          >
            How are you feeling right now?
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: '#888',
              lineHeight: 1.75,
            }}
          >
            Click the point on the grid that best matches your current mood. Based on Russell's
            Circumplex Model of Affect (1980) — a two-dimensional model mapping all human emotions
            across valence (pleasant to unpleasant) and arousal (activated to deactivated).
          </p>
        </div>

        {/* SVG Grid */}
        <div style={{ width: '100%', maxWidth: `${CANVAS}px` }}>
          <svg
            viewBox={`0 0 ${CANVAS} ${CANVAS}`}
            style={{
              width: '100%',
              aspectRatio: '1',
              backgroundColor: '#f0ebe3',
              border: '1px solid #e8e3db',
              cursor: 'crosshair',
              display: 'block',
            }}
            onClick={handleClick}
          >
            {/* Axis lines */}
            <line x1={CANVAS / 2} y1={0} x2={CANVAS / 2} y2={CANVAS} stroke="#c9b99a" strokeWidth="1" />
            <line x1={0} y1={CANVAS / 2} x2={CANVAS} y2={CANVAS / 2} stroke="#c9b99a" strokeWidth="1" />

            {/* Axis labels */}
            <text x={CANVAS / 2 + 6} y={16} fontFamily="DM Sans, sans-serif" fontSize="11" fill="#b0a898">ACTIVATED</text>
            <text x={CANVAS / 2 + 6} y={CANVAS - 6} fontFamily="DM Sans, sans-serif" fontSize="11" fill="#b0a898">DEACTIVATED</text>
            <text x={8} y={CANVAS / 2 - 7} fontFamily="DM Sans, sans-serif" fontSize="11" fill="#b0a898">UNPLEASANT</text>
            <text x={CANVAS - 8} y={CANVAS / 2 - 7} fontFamily="DM Sans, sans-serif" fontSize="11" fill="#b0a898" textAnchor="end">PLEASANT</text>

            {/* Emotion dots + labels */}
            {emotions.map((e) => {
              const { x, y } = toCanvas(e.valence, e.arousal)
              const anchor = labelAnchor(e.name, x)
              const dx = labelDx(e.name, x)
              return (
                <g key={e.name}>
                  <circle cx={x} cy={y} r="5" fill="#c9b99a" />
                  <text
                    x={x + dx}
                    y={y + 4}
                    fontFamily="DM Sans, sans-serif"
                    fontSize="10"
                    fill="#888"
                    textAnchor={anchor}
                  >
                    {e.name}
                  </text>
                </g>
              )
            })}

            {/* Click marker */}
            {click && (
              <circle
                cx={click.x}
                cy={click.y}
                r="6"
                fill="#1a1814"
                style={{ pointerEvents: 'none' }}
              />
            )}
          </svg>
        </div>

        {/* Result panel */}
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={result?.emotion.name ?? 'empty'}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e8e3db',
                padding: '24px',
              }}
            >
              {result ? (
                <>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.14em',
                      color: '#c9b99a',
                      marginBottom: '8px',
                    }}
                  >
                    {result.quadrant}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '36px',
                      fontStyle: 'italic',
                      color: '#1a1814',
                      marginBottom: '12px',
                      lineHeight: 1.05,
                    }}
                  >
                    {result.emotion.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '14px',
                      color: '#555',
                      lineHeight: 1.75,
                    }}
                  >
                    {result.emotion.explanation}
                  </p>
                </>
              ) : (
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '14px',
                    color: '#b0a898',
                    lineHeight: 1.75,
                  }}
                >
                  Click anywhere on the grid to see your emotion profile
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Citation */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '11px',
            color: '#b0a898',
            maxWidth: '500px',
            textAlign: 'center',
            lineHeight: 1.65,
            fontStyle: 'italic',
          }}
        >
          Based on Russell, J.A. (1980). A circumplex model of affect.{' '}
          <em>Journal of Personality and Social Psychology, 39</em>(6), 1161–1178.
        </p>

      </div>
    </section>
  )
}
