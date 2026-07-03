import { colors } from '@/lib/subpage-styles'

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for YT Giveaway Picker — a free YouTube giveaway tool.",
}

export default function PrivacyPolicyPage() {
  const h2 = "text-2xl font-black mt-12 mb-4"
  const p = "leading-relaxed mb-4"
  const ul = "list-disc pl-6 space-y-2 mb-6"

  return (
    <main className="min-h-screen px-6 py-16" style={colors.page}>
      <div className="max-w-3xl mx-auto">
        <span className="font-black uppercase tracking-[0.2em] text-xs mb-3 block" style={colors.label}>Legal</span>
        <h1 className="text-5xl md:text-6xl font-black leading-tight" style={colors.h}>Privacy Policy</h1>
        <p className="mt-4" style={colors.muted}>Last updated: July 2026</p>

        <div className="mt-10 rounded-3xl p-8" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          <div style={colors.body}>
            <p className={p}>YT Giveaway Picker (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the website ytgiveawaypicker.com. This page informs you of our policies regarding the collection, use and disclosure of information when you use our service.</p>

            <h2 className={h2} style={colors.h}>Information We Collect</h2>
            <p className={p}>We do not require account creation. When you use the tool, we process:</p>
            <ul className={ul}>
              <li>YouTube video URLs you submit</li>
              <li>Public YouTube comments fetched via the YouTube Data API</li>
              <li>Giveaway draw results (winners, filters used, verification IDs)</li>
              <li>Basic analytics data (page views, anonymized usage patterns)</li>
            </ul>

            <h2 className={h2} style={colors.h}>How We Use Information</h2>
            <ul className={ul}>
              <li>To provide the giveaway picking service and generate verification pages</li>
              <li>To cache YouTube comments for faster repeated access</li>
              <li>To save draw history so users can revisit past giveaways</li>
              <li>To improve the service and fix bugs</li>
            </ul>

            <h2 className={h2} style={colors.h}>Data Storage</h2>
            <p className={p}>Giveaway draw results are stored in Supabase (PostgreSQL). Comment data is cached temporarily in Upstash Redis and is not stored permanently. We do not store any personally identifiable information beyond what is publicly available on YouTube.</p>

            <h2 className={h2} style={colors.h}>Third-Party Services</h2>
            <ul className={ul}>
              <li><strong>YouTube Data API</strong> — to fetch public comments. Subject to Google&apos;s Privacy Policy.</li>
              <li><strong>Supabase</strong> — database hosting for draw results.</li>
              <li><strong>Upstash</strong> — Redis caching for comment data.</li>
              <li><strong>Vercel</strong> — hosting and deployment.</li>
              <li><strong>Google AdSense</strong> — for serving advertisements. Google may use cookies to serve ads based on your prior visits.</li>
            </ul>

            <h2 className={h2} style={colors.h}>Cookies</h2>
            <p className={p}>We use minimal cookies for theme preference (light/dark mode). Third-party ad services may use cookies for ad personalization. You can control cookie settings through your browser.</p>

            <h2 className={h2} style={colors.h}>Your Rights</h2>
            <p className={p}>You may request deletion of any giveaway data associated with your videos by contacting us. Since we don&apos;t require accounts, there is no personal profile to delete.</p>

            <h2 className={h2} style={colors.h}>Contact</h2>
            <p className={p}>For questions about this privacy policy, contact us at <a href="/contact" style={{ color: 'var(--accent-text)', textDecoration: 'underline' }}>our contact page</a>.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
