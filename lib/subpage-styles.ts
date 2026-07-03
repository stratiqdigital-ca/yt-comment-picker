// Shared styles for SEO subpages — all theme-aware via CSS variables
export const S = {
  label:    "font-black uppercase tracking-[0.2em] text-xs mb-3 block",
  h1:       "text-5xl md:text-7xl font-black leading-[1.05] tracking-tight",
  h2:       "text-3xl md:text-4xl font-black",
  h3:       "text-base font-black",
  body:     "text-base leading-relaxed",
  bodySm:   "text-sm leading-relaxed",
  card:     "group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5",
  section:  "mt-24",
  ctaRow:   "flex flex-wrap items-center gap-3 mt-8",
  cta:      "h-12 px-7 rounded-xl font-black flex items-center gap-2 transition-colors text-sm whitespace-nowrap",
  ctaGhost: "h-12 px-6 rounded-xl border font-bold flex items-center gap-2 transition-all text-sm whitespace-nowrap",
  chip:     "inline-flex items-center gap-2 text-sm",
  divider:  "w-full h-px my-12",
}

// Inline styles for theme-aware colors (can't use CSS vars in Tailwind classes easily)
export const colors = {
  label:      { color: 'var(--accent-text)' },
  h:          { color: 'var(--text-primary)' },
  body:       { color: 'var(--text-secondary)' },
  muted:      { color: 'var(--text-muted)' },
  card:       { background: 'var(--bg-card)', border: '1px solid var(--border)' },
  cardHover:  { background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' },
  cta:        { background: 'var(--accent)', color: 'var(--accent-on)' },
  ctaGhost:   { borderColor: 'var(--accent-border)', color: 'var(--accent-text)' },
  chip:       { color: 'var(--text-secondary)' },
  chipDot:    { background: 'var(--accent)' },
  divider:    { background: 'linear-gradient(90deg, transparent, var(--border), transparent)' },
  accent:     { color: 'var(--accent)' },
  accentSoft: { background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', color: 'var(--accent-text)' },
  stepIcon:   { background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' },
  stepNum:    { color: 'var(--accent)' },
  page:       { background: 'var(--bg-primary)', color: 'var(--text-primary)' },
  ctaBanner:  { background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' },
}
