'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// ─── Animation Variants ──────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: EASE },
  }),
}
const fromLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
}
const fromRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } },
}
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } },
}

// ─── Sticky Side Ad Slot ──────────────────────────────────────────────────────
// Rendered ONCE — wraps entire page content. Hidden below xl (1280px).
function AdSlot({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="hidden xl:flex flex-col items-center w-[160px] shrink-0 pt-10">
      <div
        className="sticky top-24 w-[160px] h-[600px] flex flex-col items-center justify-center gap-3 rounded-xl"
        style={{
          background: 'rgba(163,230,53,0.02)',
          border: '1px dashed rgba(163,230,53,0.1)',
        }}
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(163,230,53,0.06)' }}
        >
          <span style={{ fontSize: 11, color: 'rgba(163,230,53,0.3)' }}>$</span>
        </div>
        <span
          style={{
            fontSize: 9,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(163,230,53,0.15)',
            writingMode: 'vertical-rl',
          }}
        >
          Advertisement · 160×600
        </span>
      </div>
    </div>
  )
}

// ─── In-Content Ad Banner ─────────────────────────────────────────────────────
// Placed between sections — shows after every 2 content sections.
function InContentAd() {
  return (
    <div
      style={{
        width: '100%',
        padding: '12px 0',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 728,
          margin: '0 auto',
          height: 90,
          borderRadius: 12,
          background: 'rgba(163,230,53,0.02)',
          border: '1px dashed rgba(163,230,53,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <span
          style={{
            fontSize: 9,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(163,230,53,0.15)',
          }}
        >
          Advertisement · 728×90
        </span>
      </div>
    </div>
  )
}

// ─── Page Content Row (NO side ads — ads are in outer wrapper) ───────────────
function PageRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[960px] mx-auto px-4 md:px-8">
      {children}
    </div>
  )
}

// ─── Section Label ───────────────────────────────────────────────────────────
function Label({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span
        style={{
          width: 24,
          height: 2,
          background: '#a3e635',
          display: 'inline-block',
          borderRadius: 2,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.35)',
          fontWeight: 600,
        }}
      >
        {text}
      </span>
    </div>
  )
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let current = 0
    const step = target / 80
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 18)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center"
      style={{ padding: '32px 16px' }}
    >
      <div style={{ fontSize: 56, fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-2px' }}>
        {count.toLocaleString()}
        <span style={{ color: '#a3e635' }}>{suffix}</span>
      </div>
      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
        {label}
      </p>
    </motion.div>
  )
}

// ─── Video Phone Mockup ───────────────────────────────────────────────────────
function VideoMockup() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div
        style={{
          width: 260,
          height: 520,
          borderRadius: 40,
          background: '#0a0d12',
          border: '3px solid rgba(255,255,255,0.1)',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        <div style={{ background: '#0d1117', height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: 60, height: 5, borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />
        </div>

        <div style={{ padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(163,230,53,0.12), rgba(163,230,53,0.04))', border: '1px solid rgba(163,230,53,0.18)', borderRadius: 14, padding: 12, display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(163,230,53,0.15)', border: '1px solid rgba(163,230,53,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#a3e635', fontSize: 16, marginLeft: 3 }}>▶</span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 7, background: 'rgba(255,255,255,0.15)', borderRadius: 4, marginBottom: 5, width: '80%' }} />
              <div style={{ height: 5, background: 'rgba(255,255,255,0.07)', borderRadius: 4, width: '55%' }} />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 2px' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Comments</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.05)' }} />
          </div>

          {[90, 70, 80, 60, 75].map((w, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, background: i === 2 ? 'rgba(163,230,53,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${i === 2 ? 'rgba(163,230,53,0.15)' : 'rgba(255,255,255,0.04)'}`, borderRadius: 12, padding: '8px 10px' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: i === 2 ? 'rgba(163,230,53,0.2)' : 'rgba(255,255,255,0.07)', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: 6, background: i === 2 ? 'rgba(163,230,53,0.3)' : 'rgba(255,255,255,0.1)', borderRadius: 3, marginBottom: 5, width: '45%' }} />
                <div style={{ height: 5, background: 'rgba(255,255,255,0.05)', borderRadius: 3, width: `${w}%` }} />
              </div>
              {i === 2 && (
                <span style={{ fontSize: 9, color: '#a3e635', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>🏆</span>
              )}
            </div>
          ))}

          <div style={{ background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.2)', borderRadius: 14, padding: '10px 14px', textAlign: 'center', marginTop: 4 }}>
            <div style={{ fontSize: 11, color: '#a3e635', fontWeight: 700, letterSpacing: '0.05em' }}>🏆 Winner Selected!</div>
            <div style={{ fontSize: 13, color: '#fff', fontWeight: 800, marginTop: 4 }}>@channel_winner</div>
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)', width: 160, height: 24, background: 'rgba(163,230,53,0.15)', filter: 'blur(24px)', borderRadius: '50%' }} />
    </motion.div>
  )
}

