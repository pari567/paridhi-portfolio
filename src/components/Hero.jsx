import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Physics, RigidBody, useRopeJoint, BallCollider, CuboidCollider } from '@react-three/rapier'
import * as THREE from 'three'

const CARD_W = 1.2
const CARD_H = 1.6
const ROPE_LEN = 1.8

function Scene() {
  const anchorRef = useRef()
  const cardRef = useRef()
  const lineRef = useRef()
  const matRef = useRef()
  const isDragging = useRef(false)
  const { camera, gl } = useThree()

  useRopeJoint(anchorRef, cardRef, [[0, 0, 0], [0, CARD_H / 2, 0], ROPE_LEN])

  useEffect(() => {
    new THREE.TextureLoader().load(
      '/photo.jpg',
      (tex) => {
        if (!matRef.current) return
        matRef.current.map = tex
        matRef.current.color.set(0xffffff)
        matRef.current.needsUpdate = true
      },
      undefined,
      () => {}
    )
  }, [])

  useEffect(() => {
    const onUp = () => {
      isDragging.current = false
      gl.domElement.style.cursor = 'grab'
    }
    window.addEventListener('pointerup', onUp)
    return () => window.removeEventListener('pointerup', onUp)
  }, [gl])

  useFrame(() => {
    if (!anchorRef.current || !cardRef.current || !lineRef.current) return
    const a = anchorRef.current.translation()
    const c = cardRef.current.translation()
    lineRef.current.geometry.setFromPoints([
      new THREE.Vector3(a.x, a.y, a.z),
      new THREE.Vector3(c.x, c.y + CARD_H / 2, c.z),
    ])
  })

  const getPlanePos = (e) => {
    const rect = gl.domElement.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1
    const v = new THREE.Vector3(nx, ny, 0.5).unproject(camera)
    const dir = v.clone().sub(camera.position).normalize()
    const t = -camera.position.z / dir.z
    return camera.position.clone().add(dir.multiplyScalar(t))
  }

  return (
    <>
      <RigidBody ref={anchorRef} type="fixed" position={[0, 2, 0]}>
        <BallCollider args={[0.05]} />
      </RigidBody>

      <line ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#c9b99a" />
      </line>

      <RigidBody
        ref={cardRef}
        position={[0.5, 0, 0]}
        linearDamping={4}
        angularDamping={4}
      >
        <CuboidCollider args={[CARD_W / 2, CARD_H / 2, 0.01]} />
        <mesh
          onPointerDown={(e) => {
            e.stopPropagation()
            isDragging.current = true
            gl.domElement.style.cursor = 'grabbing'
          }}
          onPointerMove={(e) => {
            if (!isDragging.current || !cardRef.current) return
            const pos = getPlanePos(e.nativeEvent)
            cardRef.current.setTranslation({ x: pos.x, y: pos.y, z: 0 }, true)
            cardRef.current.setLinvel({ x: 0, y: 0, z: 0 }, true)
          }}
        >
          <planeGeometry args={[CARD_W, CARD_H]} />
          <meshBasicMaterial ref={matRef} color="#f0ebe3" />
        </mesh>
      </RigidBody>
    </>
  )
}

function LanyardCard() {
  return (
    <div style={{ position: 'relative' }}>
      <Canvas
        style={{ width: '300px', height: '400px', cursor: 'grab' }}
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ alpha: true }}
      >
        <Physics gravity={[0, -20, 0]}>
          <Scene />
        </Physics>
      </Canvas>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: '#b0a898',
          textAlign: 'center',
          marginTop: '6px',
        }}
      >
        drag me
      </p>
    </div>
  )
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: 'easeOut', delay },
})

export default function Hero() {
  return (
    <section id="hero" style={{ backgroundColor: '#faf8f5' }} className="flex flex-col">

      {/* Top ruled line */}
      <div style={{ borderTop: '1px solid #d4ccc0' }} />

      {/* Name block */}
      <motion.div
        {...fade(0.2)}
        className="px-8 md:px-14 lg:px-20 py-3"
        style={{ borderBottom: '1px solid #d4ccc0' }}
      >
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(80px, 13vw, 140px)',
            letterSpacing: '0.02em',
            lineHeight: 0.92,
            color: '#1a1814',
          }}
        >
          PARIDHI BANSAL
        </h1>
      </motion.div>

      {/* Body — two columns */}
      <div className="flex-1 flex" style={{ borderBottom: '1px solid #d4ccc0' }}>

        {/* Left column */}
        <div
          className="flex-1 flex flex-col gap-6 px-8 md:px-14 lg:px-20 py-10"
          style={{ borderRight: '1px solid #d4ccc0' }}
        >
          {/* Tagline */}
          <motion.p
            {...fade(0.3)}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              letterSpacing: '0.12em',
              color: '#c9b99a',
            }}
          >
            PSYCHOLOGY × DATA SCIENCE
          </motion.p>

          {/* Roles */}
          <motion.p
            {...fade(0.38)}
            className="text-xs uppercase tracking-widest"
            style={{ color: '#888', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.15em' }}
          >
            UX Research · Consumer Insights · People &amp; Culture · Program Coordination
          </motion.p>

          {/* Links */}
          <motion.div {...fade(0.46)} className="flex items-center">
            {[
              { label: 'Resume ↗', href: 'https://drive.google.com/file/d/1sZZIhCh4s3RCRS8mvQjY3WGeivfomqu2/view?usp=sharing' },
              { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/paridhibansal' },
              { label: 'GitHub ↗', href: 'https://github.com/pari567' },
            ].map(({ label, href }, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <span style={{ width: '1px', height: '12px', backgroundColor: '#c9b99a', display: 'inline-block', margin: '0 24px' }} />
                )}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#1a1814',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.textDecoration = 'underline' }}
                  onMouseLeave={e => { e.currentTarget.style.textDecoration = 'none' }}
                >
                  {label}
                </a>
              </div>
            ))}
          </motion.div>

          {/* Blurb */}
          <motion.p
            {...fade(0.54)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              lineHeight: 1.75,
              color: '#444',
              maxWidth: '42ch',
            }}
          >
            I have a BA in Psychology and Data Science from UBC, two fields that don't always talk
            to each other, but probably should. I've done everything from running attentional bias
            experiments in the lab to coordinating UX research for an early-stage AI startup to
            analysing user behaviour for a nutrition brand. I'm drawn to roles where the work is
            about understanding people, and where research actually shapes what gets built or
            decided.
          </motion.p>

          {/* Personal note */}
          <motion.p
            {...fade(0.6)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              fontStyle: 'italic',
              color: '#888',
              marginTop: '16px',
              maxWidth: '42ch',
              lineHeight: 1.65,
            }}
          >
            Originally from New Delhi — now based in Vancouver, asking too many questions and thinking that's a feature, not a bug.
          </motion.p>

          {/* Education */}
          <motion.div {...fade(0.65)} style={{ marginTop: '12px' }}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: '#c9b99a',
              marginBottom: '4px',
            }}>
              Education
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: '#444',
            }}>
              BA, Psychology + Data Science · University of British Columbia · 2026
            </p>
          </motion.div>

        </div>

        {/* Right column — lanyard card */}
        <motion.div
          {...fade(0.35)}
          className="hidden md:flex items-center justify-center px-10 lg:px-16 py-10"
          style={{ width: '38%', flexShrink: 0 }}
        >
          <LanyardCard />
        </motion.div>
      </div>

    </section>
  )
}
