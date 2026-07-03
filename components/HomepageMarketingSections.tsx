'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.12, ease: EASE } }),
}
const fromLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } } }
const fromRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: EASE } } }
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: EASE } } }

// ─── Ad Slots ────────────────────────────────────────────────────────────────
function SideAdSlot({ side }: { side: 'left' | 'right' }) {
  return (
    <div className="hidden xl:flex flex-col items-center w-[160px] shrink-0 pt-10">
      <div className="ad-container ad-sidebar sticky top-24 flex flex-col items-center justify-center gap-3">
        {/* AdSense will auto-fill this container */}
        <ins className="adsbygoogle" style={{ display: 'block', width: 160, height: 600 }}
          data-ad-client="ca-pub-XXXXXXX" data-ad-slot="SIDEBAR_SLOT" data-ad-format="vertical" />
        <span style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-faint)', writingMode: 'vertical-rl' }}>
          Advertisement · 160×600
        </span>
      </div>
    </div>
  )
}

function InContentAd() {
  return (
    <div style={{ width: '100%', padding: '12px 0' }}>
      <div className="ad-container" style={{ width: '100%', maxWidth: 728, margin: '0 auto', minHeight: 90 }}>
        <ins className="adsbygoogle" style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXX" data-ad-slot="INCONTENT_SLOT" data-ad-format="auto" data-full-width-responsive="true" />
        <span style={{ fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-faint)' }}>
          Advertisement · 728×90
        </span>
      </div>
    </div>
  )
}

function PageRow({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-[960px] mx-auto px-4 md:px-8">{children}</div>
}

function Label({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span style={{ width: 24, height: 2, background: 'var(--accent)', display: 'inline-block', borderRadius: 2, flexShrink: 0 }} />
      <span style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>{text}</span>
    </div>
  )
}

function Divider() {
  return <div style={{ width: '100%', maxWidth: 960, margin: '0 auto', height: 1, background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />
}

// ─── Counter ─────────────────────────────────────────────────────────────────
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
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 18)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <motion.div ref={ref} variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center" style={{ padding: '32px 16px' }}>
      <div style={{ fontSize: 56, fontWeight: 900, color: 'var(--text-primary)', lineHeight: 1, letterSpacing: '-2px' }}>
        {count.toLocaleString()}<span style={{ color: 'var(--accent)' }}>{suffix}</span>
      </div>
      <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 12, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>{label}</p>
    </motion.div>
  )
}

// ─── Video Mockup ────────────────────────────────────────────────────────────
function VideoMockup() {
  return (
    <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ width: 260, height: 520, borderRadius: 40, background: 'var(--bg-secondary)', border: '3px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
        {/* Status bar */}
        <div style={{ height: 44, background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 50, height: 18, borderRadius: 10, background: 'var(--text-faint)' }} />
        </div>

        {/* Video area */}
        <div style={{ height: 160, background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'var(--accent-soft)', border: '2px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 18, marginLeft: 3, color: 'var(--accent-text)' }}>▶</span>
          </div>
          <div style={{ position: 'absolute', bottom: 8, left: 12, right: 12 }}>
            <div style={{ height: 3, background: 'var(--accent)', borderRadius: 2, width: '65%' }} />
          </div>
        </div>

        {/* Comments */}
        <div style={{ padding: '14px 12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)' }}>Comments</span>
            <span style={{ fontSize: 9, color: 'var(--text-muted)', background: 'var(--bg-card)', borderRadius: 6, padding: '2px 6px' }}>1.2K</span>
          </div>
          {[75, 60, 85, 55, 70].map((w, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: i === 2 ? 'var(--accent)' : 'var(--bg-card-hover)', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: 4, borderRadius: 2, background: i === 2 ? 'var(--accent-border)' : 'var(--text-faint)', width: `${w}%` }} />
              </div>
              {i === 2 && <span style={{ fontSize: 9, color: 'var(--accent)' }}>🏆</span>}
            </div>
          ))}
          {/* Winner banner */}
          <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ marginTop: 12, background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', borderRadius: 12, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: 8, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 11, color: '#fff' }}>🏆</span>
            </div>
            <div>
              <div style={{ height: 4, width: 50, background: 'var(--accent-border)', borderRadius: 2, marginBottom: 4 }} />
              <div style={{ height: 3, width: 35, background: 'var(--text-faint)', borderRadius: 2 }} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Shorts Mockup ───────────────────────────────────────────────────────────
function ShortsMockup() {
  return (
    <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ width: 200, height: 380, borderRadius: 32, background: 'var(--bg-secondary)', border: '2px solid var(--border)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.15em' }}>SHORTS</span>
            <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12 }}>
              <div style={{ height: 4, background: 'var(--text-faint)', borderRadius: 2, marginBottom: 6 }} />
              <div style={{ height: 4, background: 'var(--text-faint)', borderRadius: 2, width: '60%' }} />
            </div>
            <div style={{ position: 'absolute', right: 12, top: '40%', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center' }}>
              {['▶', '💬', '↗'].map((icon, i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--bg-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>{icon}</div>
              ))}
            </div>
          </div>
          <motion.div animate={{ scale: [1, 1.03, 1] }} transition={{ duration: 2.5, repeat: Infinity }} style={{ padding: 10, background: 'var(--accent-soft)', borderTop: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent-text)' }}>Winner Picked ✓</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Verify Mockup ───────────────────────────────────────────────────────────
function VerifyMockup() {
  return (
    <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
      <div style={{ borderRadius: 24, background: 'var(--bg-secondary)', border: '1px solid var(--border)', padding: 24, boxShadow: 'var(--shadow-lg)', maxWidth: 380 }}>
        {/* URL bar */}
        <div style={{ background: 'var(--bg-card)', borderRadius: 10, padding: '8px 14px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 10, color: 'var(--accent-text)' }}>🔒</span>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>ytgiveawaypicker.com/verify/gv_abc123</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontSize: 10, fontWeight: 800 }}>✓</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--accent-text)' }}>Verified Giveaway</span>
        </div>

        <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 16 }}>My YouTube Channel Giveaway</p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 16 }}>
          {[{ n: '1,240', l: 'Valid Entries' }, { n: '3', l: 'Winners' }, { n: 'keyword', l: 'Filter Used' }].map((s, i) => (
            <div key={i} style={{ background: 'var(--bg-card)', borderRadius: 10, padding: '10px 8px', textAlign: 'center' }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text-primary)' }}>{s.n}</div>
              <div style={{ fontSize: 9, color: 'var(--text-muted)', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Winners */}
        {['@winner_one', '@winner_two', '@winner_three'].map((name, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderTop: i === 0 ? `1px solid var(--border)` : 'none' }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 10, fontWeight: 800 }}>
              🏆
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>{name}</span>
            </div>
            <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--accent-text)', background: 'var(--accent-soft)', borderRadius: 6, padding: '2px 8px' }}>#{i + 1}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'Is YT Giveaway Picker completely free?', a: 'Yes — 100% free, no account, no limits. Paste a URL, load comments and pick winners instantly.' },
  { q: 'Does it work with YouTube Shorts?', a: 'Yes. Paste any youtube.com/shorts/ URL and it works identically — same filters, same verification system, same winner cards.' },
  { q: 'How do I prove my giveaway was fair?', a: 'Every draw generates a permanent public verification page at a unique URL. Share it with your audience so they can confirm the result.' },
  { q: 'Can I filter by keyword, hashtag or emoji?', a: 'Yes. Set required keywords, hashtags or emojis. Only comments matching your filters count as valid entries.' },
  { q: 'How many winners can I pick at once?', a: 'Pick 1, 3, 5 or enter any custom number. All winners appear on a single verification page.' },
  { q: 'Can I download winner cards?', a: 'Yes. Download PNG winner cards in multiple templates including a vertical Instagram Story format.' },
]

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', padding: '20px 24px',
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 16, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
          transition: 'border-color 0.3s, background 0.3s',
          borderColor: open ? 'var(--accent-border)' : 'var(--border)',
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--text-primary)' }}>{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.25 }}
          style={{ fontSize: 22, color: 'var(--accent)', flexShrink: 0, lineHeight: 1 }}>+</motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <div style={{ padding: '16px 24px 4px', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75 }}>{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── FEATURES ────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: '🎯', title: 'Truly Random Selection', desc: 'Cryptographically random algorithm — no bias, no manipulation. Every entry has an equal chance.' },
  { icon: '🚫', title: 'Duplicate Removal', desc: 'One entry per YouTube account automatically. Keeps your giveaway spam-free and genuinely fair.' },
  { icon: '#️⃣', title: 'Keyword Filter', desc: 'Require specific words, hashtags or campaign phrases. Only valid entries can win.' },
  { icon: '😊', title: 'Emoji Filter', desc: 'Filter by required emoji in comments. Perfect for engagement campaigns and Shorts giveaways.' },
  { icon: '⏱️', title: 'Time Window Filter', desc: 'Only count the first 20, 30, or 60 minutes of comments. Reward your most loyal fans.' },
  { icon: '✅', title: 'Public Verification', desc: 'Every draw generates a permanent /verify page anyone can open to confirm results.' },
]

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
export default function HomepageMarketingSections() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', gap: 0 }}>
        <SideAdSlot side="left" />

        <div style={{ flex: 1, minWidth: 0 }}>

          {/* SECTION 1: YouTube Videos */}
          <section style={{ padding: '100px 0' }}>
            <PageRow>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div variants={fromLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                  <Label text="YouTube Videos" />
                  <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: 20, color: 'var(--text-primary)' }}>
                    Pick winners from <span style={{ color: 'var(--accent)' }}>YouTube video</span> comments
                  </h2>
                  <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 24, maxWidth: 420 }}>
                    Paste any standard YouTube video URL. We load all public comments, apply your filters and randomly select verified winners in seconds. No login required.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {['Supports all youtube.com/watch URLs', 'Loads up to 10,000+ comments per video', 'One entry per account — spam proof', 'Every result publicly verifiable'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ color: 'var(--accent)', fontSize: 10, fontWeight: 700 }}>✓</span>
                        </div>
                        <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/#tool" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, fontSize: 14, fontWeight: 700, color: 'var(--accent-text)', textDecoration: 'none' }}>
                    Try it with a video <span>→</span>
                  </a>
                </motion.div>
                <motion.div variants={fromRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} style={{ display: 'flex', justifyContent: 'center' }}>
                  <VideoMockup />
                </motion.div>
              </div>
            </PageRow>
          </section>

          <Divider />

          {/* SECTION 2: YouTube Shorts */}
          <section style={{ padding: '100px 0' }}>
            <PageRow>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div variants={fromLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="md:order-2">
                  <Label text="YouTube Shorts" />
                  <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: 20, color: 'var(--text-primary)' }}>
                    Built for <span style={{ color: 'var(--accent)' }}>Shorts</span> giveaways too
                  </h2>
                  <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 24, maxWidth: 420 }}>
                    YouTube Shorts comments work differently under the hood — our tool handles both formats seamlessly with the exact same filters and verification system.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {['Supports youtube.com/shorts/ URLs', 'Time window filter for first-comment fans', 'Same filters, same verification system', 'Vertical winner cards for Instagram Stories'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ color: 'var(--accent)', fontSize: 10, fontWeight: 700 }}>✓</span>
                        </div>
                        <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="/#tool" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, fontSize: 14, fontWeight: 700, color: 'var(--accent-text)', textDecoration: 'none' }}>
                    Try it with a Short <span>→</span>
                  </a>
                </motion.div>
                <motion.div variants={fromRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} className="md:order-1" style={{ display: 'flex', justifyContent: 'center' }}>
                  <ShortsMockup />
                </motion.div>
              </div>
            </PageRow>
          </section>

          <InContentAd />
          <Divider />

          {/* SECTION 3: Features */}
          <section id="features" style={{ padding: '100px 0', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 400, background: 'var(--gradient-section)', borderRadius: '50%', pointerEvents: 'none' }} />
            <PageRow>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 60 }}>
                <Label text="Features" />
                <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>Everything you need</h2>
                <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 400, margin: '12px auto 0' }}>Fair, fast and fully transparent — every filter creators need in one free tool.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {FEATURES.map((f, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glow-card" style={{ padding: 28 }}>
                    <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </PageRow>
          </section>

          <Divider />

          {/* SECTION 4: Stats */}
          <section style={{ padding: '60px 0', background: 'var(--bg-tertiary)' }}>
            <PageRow>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 20 }}>
                <Label text="By the Numbers" />
                <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>Trusted by creators</h2>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-4">
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20 }}><Counter target={10000} suffix="+" label="Giveaways Picked" /></div>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20 }}><Counter target={500000} suffix="+" label="Comments Loaded" /></div>
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 20 }}><Counter target={25000} suffix="+" label="Winners Selected" /></div>
              </div>
            </PageRow>
          </section>

          <InContentAd />
          <Divider />

          {/* SECTION 5: How It Works */}
          <section id="how-it-works" style={{ padding: '100px 0' }}>
            <PageRow>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: 72 }}>
                <Label text="How It Works" />
                <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>Three steps. Done.</h2>
                <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 400, margin: '12px auto 0' }}>From URL to verified winner in under 60 seconds.</p>
              </motion.div>
              <div style={{ position: 'relative' }}>
                <div className="hidden md:block" style={{ position: 'absolute', top: 28, left: 'calc(16.66% + 28px)', right: 'calc(16.66% + 28px)', height: 1 }}>
                  <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
                    style={{ height: '100%', background: `linear-gradient(90deg, var(--accent), var(--accent-glow), var(--accent))`, transformOrigin: 'left' }} />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { num: '01', title: 'Paste Your URL', desc: 'Drop any YouTube video or Shorts link into the input bar. We extract the video ID automatically.' },
                    { num: '02', title: 'Set Your Filters', desc: 'Choose keywords, emojis, time window and how many winners to pick. Or run with no filters at all.' },
                    { num: '03', title: 'Pick & Verify', desc: 'Randomly select winners and instantly generate a public proof page you can share with your audience.' },
                  ].map((step, i) => (
                    <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', position: 'relative' }}>
                      <div style={{
                        width: 56, height: 56, borderRadius: 18,
                        background: 'var(--accent-soft)', border: '1px solid var(--accent-border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 24px', position: 'relative', zIndex: 1,
                      }}>
                        <span style={{ color: 'var(--accent)', fontWeight: 900, fontSize: 18 }}>{step.num}</span>
                      </div>
                      <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 12 }}>{step.title}</h3>
                      <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 240, margin: '0 auto' }}>{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </PageRow>
          </section>

          <Divider />

          {/* SECTION 6: Verification */}
          <section id="verification" style={{ padding: '100px 0', background: 'var(--bg-tertiary)' }}>
            <PageRow>
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div variants={fromLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                  <Label text="Verification System" />
                  <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-1.5px', marginBottom: 20, color: 'var(--text-primary)' }}>
                    100% <span style={{ color: 'var(--accent)' }}>Transparent</span> giveaways
                  </h2>
                  <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 36, maxWidth: 420 }}>
                    Every giveaway generates a permanent public verification page at a unique URL. Share it with your audience so they can confirm the winner was chosen fairly — no trust-me required.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {['Public verification URL generated instantly', 'Shows every filter used in the draw', 'Displays total valid entry count', 'Downloadable winner cards as shareable proof'].map((item, i) => (
                      <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                          <span style={{ color: 'var(--accent)', fontSize: 10, fontWeight: 700 }}>✓</span>
                        </div>
                        <span style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item}</span>
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
                <h2 style={{ fontSize: 'clamp(34px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>Common questions</h2>
              </motion.div>
              <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} i={i} />)}
              </div>
            </PageRow>
          </section>

          <Divider />

          {/* SECTION 8: CTA */}
          <section id="cta" style={{ padding: '120px 0', background: 'var(--bg-tertiary)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 200, background: 'var(--accent-glow)', filter: 'blur(80px)', borderRadius: '50%', pointerEvents: 'none' }} />
            <PageRow>
              <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ textAlign: 'center', position: 'relative' }}>
                <Label text="Start Now" />
                <h2 style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.02, letterSpacing: '-2.5px', marginBottom: 20, color: 'var(--text-primary)' }}>
                  Run your giveaway<br /><span style={{ color: 'var(--accent)' }}>fairly today.</span>
                </h2>
                <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 380, margin: '0 auto 48px', lineHeight: 1.7 }}>
                  Free forever. No signup. No limits. Paste your URL and pick verified winners in seconds.
                </p>
                <motion.a href="/#tool" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12, height: 58, padding: '0 40px',
                  borderRadius: 16, background: 'var(--accent)', color: '#fff', fontWeight: 900, fontSize: 17,
                  textDecoration: 'none', boxShadow: 'var(--shadow-accent)',
                }}>
                  Start Free <span style={{ fontSize: 22 }}>→</span>
                </motion.a>
                <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 20 }}>No account needed · Works with any YouTube video or Short</p>
              </motion.div>
            </PageRow>
          </section>

        </div>

        <SideAdSlot side="right" />
      </div>
    </div>
  )
}
