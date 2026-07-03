'use client'

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-tertiary)', marginTop: 80 }}>
      <div
        className="footer-grid"
        style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 32px 40px', display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '48px 64px', alignItems: 'start' }}
      >
        {/* Brand */}
        <div>
          <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/icon.svg" alt="YT Giveaway Picker" width={32} height={32} className="rounded-lg" />
            <span style={{ fontWeight: 800, fontSize: 18, color: 'var(--text-primary)' }}>
              <span style={{ color: 'var(--accent)' }}>YT</span> Giveaway Picker
            </span>
          </a>

          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 12, lineHeight: 1.65, maxWidth: 280 }}>
            Free YouTube video and Shorts giveaway picker with filters, verification pages and downloadable winner cards.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
            {['Free forever', 'No signup', 'Public verification'].map(t => (
              <span
                key={t}
                style={{
                  fontSize: 11, fontWeight: 600, letterSpacing: '0.03em',
                  color: 'var(--accent-text)', background: 'var(--accent-soft)',
                  border: '1px solid var(--accent-border)', borderRadius: 20, padding: '4px 12px',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>Tools</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {[
              { label: 'YouTube Comment Picker', href: '/youtube-comment-picker' },
              { label: 'YouTube Shorts Picker', href: '/youtube-shorts-giveaway-picker' },
              { label: 'Random Comment Picker', href: '/random-youtube-comment-picker' },
              { label: 'Start Free', href: '/#tool' },
            ].map(link => (
              <a key={link.href} href={link.href} className="footer-link" style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>Legal</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Terms of Service', href: '/terms' },
              { label: 'Contact', href: '/contact' },
            ].map(link => (
              <a key={link.href} href={link.href} className="footer-link" style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid var(--border)', maxWidth: 1200, margin: '0 auto', padding: '20px 32px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
          © {year} YT Giveaway Picker · ytgiveawaypicker.com · All rights reserved.
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
          Designed & Developed by{' '}
          <a href="https://stratiqdigital.com" target="_blank" rel="dofollow" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 700 }}>
            Strat IQ Digital
          </a>
        </p>
      </div>

      <style>{`
        .footer-link:hover { color: var(--text-primary) !important; }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  )
}
