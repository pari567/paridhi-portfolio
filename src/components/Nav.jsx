import { useEffect, useState } from 'react'

const links = [
  { label: 'Work',       href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#faf8f5',
        borderBottom: '1px solid #e8e3db',
        boxShadow: scrolled ? '0 2px 16px rgba(26,24,20,0.06)' : 'none',
        transition: 'box-shadow 0.25s ease',
      }}
    >
      <div
        className="px-8 md:px-14 lg:px-20"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '56px',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '18px',
            fontStyle: 'italic',
            color: '#1a1814',
            textDecoration: 'none',
          }}
        >
          PB
        </a>

        {/* Links */}
        <div style={{ display: 'flex', gap: '28px' }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#888',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#1a1814' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#888' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