// ─── Shorts Phone Mockup ──────────────────────────────────────────────────────
function ShortsMockup() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <div
        style={{
          width: 210,
          height: 430,
          borderRadius: 36,
          background: '#0a0d12',
          border: '3px solid rgba(255,255,255,0.1)',
          overflow: 'hidden',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        <div style={{ background: '#0d1117', height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: 48, height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.08)' }} />
        </div>

        <div style={{ position: 'relative', height: 'calc(100% - 24px)', background: 'linear-gradient(180deg, #0d1a04 0%, #0a0d12 100%)' }}>
          <div style={{ position: 'absolute', top: 10, left: 0, right: 0, display: 'flex', alignItems: 'center', gap: 6, padding: '0 12px' }}>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.12)' }} />
            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: '0.15em' }}>SHORTS</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.12)' }} />
          </div>

          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -60%)', textAlign: 'center' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', border: '2px solid rgba(163,230,53,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', background: 'rgba(163,230,53,0.08)' }}>
              <span style={{ color: '#a3e635', fontSize: 18, marginLeft: 4 }}>▶</span>
            </div>
          </div>

          <div style={{ position: 'absolute', bottom: 60, left: 8, right: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[75, 85, 65].map((w, i) => (
              <div key={i} style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', borderRadius: 10, padding: '7px 10px', display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                <div style={{ height: 5, background: 'rgba(255,255,255,0.18)', borderRadius: 3, flex: 1, maxWidth: `${w}%` }} />
              </div>
            ))}
          </div>

          <div style={{ position: 'absolute', bottom: 10, left: 8, right: 8, background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.22)', borderRadius: 12, padding: '8px 10px', textAlign: 'center' }}>
            <div style={{ fontSize: 10, color: '#a3e635', fontWeight: 700 }}>Winner Picked ✓</div>
            <div style={{ fontSize: 12, color: '#fff', fontWeight: 800, marginTop: 2 }}>@shorts_winner</div>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: -16, left: '50%', transform: 'translateX(-50%)', width: 120, height: 18, background: 'rgba(163,230,53,0.12)', filter: 'blur(18px)', borderRadius: '50%' }} />
    </motion.div>
  )
}

