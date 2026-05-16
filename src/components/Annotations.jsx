import { motion } from 'framer-motion'

const vp = { once: true, margin: '-40px' }

export function WobblyCircle({ color = '#1a1814', size = 100 }) {
  const h = Math.round(size * 0.42)
  return (
    <motion.svg
      width={size}
      height={h}
      viewBox="0 0 200 80"
      style={{ overflow: 'visible' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={vp}
      transition={{ duration: 0.1 }}
    >
      <motion.path
        d="M 192,42 C 194,20 172,5 135,4 C 98,2 46,2 22,12 C 4,20 2,30 4,44 C 6,57 16,68 52,74 C 84,79 142,77 170,68 C 190,61 192,58 192,42 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={vp}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
      />
    </motion.svg>
  )
}

export function RoughUnderline({ color = '#1a1814', width = 120 }) {
  const h = 10
  const mid = h / 2
  return (
    <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} style={{ overflow: 'visible' }}>
      <path
        d={`M 0,${mid + 1} C ${width * 0.15},${mid - 2} ${width * 0.35},${mid + 3} ${width * 0.55},${mid} C ${width * 0.72},${mid - 2} ${width * 0.85},${mid + 2} ${width},${mid + 1}`}
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function SmallAsterisk({ color = '#1a1814', size = 24 }) {
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 2
  const lines = [0, 30, 60, 90, 120, 150].map(deg => {
    const rad = (deg * Math.PI) / 180
    return {
      x1: cx + r * Math.cos(rad),
      y1: cy + r * Math.sin(rad),
      x2: cx - r * Math.cos(rad),
      y2: cy - r * Math.sin(rad),
    }
  })
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ transform: 'rotate(-8deg)', overflow: 'visible' }}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={vp}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {lines.map((l, i) => (
        <line
          key={i}
          x1={l.x1} y1={l.y1}
          x2={l.x2} y2={l.y2}
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </motion.svg>
  )
}

export function ArrowRight({ color = '#1a1814', size = 40 }) {
  const h = size * 0.6
  const mid = h / 2
  return (
    <motion.svg
      width={size}
      height={h}
      viewBox={`0 0 ${size} ${h}`}
      style={{ overflow: 'visible' }}
      initial={{ opacity: 0, x: -6 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={vp}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {/* Slightly curved shaft */}
      <path
        d={`M 0,${mid + 1} C ${size * 0.35},${mid - 2} ${size * 0.65},${mid + 2} ${size * 0.82},${mid}`}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d={`M ${size * 0.65},${mid - 6} L ${size * 0.84},${mid} L ${size * 0.65},${mid + 6}`}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}

export function CornerBracket({ color = '#1a1814', size = 30 }) {
  const t = 10
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ overflow: 'visible' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={vp}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Top-left L */}
      <path
        d={`M ${t},1 L 1,1 L 1,${t}`}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Bottom-right L */}
      <path
        d={`M ${size - t},${size - 1} L ${size - 1},${size - 1} L ${size - 1},${size - t}`}
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  )
}
