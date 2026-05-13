import { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Work',     href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

const s = {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'rgba(250,250,247,0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid #e8e4de',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 32px',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  monogram: {
    fontFamily: 'Fraunces, serif',
    fontWeight: 900,
    fontSize: 20,
    color: '#1a1a2e',
    lineHeight: 1,
  },
  name: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 12,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 32,
  },
  link: {
    fontSize: 13,
    color: '#6b7280',
    textDecoration: 'none',
    letterSpacing: 1,
    cursor: 'pointer',
    fontFamily: 'DM Sans, sans-serif',
    transition: 'color 0.2s ease',
  },
  linkHover: {
    color: '#ff6b35',
  },
}

function NavLink({ href, label }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      style={{ ...s.link, ...(hovered ? s.linkHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}

export default function Nav() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -64 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={s.wrapper}
    >
      <div style={s.inner}>
        <div style={s.left}>
          <span style={s.monogram}>PB</span>
          <span style={s.name}>Paridhi Bansal</span>
        </div>
        <nav style={s.nav}>
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
        </nav>
      </div>
    </motion.div>
  )
}