// ─── Verification Browser Mockup ──────────────────────────────────────────────
function VerifyMockup() {
  return (
    <div
      style={{
        background: '#0a0d12',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 20,
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
      }}
    >
      <div style={{ background: '#0d1117', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57', '#FEBC2E', '#28C840'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.8 }} />
          ))}
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 7, height: 24, display: 'flex', alignItems: 'center', padding: '0 10px', margin: '0 6px' }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>
            ytgiveawaypicker.com/verify/<span style={{ color: '#a3e635' }}>gv_abc123</span>
          </span>
        </div>
      </div>

      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ background: 'rgba(163,230,53,0.05)', border: '1px solid rgba(163,230,53,0.12)', borderRadius: 14, padding: '12px 16px', textAlign: 'center' }}>
          <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 4 }}>Verified Giveaway</div>
          <div style={{ fontSize: 15, color: '#fff', fontWeight: 800 }}>My YouTube Channel Giveaway</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[['1,240', 'Valid Entries'], ['3', 'Winners'], ['keyword', 'Filter Used']].map(([val, lbl], i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: '10px 8px', textAlign: 'center' }}>
              <div style={{ fontSize: 14, color: '#fff', fontWeight: 800 }}>{val}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginTop: 3 }}>{lbl}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {[['@winner_one', 'Comment: "giveaway 🎉"'], ['@winner_two', 'Comment: "giveaway love this"'], ['@winner_three', 'Comment: "giveaway 🔥🔥"']].map(([handle, comment], i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 12, padding: '10px 12px' }}>
              <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(163,230,53,0.12)', border: '1px solid rgba(163,230,53,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>🏆</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, color: '#fff', fontWeight: 700 }}>{handle}</div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{comment}</div>
              </div>
              <span style={{ fontSize: 11, color: '#a3e635', fontWeight: 700, flexShrink: 0 }}>#{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: '🎯', title: 'Truly Random Selection', desc: 'Cryptographically random algorithm — no bias, no manipulation. Every entry has an equal chance.' },
  { icon: '🚫', title: 'Duplicate Removal', desc: 'One entry per YouTube account automatically. Keeps your giveaway spam-free and genuinely fair.' },
  { icon: '#️⃣', title: 'Keyword Filter', desc: 'Require specific words, hashtags or campaign phrases. Only valid entries can win.' },
  { icon: '😊', title: 'Emoji Filter', desc: 'Filter by required emoji in comments. Perfect for engagement campaigns and Shorts giveaways.' },
  { icon: '⏱️', title: 'Time Window Filter', desc: 'Only count the first 20, 30, or 60 minutes of comments. Reward your most loyal fans.' },
  { icon: '✅', title: 'Public Verification', desc: 'Every draw generates a permanent /verify page anyone can open to confirm results.' },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Is YT Giveaway Picker completely free?', a: 'Yes — 100% free. No account, no payment, no hidden limits. Just paste your URL and pick winners instantly.' },
  { q: 'Does it work with YouTube Shorts?', a: 'Absolutely. It fully supports YouTube Shorts URLs with the exact same filters, winner selection and verification system as regular videos.' },
  { q: 'How do I prove my giveaway was fair?', a: 'Every draw automatically generates a public verification page at a unique URL. Share it and your audience can open it to see exactly how the winner was chosen — filters, entry count, everything.' },
  { q: 'Can I filter by keyword, hashtag or emoji?', a: 'Yes. You can require specific words, hashtags, emojis or custom phrases. Only comments that include them count as valid entries. Combine multiple filters at once.' },
  { q: 'How many winners can I pick at once?', a: 'Pick 1, 3, 5, or any custom number of winners from a single draw. All winners are shown together on the verification page.' },
  { q: 'Can I download winner cards?', a: 'Yes. After selecting winners you can download PNG winner cards including a vertical Instagram Story format — perfect for sharing the results publicly.' },
]

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      custom={i}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        border: `1px solid ${open ? 'rgba(163,230,53,0.2)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 16,
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 22px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: 16,
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ fontSize: 24, color: '#a3e635', lineHeight: 1, flexShrink: 0, fontWeight: 300 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ padding: '0 22px 20px', fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Divider ─────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div style={{ width: '100%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HomepageMarketingSections() {
  return (
    <div style={{ background: '#0B0F19', color: '#fff', overflowX: 'hidden' }}>

      {/* ── OUTER WRAPPER: sticky side ads + all content ─────────────────── */}
      <div className="flex items-start w-full max-w-[1400px] mx-auto">

        {/* LEFT STICKY AD — renders once, sticks as user scrolls */}
        <AdSlot side="left" />

        {/* ── ALL CONTENT SECTIONS ───────────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* SECTION 1: YouTube Videos */}
          <section style={{ padding: '100px 0' }}>
            <PageRow>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div variants={fromLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                  <Label text="YouTube Videos" />
                  <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: 20 }}>
                    Pick winners from<br />
                    <span style={{ color: '#a3e635' }}>YouTube</span> video<br />
                    comments
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 36, maxWidth: 420 }}>
                    Paste any standard YouTube video URL. We load all public comments,
                    apply your filters and randomly select verified winners in seconds.
                    No login required.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
                    {[
                      'Supports all youtube.com/watch URLs',
                      'Loads up to 10,000+ comments per video',
                      'One entry per account — spam proof',
                      'Every result publicly verifiable',
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}
                      >
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a3e635', flexShrink: 0 }} />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  <motion.a
                    href="/#tool"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      height: 50,
                      padding: '0 28px',
                      borderRadius: 14,
                      background: '#a3e635',
                      color: '#000',
                      fontWeight: 800,
                      fontSize: 14,
                      textDecoration: 'none',
                    }}
                  >
                    Try it with a video
                    <span style={{ fontSize: 18 }}>→</span>
                  </motion.a>
                </motion.div>

                <motion.div
                  variants={fromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <VideoMockup />
                </motion.div>
              </div>
            </PageRow>
          </section>

          <Divider />

          {/* SECTION 2: YouTube Shorts */}
          <section style={{ padding: '100px 0', background: '#0a0d12' }}>
            <PageRow>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  variants={fromLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  style={{ display: 'flex', justifyContent: 'center' }}
                  className="order-2 md:order-1"
                >
                  <ShortsMockup />
                </motion.div>

                <motion.div
                  variants={fromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="order-1 md:order-2"
                >
                  <Label text="YouTube Shorts" />
                  <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: 20 }}>
                    Built for<br />
                    <span style={{ color: '#a3e635' }}>Shorts</span><br />
                    giveaways too
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 36, maxWidth: 420 }}>
                    YouTube Shorts comments work differently under the hood — our tool
                    handles both formats seamlessly with the exact same filters and
                    verification system.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
                    {[
                      'Supports youtube.com/shorts/ URLs',
                      'Time window filter for first-comment fans',
                      'Same filters, same verification system',
                      'Vertical winner cards for Instagram Stories',
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.65)' }}
                      >
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a3e635', flexShrink: 0 }} />
                        {item}
                      </motion.div>
                    ))}
                  </div>
                  <motion.a
                    href="/#tool"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 10,
                      height: 50,
                      padding: '0 28px',
                      borderRadius: 14,
                      background: '#a3e635',
                      color: '#000',
                      fontWeight: 800,
                      fontSize: 14,
                      textDecoration: 'none',
                    }}
                  >
                    Try it with a Short
                    <span style={{ fontSize: 18 }}>→</span>
                  </motion.a>
                </motion.div>
              </div>
            </PageRow>
          </section>

          {/* ── IN-CONTENT AD #1 — after sections 1 & 2 ──────────────────── */}
          <div style={{ background: '#0a0d12', padding: '24px 32px' }}>
            <InContentAd />
          </div>

          <Divider />

          {/* SECTION 3: Features Grid */}
          <section id="features" style={{ padding: '100px 0' }}>
            <PageRow>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 64 }}>
                <Label text="Features" />
                <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 16 }}>
                  Everything you need
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
                  Fair, fast and fully transparent — every filter creators need in one free tool.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {FEATURES.map((f, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -8, borderColor: 'rgba(163,230,53,0.28)' }}
                    style={{
                      background: '#0a0d12',
                      border: '1px solid rgba(255,255,255,0.07)',
                      borderRadius: 20,
                      padding: '28px 24px',
                      cursor: 'default',
                      transition: 'border-color 0.3s',
                    }}
                  >
                    <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </PageRow>
          </section>

          <Divider />

          {/* SECTION 4: Stats */}
          <section id="stats" style={{ padding: '90px 0', background: '#0a0d12' }}>
            <PageRow>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 60 }}>
                <Label text="By the Numbers" />
                <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px' }}>
                  Trusted by creators
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20 }}>
                  <Counter target={10000} suffix="+" label="Giveaways Picked" />
                </div>
                <div style={{ background: 'rgba(163,230,53,0.04)', border: '1px solid rgba(163,230,53,0.1)', borderRadius: 20 }}>
                  <Counter target={500000} suffix="+" label="Comments Loaded" />
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20 }}>
                  <Counter target={25000} suffix="+" label="Winners Selected" />
                </div>
              </div>
            </PageRow>
          </section>

          {/* ── IN-CONTENT AD #2 — after sections 3 & 4 ──────────────────── */}
          <div style={{ background: '#0a0d12', padding: '24px 32px' }}>
            <InContentAd />
          </div>

          <Divider />

          {/* SECTION 5: How It Works */}
          <section id="how-it-works" style={{ padding: '100px 0' }}>
            <PageRow>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 72 }}>
                <Label text="How It Works" />
                <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 14 }}>
                  Three steps. Done.
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 400, margin: '0 auto' }}>
                  From URL to verified winner in under 60 seconds.
                </p>
              </motion.div>

              <div style={{ position: 'relative' }}>
                <div className="hidden md:block" style={{ position: 'absolute', top: 28, left: 'calc(16.66% + 28px)', right: 'calc(16.66% + 28px)', height: 1 }}>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, rgba(163,230,53,0.5), rgba(163,230,53,0.2), rgba(163,230,53,0.5))', transformOrigin: 'left' }}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { num: '01', title: 'Paste Your URL', desc: 'Drop any YouTube video or Shorts link into the input bar. We extract the video ID automatically.' },
                    { num: '02', title: 'Set Your Filters', desc: 'Choose keywords, emojis, time window and how many winners to pick. Or run with no filters at all.' },
                    { num: '03', title: 'Pick & Verify', desc: 'Randomly select winners and instantly generate a public proof page you can share with your audience.' },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      style={{ textAlign: 'center', position: 'relative' }}
                    >
                      <div style={{ width: 56, height: 56, borderRadius: 18, background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', position: 'relative', zIndex: 1 }}>
                        <span style={{ color: '#a3e635', fontWeight: 900, fontSize: 18 }}>{step.num}</span>
                      </div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 12 }}>{step.title}</h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: 240, margin: '0 auto' }}>{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </PageRow>
          </section>

          <Divider />

          {/* SECTION 6: Verification */}
          <section id="verification" style={{ padding: '100px 0', background: '#0a0d12' }}>
            <PageRow>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div variants={fromLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                  <Label text="Verification System" />
                  <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: 20 }}>
                    100%{' '}
                    <span style={{ color: '#a3e635' }}>Transparent</span>{' '}
                    giveaways
                  </h2>
                  <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 36, maxWidth: 420 }}>
                    Every giveaway generates a permanent public verification page at a
                    unique URL. Share it with your audience so they can confirm the
                    winner was chosen fairly — no trust-me required.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {[
                      'Public verification URL generated instantly',
                      'Shows every filter used in the draw',
                      'Displays total valid entry count',
                      'Downloadable winner cards as shareable proof',
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        custom={i}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}
                      >
                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(163,230,53,0.08)', border: '1px solid rgba(163,230,53,0.22)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                          <span style={{ color: '#a3e635', fontSize: 10, fontWeight: 700 }}>✓</span>
                        </div>
                        <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.55 }}>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fromRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                  <VerifyMockup />
                </motion.div>
              </div>
            </PageRow>
          </section>

          <Divider />

          {/* SECTION 7: FAQ */}
          <section id="faq" style={{ padding: '100px 0' }}>
            <PageRow>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 60 }}>
                <Label text="FAQ" />
                <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px' }}>
                  Common questions
                </h2>
              </motion.div>
              <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {FAQS.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} i={i} />
                ))}
              </div>
            </PageRow>
          </section>

          <Divider />

          {/* SECTION 8: Final CTA */}
          <section id="cta" style={{ padding: '120px 0', background: '#0a0d12', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 200, background: 'rgba(163,230,53,0.05)', filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none' }} />

            <PageRow>
              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ textAlign: 'center', position: 'relative' }}
              >
                <Label text="Start Now" />
                <h2 style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-2.5px', marginBottom: 20 }}>
                  Run your giveaway<br />
                  <span style={{ color: '#a3e635' }}>fairly today.</span>
                </h2>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', maxWidth: 380, margin: '0 auto 48px', lineHeight: 1.7 }}>
                  Free forever. No signup. No limits. Paste your URL and pick verified winners in seconds.
                </p>
                <motion.a
                  href="/#tool"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    height: 58,
                    padding: '0 40px',
                    borderRadius: 16,
                    background: '#a3e635',
                    color: '#000',
                    fontWeight: 900,
                    fontSize: 17,
                    textDecoration: 'none',
                    boxShadow: '0 12px 40px rgba(163,230,53,0.2)',
                  }}
                >
                  Start Free
                  <span style={{ fontSize: 22 }}>→</span>
                </motion.a>
                <p style={{ fontSize: 12, color: '#0B0F19', marginTop: 20, letterSpacing: '0.05em' }}>
                  No account needed · Works with any YouTube video or Short
                </p>
              </motion.div>
            </PageRow>
          </section>

        </div>
        {/* END content sections */}

        {/* RIGHT STICKY AD — renders once, sticks as user scrolls */}
        <AdSlot side="right" />

      </div>
      {/* END outer wrapper */}

    </div>
  )
}
