'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Infinite Ticker ─────────────────────────────────────────────────────────
const STEPS = [
  ' Paste YouTube URL',
  ' Load All Comments',
  ' Set Keyword Filter',
  ' Set Emoji Filter',
  ' Set Time Window',
  ' Pick Random Winners',
  ' Generate Verification Page',
  ' Download Winner Cards',
  ' Share Proof Publicly',
]

function Ticker() {
  const doubled = [...STEPS, ...STEPS, ...STEPS]
  return (
    <div
      className="w-full overflow-hidden py-4"
      style={{
        background: '#0a0d12',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        style={{ gap: 48 }}
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="shrink-0 flex items-center"
            style={{ gap: 24, fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}
          >
            {item}
            <span style={{ color: '#a3e635', fontSize: 7 }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// ─── Types ────────────────────────────────────────────────────────────────────
type HeroProps = {
  videoUrl: string
  setVideoUrl: (v: string) => void
  loading: boolean
  onLoad: () => void
}

// ─── Rotating headline words ──────────────────────────────────────────────────
const ROTATE_WORDS = ['YouTube Videos', 'YouTube Shorts', 'Live Streams Videos', 'From Any Channel']

// ─── Floating comment cards ───────────────────────────────────────────────────
const FLOAT_CARDS = [
  { user: '@creator_fan',   text: 'giveaway! 🎉',  delay: 0,   duration: 6,   offsetY: -14 },
  { user: '@yt_subscriber', text: '#giveaway 🔥',  delay: 1.5, duration: 7,   offsetY: -10 },
  { user: '@loyal_viewer',  text: 'Pick me! 🏆',   delay: 0.8, duration: 5.5, offsetY: -12 },
  { user: '@shorts_fan',    text: 'love this ❤️',  delay: 2.2, duration: 6.5, offsetY: -16 },
]

// ─── Particle dots ────────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.4 + 0.1,
}))

// ─── 3D Tilt Card (mouse-reactive) ───────────────────────────────────────────
function TiltCard() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setTilt({ x: -dy * 14, y: dx * 14 })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        width: '100%',
        maxWidth: 320,
        cursor: 'default',
        position: 'relative',
        zIndex: 2,
      }}
    >
      {/* Main 3D card */}
      <motion.div
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
          scale: hovered ? 1.03 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d',
          borderRadius: 24,
          background: 'linear-gradient(145deg, #111827, #0a0d12)',
          border: '1px solid rgba(163,230,53,0.15)',
          boxShadow: hovered
            ? '0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(163,230,53,0.08)'
            : '0 24px 60px rgba(0,0,0,0.6)',
          padding: 20,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Inner glow on hover */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 24, pointerEvents: 'none',
          background: hovered ? 'radial-gradient(ellipse at 30% 30%, rgba(163,230,53,0.05), transparent 70%)' : 'none',
          transition: 'background 0.4s',
        }} />

        {/* Video thumbnail layer — translateZ gives depth */}
        <motion.div
          style={{ transform: 'translateZ(30px)', marginBottom: 14 }}
        >
          <div style={{
            borderRadius: 14,
            background: 'linear-gradient(135deg, rgba(163,230,53,0.1), rgba(163,230,53,0.03))',
            border: '1px solid rgba(163,230,53,0.15)',
            padding: '12px 14px',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'rgba(163,230,53,0.12)',
              border: '1px solid rgba(163,230,53,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ fontSize: 18, marginLeft: 3 }}>▶</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 8, background: 'rgba(255,255,255,0.15)', borderRadius: 4, marginBottom: 6, width: '78%' }} />
              <div style={{ height: 6, background: 'rgba(255,255,255,0.07)', borderRadius: 4, width: '52%' }} />
            </div>
          </div>
        </motion.div>

        {/* Comments label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
          <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            1,240 Comments
          </span>
          <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
        </div>

        {/* Comment rows — translateZ for depth layers */}
        {[
          { w: 85, highlight: false, z: 10 },
          { w: 70, highlight: false, z: 8 },
          { w: 90, highlight: true,  z: 20 },
          { w: 65, highlight: false, z: 6 },
          { w: 75, highlight: false, z: 4 },
        ].map((row, i) => (
          <motion.div
            key={i}
            style={{ transform: `translateZ(${row.z}px)`, marginBottom: 6 }}
          >
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: row.highlight ? 'rgba(163,230,53,0.06)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${row.highlight ? 'rgba(163,230,53,0.18)' : 'rgba(255,255,255,0.04)'}`,
              borderRadius: 10, padding: '7px 10px',
            }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                background: row.highlight ? 'rgba(163,230,53,0.18)' : 'rgba(255,255,255,0.06)',
              }} />
              <div style={{ flex: 1 }}>
                <div style={{
                  height: 5, borderRadius: 3,
                  background: row.highlight ? 'rgba(163,230,53,0.25)' : 'rgba(255,255,255,0.08)',
                  width: `${row.w}%`,
                }} />
              </div>
              {row.highlight && (
                <span style={{ fontSize: 10, color: '#a3e635', fontWeight: 700, flexShrink: 0 }}>🏆</span>
              )}
            </div>
          </motion.div>
        ))}

        {/* Winner badge — highest z-depth, pops out most */}
        <motion.div
          style={{ transform: 'translateZ(40px)', marginTop: 10 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{
            background: 'rgba(163,230,53,0.1)',
            border: '1px solid rgba(163,230,53,0.28)',
            borderRadius: 14, padding: '12px 16px', textAlign: 'center',
          }}>
            <div style={{ fontSize: 12, color: '#a3e635', fontWeight: 800, letterSpacing: '0.04em' }}>
              🏆 Winner Selected!
            </div>
            <div style={{ fontSize: 15, color: '#fff', fontWeight: 900, marginTop: 4 }}>
              @channel_winner
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom glow */}
      <div style={{
        position: 'absolute', bottom: -24, left: '50%', transform: 'translateX(-50%)',
        width: 200, height: 28, borderRadius: '50%',
        background: 'rgba(163,230,53,0.15)', filter: 'blur(20px)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

// ─── Floating Comment Badge ───────────────────────────────────────────────────
function FloatBadge({ user, text, delay, duration, offsetY, style }: {
  user: string; text: string; delay: number; duration: number; offsetY: number; style?: React.CSSProperties
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, offsetY, 0] }}
      transition={{
        opacity: { delay: delay + 0.5, duration: 0.6 },
        scale:   { delay: delay + 0.5, duration: 0.6 },
        y: { delay: delay + 0.5, duration, repeat: Infinity, ease: 'easeInOut' },
      }}
      style={{
        position: 'absolute',
        zIndex: 10,
        ...style,
      }}
    >
      <div style={{
        background: 'rgba(10,13,18,0.9)',
        border: '1px solid rgba(163,230,53,0.18)',
        backdropFilter: 'blur(12px)',
        borderRadius: 40,
        padding: '7px 14px',
        display: 'flex', alignItems: 'center', gap: 8,
        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
        whiteSpace: 'nowrap',
      }}>
        <div style={{
          width: 22, height: 22, borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(163,230,53,0.4), rgba(163,230,53,0.1))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 9, fontWeight: 700, color: '#a3e635', flexShrink: 0,
        }}>
          {user[1].toUpperCase()}
        </div>
        <div>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', lineHeight: 1 }}>{user}</div>
          <div style={{ fontSize: 12, color: '#fff', fontWeight: 600, lineHeight: 1.3 }}>{text}</div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Rotating Text ────────────────────────────────────────────────────────────
