'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Ticker ──────────────────────────────────────────────────────────────────
const STEPS = [
  'Paste YouTube URL', 'Load All Comments', 'Set Keyword Filter',
  'Set Emoji Filter', 'Set Time Window', 'Pick Random Winners',
  'Generate Verification Page', 'Download Winner Cards', 'Share Proof Publicly',
]

function Ticker() {
  const doubled = [...STEPS, ...STEPS, ...STEPS]
  return (
    <div className="w-full overflow-hidden py-4" style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <motion.div
        className="flex whitespace-nowrap"
        style={{ gap: 48 }}
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="shrink-0 flex items-center" style={{ gap: 24, fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>
            {item}
            <span style={{ color: 'var(--accent)', fontSize: 7 }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// ─── Types ───────────────────────────────────────────────────────────────────
type HeroProps = {
  videoUrl: string
  setVideoUrl: (v: string) => void
  loading: boolean
  onLoad: () => void
}

// ─── Rotating Words ──────────────────────────────────────────────────────────
const ROTATE_WORDS = ['YouTube Videos', 'YouTube Shorts', 'From Any Channel']

// ─── Float Badge ─────────────────────────────────────────────────────────────
function FloatBadge({ user, text, delay, duration, offsetY, style }: any) {
  return (
    <motion.div
      className="floating-badge"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      style={{ position: 'absolute', zIndex: 10, ...style }}
    >
      <motion.div
        animate={{ y: [0, offsetY, 0] }}
        transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'color-mix(in srgb, var(--bg-secondary) 95%, transparent)',
          border: '1px solid var(--border)',
          borderRadius: 16, padding: '8px 14px',
          display: 'flex', alignItems: 'center', gap: 10,
          backdropFilter: 'blur(16px)',
          boxShadow: 'var(--shadow-card)',
          whiteSpace: 'nowrap',
        }}
      >
        <div style={{
          width: 28, height: 28, borderRadius: 8,
          background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700, color: 'var(--accent-text)',
        }}>
          {user[1]?.toUpperCase()}
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)' }}>{user}</p>
          <p style={{ fontSize: 10, color: 'var(--text-muted)' }}>{text}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Particles ───────────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 4,
  opacity: Math.random() * 0.3 + 0.05,
}))

// ─── 3D Tilt Card ────────────────────────────────────────────────────────────
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
    setTilt({ x: -(e.clientY - cy) / (rect.height / 2) * 12, y: (e.clientX - cx) / (rect.width / 2) * 12 })
  }, [])

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      style={{ perspective: 1000, width: '100%', maxWidth: 320, position: 'relative', zIndex: 2 }}
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y, scale: hovered ? 1.03 : 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{
          transformStyle: 'preserve-3d', borderRadius: 24,
          background: 'linear-gradient(145deg, var(--bg-secondary), var(--bg-tertiary))',
          border: '1px solid var(--accent-border)',
          boxShadow: hovered ? `var(--shadow-lg), 0 0 60px var(--accent-glow)` : 'var(--shadow-lg)',
          padding: 20, position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Inner glow */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 24, pointerEvents: 'none',
          background: hovered ? 'radial-gradient(ellipse at 30% 30%, var(--accent-glow), transparent 70%)' : 'none',
          transition: 'background 0.4s',
        }} />

        {/* Video thumbnail mock */}
        <motion.div style={{ transform: 'translateZ(30px)', marginBottom: 14 }}>
          <div style={{
            borderRadius: 14,
            background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
            padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12,
              background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ fontSize: 18, marginLeft: 3, color: 'var(--accent-text)' }}>▶</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 8, background: 'var(--text-faint)', borderRadius: 4, marginBottom: 6, width: '78%' }} />
              <div style={{ height: 6, background: 'var(--text-faint)', borderRadius: 4, width: '52%', opacity: 0.5 }} />
            </div>
          </div>
        </motion.div>

        {/* Comments label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
          <span style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>1,240 Comments</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
        </div>

        {/* Comment rows */}
        {[
          { w: 85, highlight: false, z: 10 },
          { w: 70, highlight: false, z: 8 },
          { w: 90, highlight: true, z: 20 },
          { w: 65, highlight: false, z: 6 },
          { w: 75, highlight: false, z: 4 },
        ].map((row, i) => (
          <motion.div key={i} style={{ transform: `translateZ(${row.z}px)`, marginBottom: 6 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: row.highlight ? 'var(--accent-soft)' : 'var(--bg-card)',
              border: `1px solid ${row.highlight ? 'var(--accent-border)' : 'var(--border)'}`,
              borderRadius: 10, padding: '7px 10px',
            }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, background: row.highlight ? 'var(--accent-soft)' : 'var(--bg-card-hover)' }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: 5, borderRadius: 3, background: row.highlight ? 'var(--accent-border)' : 'var(--text-faint)', width: `${row.w}%` }} />
              </div>
              {row.highlight && <span style={{ fontSize: 10, color: 'var(--accent)', fontWeight: 700 }}>🏆</span>}
            </div>
          </motion.div>
        ))}

        {/* Winner badge */}
        <motion.div
          style={{ transform: 'translateZ(40px)', marginTop: 10 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div style={{
            background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
            borderRadius: 14, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: 14, fontWeight: 800 }}>🏆</span>
            </div>
            <div>
              <p style={{ fontSize: 10, color: 'var(--accent-text)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Winner Selected!</p>
              <p style={{ fontSize: 13, fontWeight: 800, color: 'var(--text-primary)' }}>@channel_winner</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

// ─── Main Hero ───────────────────────────────────────────────────────────────
export default function Hero({ videoUrl, setVideoUrl, loading, onLoad }: HeroProps) {
  const [wordIdx, setWordIdx] = useState(0)

  useState(() => {
    const interval = setInterval(() => setWordIdx(p => (p + 1) % ROTATE_WORDS.length), 3000)
    return () => clearInterval(interval)
  })

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* BG gradient */}
      <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-hero)', pointerEvents: 'none', zIndex: 0 }} />

      {/* Particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}>
        {PARTICLES.map(p => (
          <motion.div
            key={p.id}
            animate={{ y: [0, -30, 0], opacity: [p.opacity, p.opacity * 2, p.opacity] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
              width: p.size, height: p.size, borderRadius: '50%', background: 'var(--accent)',
            }}
          />
        ))}
      </div>

      {/* Ticker */}
      <Ticker />

      {/* Hero Content */}
      <div
        className="hero-grid"
        style={{
          position: 'relative', zIndex: 2,
          maxWidth: 1280, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 64, alignItems: 'center',
          padding: '80px 40px 60px',
        }}
      >
        {/* LEFT — Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
              borderRadius: 30, padding: '6px 16px', fontSize: 12, fontWeight: 600, color: 'var(--accent-text)',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
              Free · No signup · 10,000+ giveaways picked
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <h1 style={{ fontSize: 'clamp(38px, 5.5vw, 64px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-2px', color: 'var(--text-primary)' }}>
              Pick Giveaway{' '}
              <span style={{ color: 'var(--accent)', position: 'relative' }}>
                Winners
                <svg style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', height: 8 }} viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0 6 Q50 0 100 4 T200 3" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>{' '}
              from{' '}
              <span className="rotating-word" style={{ display: 'inline-block', minWidth: 300 }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIdx}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    style={{ display: 'inline-block', color: 'var(--text-primary)' }}
                  >
                    {ROTATE_WORDS[wordIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }}
            style={{ fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 500 }}
          >
            Load comments from any YouTube video or Short, apply filters and randomly select verified winners in seconds.
          </motion.p>

          {/* Input */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}>
            <div className="hero-input-row" style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <input
                type="url" inputMode="url" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
                placeholder="Paste YouTube or Shorts URL..."
                value={videoUrl}
                onChange={e => setVideoUrl(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !loading) onLoad() }}
                style={{
                  flex: 1, height: 54, borderRadius: 16, fontSize: 15,
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  color: 'var(--text-primary)', padding: '0 20px', outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
              <motion.button
                onClick={onLoad}
                disabled={loading || !videoUrl.trim()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  height: 54, padding: '0 28px', borderRadius: 16,
                  background: 'var(--accent)', color: '#fff',
                  fontWeight: 800, fontSize: 15, border: 'none',
                  cursor: loading || !videoUrl.trim() ? 'not-allowed' : 'pointer',
                  opacity: loading || !videoUrl.trim() ? 0.6 : 1,
                  display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
                  boxShadow: 'var(--shadow-accent)', transition: 'opacity 0.2s',
                }}
              >
                {loading ? (
                  <>
                    <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} style={{ display: 'inline-block', fontSize: 16 }}>⟳</motion.span>
                    Loading...
                  </>
                ) : 'Load Comments'}
              </motion.button>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', paddingLeft: 4, marginTop: 8 }}>
              Supports youtube.com/watch · youtube.com/shorts · youtu.be
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }} style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {[
              { num: '10K+', label: 'Giveaways' },
              { num: '500K+', label: 'Comments Loaded' },
              { num: '100%', label: 'Free Forever' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: 'var(--accent)' }}>{s.num}</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — 3D Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-visual-wrap"
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 460 }}
        >
          <FloatBadge user="@creator_fan" text="giveaway! 🎉" delay={0.6} duration={6} offsetY={-14} style={{ top: '5%', left: '-8%' }} />
          <FloatBadge user="@yt_subscriber" text="#giveaway 🔥" delay={1.8} duration={7} offsetY={-10} style={{ bottom: '18%', left: '-12%' }} />
          <FloatBadge user="@loyal_viewer" text="Pick me! 🏆" delay={1.2} duration={5.5} offsetY={-12} style={{ top: '10%', right: '-10%' }} />
          <FloatBadge user="@shorts_fan" text="love this ❤️" delay={2.5} duration={6.5} offsetY={-16} style={{ bottom: '22%', right: '-8%' }} />
          <TiltCard />

          {/* YT badge */}
          <motion.div
            className="floating-badge"
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}
            style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', zIndex: 20 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                background: 'color-mix(in srgb, var(--bg-primary) 95%, transparent)',
                border: '1px solid var(--accent-border)', borderRadius: 40, padding: '6px 16px',
                display: 'flex', alignItems: 'center', gap: 8,
                backdropFilter: 'blur(12px)', boxShadow: 'var(--shadow-card)', whiteSpace: 'nowrap',
              }}
            >
              <div style={{ width: 22, height: 22, borderRadius: 6, background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontSize: 10, marginLeft: 2 }}>▶</span>
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>YouTube Giveaway Picker</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(transparent, var(--bg-primary))', pointerEvents: 'none', zIndex: 3 }} />

      <style>{`
        .rotating-word { min-width: 300px; }
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; padding: 64px 20px 44px !important; }
          .hero-visual-wrap { min-height: 420px !important; overflow: hidden !important; }
          .floating-badge { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-grid { padding: 48px 16px 32px !important; }
          .hero-input-row { flex-direction: column !important; }
          .hero-input-row button { width: 100% !important; justify-content: center !important; }
          .rotating-word { min-width: 0 !important; max-width: 100% !important; }
          .hero-visual-wrap { min-height: 360px !important; }
        }
      `}</style>
    </section>
  )
}
