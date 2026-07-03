import { colors } from '@/lib/subpage-styles'

export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for YT Giveaway Picker — a free YouTube giveaway tool.",
}

export default function TermsPage() {
  const h2 = "text-2xl font-black mt-12 mb-4"
  const p = "leading-relaxed mb-4"
  const ul = "list-disc pl-6 space-y-2 mb-6"

  return (
    <main className="min-h-screen px-6 py-16" style={colors.page}>
      <div className="max-w-3xl mx-auto">
        <span className="font-black uppercase tracking-[0.2em] text-xs mb-3 block" style={colors.label}>Legal</span>
        <h1 className="text-5xl md:text-6xl font-black leading-tight" style={colors.h}>Terms of Service</h1>
        <p className="mt-4" style={colors.muted}>Last updated: July 2026</p>

        <div className="mt-10 rounded-3xl p-8" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <div style={colors.body}>
            <p className={p}>By using YT Giveaway Picker (&ldquo;the Service&rdquo;), you agree to the following terms. If you do not agree, please do not use the Service.</p>

            <h2 className={h2} style={colors.h}>Service Description</h2>
            <p className={p}>YT Giveaway Picker is a free tool that loads public YouTube comments and randomly selects winners for giveaway purposes. The Service generates public verification pages as proof of results.</p>

            <h2 className={h2} style={colors.h}>Acceptable Use</h2>
            <p className={p}>You agree to:</p>
            <ul className={ul}>
              <li>Use the Service only for legitimate giveaway and contest purposes</li>
              <li>Comply with YouTube&apos;s Terms of Service and Community Guidelines</li>
              <li>Not use the Service for any illegal, fraudulent or deceptive purposes</li>
              <li>Not attempt to exploit, overload or reverse-engineer the Service</li>
              <li>Not use automated systems to make excessive requests</li>
            </ul>

            <h2 className={h2} style={colors.h}>Disclaimer</h2>
            <p className={p}>The Service is provided &ldquo;as is&rdquo; without warranties of any kind. We do not guarantee uptime, accuracy or availability. We are not responsible for the outcome of any giveaway or contest run using this tool.</p>

            <h2 className={h2} style={colors.h}>YouTube Data</h2>
            <p className={p}>We access YouTube comment data through the official YouTube Data API. All data accessed is publicly available. We do not access private data, direct messages or non-public content.</p>

            <h2 className={h2} style={colors.h}>Intellectual Property</h2>
            <p className={p}>The Service, its design, code and branding are owned by Strat IQ Digital. YouTube comments and video content belong to their respective creators.</p>

            <h2 className={h2} style={colors.h}>Limitation of Liability</h2>
            <p className={p}>To the maximum extent permitted by law, we are not liable for any damages arising from use of the Service, including but not limited to disputes over giveaway results.</p>

            <h2 className={h2} style={colors.h}>Modifications</h2>
            <p className={p}>We may modify these terms at any time. Continued use of the Service after changes constitutes acceptance of the new terms.</p>

            <h2 className={h2} style={colors.h}>Contact</h2>
            <p className={p}>For questions about these terms, visit our <a href="/contact" style={{ color: 'var(--accent-text)', textDecoration: 'underline' }}>contact page</a>.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