function RotatingText() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setIndex(i => (i + 1) % ROTATE_WORDS.length), 2800)
    return () => clearInterval(timer)
  }, [])
  return (
    <span className="rotating-word" style={{ display: 'inline-block', position: 'relative' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'inline-block',
            color: '#a3e635',
            position: 'relative',
          }}
        >
          {ROTATE_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

// ─── Particle Background ──────────────────────────────────────────────────────
function Particles() {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {PARTICLES.map(p => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: '#a3e635',
            opacity: p.opacity,
          }}
          animate={{ opacity: [p.opacity, p.opacity * 0.2, p.opacity], y: [-4, 4, -4] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero({ videoUrl, setVideoUrl, loading, onLoad }: HeroProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !loading && videoUrl.trim()) onLoad()
  }

  return (
    <section style={{ position: 'relative', background: '#0B0F19', overflow: 'hidden', paddingBottom: 0 }}>

      {/* ── TICKER (full width, outside ad columns) ──────────────────────── */}
      <Ticker />

      {/* ── Background effects ─────────────────────────────────────── */}
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(163,230,53,0.12) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Large lime glow orb — left */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-10%', pointerEvents: 'none',
        width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(163,230,53,0.07) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      {/* Large lime glow orb — right */}
      <div style={{
        position: 'absolute', top: '20%', right: '-15%', pointerEvents: 'none',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(163,230,53,0.05) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      {/* Particles */}
      <Particles />

      {/* ── Main hero content ──────────────────────────────────────── */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: 1200, margin: '0 auto',
        padding: '80px 32px 60px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'center',
      }}
        className="hero-grid"
      >

        {/* LEFT — Text content */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28 }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(163,230,53,0.2)',
              background: 'rgba(163,230,53,0.05)',
              borderRadius: 40, padding: '7px 16px',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#a3e635',
                boxShadow: '0 0 8px rgba(163,230,53,0.8)',
                display: 'inline-block',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }} />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                Free · No signup · 10,000+ giveaways picked
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: 'clamp(38px, 5vw, 68px)',
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: '-2px',
              color: '#fff',
              marginBottom: 24,
            }}
          >
            Pick Giveaway<br />
            Winners from<br />
            <RotatingText />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              fontSize: 17, color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7, marginBottom: 40, maxWidth: 460,
            }}
          >
            Load comments from any YouTube video or Short,
            apply filters and randomly select verified winners in seconds.
          </motion.p>

          {/* URL Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}
          >
            <div className="hero-input-row" style={{ display: 'flex', gap: 10 }}>
              <input
                type="url"
                inputMode="url"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder="Paste YouTube video or Shorts URL..."
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
                onKeyDown={handleKeyDown}
                style={{
                  flex: 1,
                  height: 54,
                  borderRadius: 16,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '0 20px',
                  fontSize: 15,
                  color: '#fff',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  minWidth: 0,
                }}
                onFocus={e => (e.target.style.borderColor = 'rgba(163,230,53,0.5)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.12)')}
              />
              <motion.button
                onClick={onLoad}
                disabled={loading || !videoUrl.trim()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  height: 54, padding: '0 28px', borderRadius: 16,
                  background: '#a3e635', color: '#000',
                  fontWeight: 900, fontSize: 15,
                  border: 'none', cursor: loading || !videoUrl.trim() ? 'not-allowed' : 'pointer',
                  opacity: loading || !videoUrl.trim() ? 0.6 : 1,
                  display: 'flex', alignItems: 'center', gap: 8,
                  flexShrink: 0, transition: 'opacity 0.2s',
                }}
              >
                {loading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{ display: 'inline-block', fontSize: 16 }}
                    >
                      ⟳
                    </motion.span>
                    Loading...
                  </>
                ) : (
                  <>Load Comments</>
                )}
              </motion.button>
            </div>

            {/* Supported URLs hint */}
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', paddingLeft: 4 }}>
              Supports youtube.com/watch · youtube.com/shorts · youtu.be
            </p>
          </motion.div>

          {/* Trust stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}
          >
            {[
              { num: '10K+', label: 'Giveaways' },
              { num: '500K+', label: 'Comments Loaded' },
              { num: '100%', label: 'Free Forever' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: '#a3e635' }}>{s.num}</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — 3D Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-visual-wrap"
style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 460 }}
        >
          {/* Floating comment badges around the card */}
          <FloatBadge
            user="@creator_fan" text="giveaway! 🎉"
            delay={0.6} duration={6} offsetY={-14}
            style={{ top: '5%', left: '-8%' }}
          />
          <FloatBadge
            user="@yt_subscriber" text="#giveaway 🔥"
            delay={1.8} duration={7} offsetY={-10}
            style={{ bottom: '18%', left: '-12%' }}
          />
          <FloatBadge
            user="@loyal_viewer" text="Pick me! 🏆"
            delay={1.2} duration={5.5} offsetY={-12}
            style={{ top: '10%', right: '-10%' }}
          />
          <FloatBadge
            user="@shorts_fan" text="love this ❤️"
            delay={2.5} duration={6.5} offsetY={-16}
            style={{ bottom: '22%', right: '-8%' }}
          />

          {/* 3D Tilt Card */}
          <TiltCard />

          {/* Floating YouTube badge — top center */}
          <motion.div
  className="floating-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{
              position: 'absolute', top: -18, left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 20,
            }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                background: 'rgba(10,13,18,0.95)',
                border: '1px solid rgba(163,230,53,0.25)',
                borderRadius: 40, padding: '6px 16px',
                display: 'flex', alignItems: 'center', gap: 8,
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              <div style={{
                width: 22, height: 22, borderRadius: 6,
                background: '#FF0000',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{ color: '#fff', fontSize: 10, marginLeft: 2 }}>▶</span>
              </div>
              <span style={{ fontSize: 12, color: '#fff', fontWeight: 700 }}>YouTube Giveaway Picker</span>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* ── AD SLOT — horizontal banner below hero content ──────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          position: 'relative', zIndex: 2,
          maxWidth: 900, margin: '0 auto',
          padding: '0 32px 40px',
        }}
      >
        <div style={{
          width: '100%', height: 90, borderRadius: 14,
          background: 'rgba(163,230,53,0.02)',
          border: '1px dashed rgba(163,230,53,0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'rgba(163,230,53,0.18)',
          }}>
            Advertisement · 728×90
          </span>
        </div>
      </motion.div>

      {/* ── Bottom gradient fade into next section ─────────────────── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 40,
        background: 'linear-gradient(transparent, #0B0F19)',
        pointerEvents: 'none', zIndex: 3,
      }} />

      {/* ── Pulse dot keyframes ────────────────────────────────────── */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .rotating-word {
  min-width: 320px;
}

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
    padding: 64px 20px 44px !important;
  }

  .hero-visual-wrap {
    min-height: 420px !important;
    overflow: hidden !important;
  }

  .floating-badge {
    display: none !important;
  }
}

@media (max-width: 640px) {
  .hero-grid {
    padding: 48px 16px 32px !important;
  }

  .hero-input-row {
    flex-direction: column !important;
  }

  .hero-input-row button {
    width: 100% !important;
    justify-content: center !important;
  }

  .rotating-word {
    min-width: 0 !important;
    max-width: 100% !important;
  }

  .hero-visual-wrap {
    min-height: 360px !important;
          }
        }
      `}</style>

    </section>
  )
}
