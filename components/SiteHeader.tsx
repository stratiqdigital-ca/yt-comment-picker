'use client'

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { motion, AnimatePresence } from 'framer-motion'

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180, scale: [1, 0.8, 1] }}
        transition={{ duration: 0.4 }}
      >
        {theme === 'dark' ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </motion.div>
    </button>
  )
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl"
      style={{
        background: 'color-mix(in srgb, var(--bg-primary) 85%, transparent)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <img src="/icon.svg" alt="YT Giveaway Picker" width={34} height={34} className="rounded-lg" />
          <span className="font-extrabold text-lg" style={{ color: 'var(--text-primary)' }}>
            <span style={{ color: 'var(--accent)' }}>YT</span> Giveaway Picker
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <a href="/#tool" className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--bg-card-hover)]" style={{ color: 'var(--text-secondary)' }}>
            Tool
          </a>

          <div className="relative group">
            <button className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--bg-card-hover)] flex items-center gap-1.5" style={{ color: 'var(--text-secondary)' }}>
              Learn
              <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 top-full pt-3 hidden group-hover:block" style={{ zIndex: 60 }}>
              <div
                className="w-72 rounded-2xl p-2 shadow-xl"
                style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}
              >
                {[
                  { href: '/youtube-comment-picker', title: 'YouTube Comment Picker', desc: 'Pick winners from YouTube comments.' },
                  { href: '/youtube-shorts-giveaway-picker', title: 'YouTube Shorts Picker', desc: 'Giveaway picker for Shorts comments.' },
                  { href: '/random-youtube-comment-picker', title: 'Random Comment Picker', desc: 'Random YouTube winner generator.' },
                ].map(item => (
                  <a key={item.href} href={item.href} className="block rounded-xl px-4 py-3 transition-colors hover:bg-[var(--bg-card-hover)]">
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/#features" className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--bg-card-hover)]" style={{ color: 'var(--text-secondary)' }}>Features</a>
          <a href="/#how-it-works" className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--bg-card-hover)]" style={{ color: 'var(--text-secondary)' }}>How it works</a>
          <a href="/#faq" className="px-3.5 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-[var(--bg-card-hover)]" style={{ color: 'var(--text-secondary)' }}>FAQ</a>
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="/#tool"
            className="hidden md:flex h-10 px-5 rounded-xl font-bold items-center text-sm transition-all hover:scale-[1.03]"
            style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}
          >
            Start Free
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl transition gap-1.5"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{ background: 'var(--text-primary)' }} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} style={{ background: 'var(--text-primary)' }} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: 'var(--text-primary)' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-primary)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              <a href="/#tool" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Tool</a>

              <div className="py-3" style={{ borderBottom: '1px solid var(--border)' }}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--text-muted)' }}>Learn</p>
                {[
                  { href: '/youtube-comment-picker', title: 'YouTube Comment Picker', desc: 'Pick winners from YouTube comments.' },
                  { href: '/youtube-shorts-giveaway-picker', title: 'YouTube Shorts Picker', desc: 'Giveaway picker for Shorts comments.' },
                  { href: '/random-youtube-comment-picker', title: 'Random Comment Picker', desc: 'Random YouTube winner generator.' },
                ].map(item => (
                  <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2.5 mb-1 hover:bg-[var(--bg-card-hover)]">
                    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{item.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                  </a>
                ))}
              </div>

              <a href="/#features" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>Features</a>
              <a href="/#how-it-works" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium" style={{ color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)' }}>How it works</a>
              <a href="/#faq" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>FAQ</a>

              <a
                href="/#tool"
                onClick={() => setMenuOpen(false)}
                className="mt-3 w-full h-12 rounded-xl font-bold flex items-center justify-center text-sm"
                style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}
              >
                Start Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
