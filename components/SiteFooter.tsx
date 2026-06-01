export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        background: '#0a0d12',
        color: '#fff',
        marginTop: 80,
      }}
    >
      {/* ── Main footer body ─────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '60px 32px 40px',
          display: 'grid',
          gridTemplateColumns: '1fr auto auto',
          gap: '48px 64px',
          alignItems: 'start',
        }}
        className="footer-grid"
      >

        {/* Brand column */}
        <div>
          {/* Logo — icon + text matching SiteHeader */}
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
            }}
          >
            {/* Favicon SVG inline */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="7" fill="#111827"/>
              <rect x="3" y="8" width="20" height="15" rx="4" fill="#0B0F19" stroke="#a3e635" strokeWidth="1.2"/>
              <path d="M6 23 L6 29 L13 23 Z" fill="#0B0F19" stroke="#a3e635" strokeWidth="1.2" strokeLinejoin="round"/>
              <rect x="6" y="12" width="11" height="2" rx="1" fill="#a3e635"/>
              <rect x="6" y="16" width="8" height="2" rx="1" fill="#a3e635" opacity="0.45"/>
              <circle cx="22" cy="9" r="7" fill="#0B0F19" stroke="#a3e635" strokeWidth="1.2"/>
              <circle cx="22" cy="9" r="5.2" fill="#a3e635"/>
              <rect x="19.5" y="6.5" width="5" height="4" rx="1" fill="#111827"/>
              <rect x="21" y="10.5" width="2" height="1.5" rx="0.5" fill="#111827"/>
              <rect x="20" y="12" width="4" height="1" rx="0.5" fill="#111827"/>
            </svg>

            <span style={{ fontWeight: 900, fontSize: 18, color: '#fff' }}>
              <span style={{ color: '#a3e635' }}>YT</span> Giveaway Picker
            </span>
          </a>

          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, marginTop: 12, lineHeight: 1.65, maxWidth: 280 }}>
            Free YouTube video and Shorts giveaway picker with filters,
            verification pages and downloadable winner cards.
          </p>

          {/* Trust chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
            {['Free forever', 'No signup', 'Public verification'].map(t => (
              <span
                key={t}
                style={{
                  fontSize: 11,
                  color: 'rgba(163,230,53,0.7)',
                  background: 'rgba(163,230,53,0.06)',
                  border: '1px solid rgba(163,230,53,0.12)',
                  borderRadius: 20,
                  padding: '3px 10px',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tool links */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
            Tools
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {[
              { label: 'YouTube Comment Picker', href: '/youtube-comment-picker' },
              { label: 'YouTube Shorts Picker',  href: '/youtube-shorts-giveaway-picker' },
              { label: 'Random Comment Picker',  href: '/random-youtube-comment-picker' },
              { label: 'Start Free',             href: '/#tool' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Legal links */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 16 }}>
            Legal
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Contact',         href: '/contact' },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '20px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        {/* Copyright */}
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', margin: 0 }}>
          © {year} YT Giveaway Picker · ytgiveawaypicker.com · All rights reserved.
        </p>

        {/* Credit */}
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.25)', margin: 0 }}>
          Designed & Developed by{' '}
          <a
            href="https://stratiqdigital.com"
            target="_blank"
            rel="dofollow"
            style={{
              color: '#a3e635',
              textDecoration: 'none',
              fontWeight: 700,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Strat IQ Digital
          </a>
        </p>
      </div>

      {/* ── Mobile responsive styles ─────────────────────────────── */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>

    </footer>
  )
}