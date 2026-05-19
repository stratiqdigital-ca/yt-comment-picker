'use client'

import { useState } from 'react'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="font-black text-xl">
          <span className="text-lime-400">YT</span> Giveaway Picker
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="/#tool" className="hover:text-white">
            Tool
          </a>

          <div className="relative group">
            <button className="hover:text-white flex items-center gap-1">
              Learn
              <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute left-0 top-full pt-4 hidden group-hover:block">
              <div className="w-72 rounded-2xl border border-white/10 bg-[#101827] p-3 shadow-2xl">
                <a href="/youtube-comment-picker" className="block rounded-xl px-4 py-3 hover:bg-white/5">
                  <p className="font-bold text-white">YouTube Comment Picker</p>
                  <p className="text-xs text-zinc-500 mt-1">Pick winners from YouTube comments.</p>
                </a>
                <a href="/youtube-shorts-giveaway-picker" className="block rounded-xl px-4 py-3 hover:bg-white/5">
                  <p className="font-bold text-white">YouTube Shorts Picker</p>
                  <p className="text-xs text-zinc-500 mt-1">Giveaway picker for Shorts comments.</p>
                </a>
                <a href="/random-youtube-comment-picker" className="block rounded-xl px-4 py-3 hover:bg-white/5">
                  <p className="font-bold text-white">Random Comment Picker</p>
                  <p className="text-xs text-zinc-500 mt-1">Random YouTube winner generator.</p>
                </a>
              </div>
            </div>
          </div>

          <a href="/#features" className="hover:text-white">Features</a>
          <a href="/#how-it-works" className="hover:text-white">How it works</a>
          <a href="/#faq" className="hover:text-white">FAQ</a>
        </nav>

        {/* Desktop CTA + Mobile Hamburger Row */}
        <div className="flex items-center gap-3">
          <a
            href="/#tool"
            className="hidden md:flex h-10 px-4 rounded-xl bg-lime-400 text-black font-black items-center text-sm"
          >
            Start Free
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-white/10 transition gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0F19] border-t border-white/10 px-6 py-4 flex flex-col gap-1">

          <a
            href="/#tool"
            onClick={() => setMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-3 text-sm border-b border-white/5"
          >
            Tool
          </a>

          {/* Learn Section */}
          <div className="py-3 border-b border-white/5">
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-semibold">
              Learn
            </p>
            <a
              href="/youtube-comment-picker"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-3 py-2.5 hover:bg-white/5 mb-1"
            >
              <p className="text-sm font-bold text-white">YouTube Comment Picker</p>
              <p className="text-xs text-zinc-500 mt-0.5">Pick winners from YouTube comments.</p>
            </a>
            <a
              href="/youtube-shorts-giveaway-picker"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-3 py-2.5 hover:bg-white/5 mb-1"
            >
              <p className="text-sm font-bold text-white">YouTube Shorts Picker</p>
              <p className="text-xs text-zinc-500 mt-0.5">Giveaway picker for Shorts comments.</p>
            </a>
            <a
              href="/random-youtube-comment-picker"
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-3 py-2.5 hover:bg-white/5"
            >
              <p className="text-sm font-bold text-white">Random Comment Picker</p>
              <p className="text-xs text-zinc-500 mt-0.5">Random YouTube winner generator.</p>
            </a>
          </div>

          <a
            href="/#features"
            onClick={() => setMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-3 text-sm border-b border-white/5"
          >
            Features
          </a>

          <a
            href="/#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-3 text-sm border-b border-white/5"
          >
            How it works
          </a>

          <a
            href="/#faq"
            onClick={() => setMenuOpen(false)}
            className="text-zinc-300 hover:text-white py-3 text-sm"
          >
            FAQ
          </a>

          <a
            href="/#tool"
            onClick={() => setMenuOpen(false)}
            className="mt-3 w-full h-12 rounded-xl bg-lime-400 text-black font-black flex items-center justify-center text-sm"
          >
            Start Free
          </a>
        </div>
      )}
    </header>
  )
}
