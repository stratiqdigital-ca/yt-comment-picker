export const metadata = {
  title: "Terms of Use | YT Giveaway Picker",
  description:
    "Read the YT Giveaway Picker terms of use. Understand your rights and responsibilities when using our free YouTube giveaway picker and comment winner selection tool.",
};

const S = {
  label:   "text-lime-400 font-black uppercase tracking-[0.2em] text-xs mb-3 block",
  h1:      "text-5xl md:text-6xl font-black leading-tight",
  h2:      "text-2xl font-black text-white mt-10 mb-4",
  body:    "text-zinc-400 text-base leading-relaxed",
  bodySm:  "text-zinc-500 text-sm leading-relaxed",
  card:    "bg-[#111827] border border-white/[0.07] rounded-2xl p-6 mt-4",
  divider: "w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-10",
  cta:     "inline-flex h-11 px-6 rounded-xl bg-lime-400 text-black font-black items-center gap-2 hover:bg-lime-300 transition-colors text-sm",
  ctaGhost:"inline-flex h-11 px-6 rounded-xl border border-lime-400/30 text-lime-400 font-bold items-center gap-2 hover:border-lime-400/60 transition-colors text-sm",
};

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using YT Giveaway Picker at ytgiveawaypicker.com, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the tool. These terms apply to all visitors and users of the service.",
  },
  {
    title: "2. Description of Service",
    body: "YT Giveaway Picker is a free web-based tool that allows YouTube content creators to load public comments from YouTube videos and YouTube Shorts and randomly select winners for giveaways. The tool includes comment filtering, public verification pages and downloadable winner cards. The service is operated by Strat IQ Digital.",
  },
  {
    title: "3. Permitted Use",
    body: "You may use YT Giveaway Picker to run legitimate giveaways on YouTube videos and Shorts that you own or have permission to use. You may share verification page URLs publicly as proof of your giveaway results. You may download and share winner cards for your audience.",
  },
  {
    title: "4. Prohibited Use",
    body: "You must not use YT Giveaway Picker for any unlawful purpose or in any way that violates YouTube's Terms of Service or Community Guidelines. You must not attempt to manipulate results, abuse the caching system or make excessive API requests. You must not use the tool to run fraudulent giveaways or deceive your audience about the winner selection process. You must not scrape, copy or redistribute the tool's code or infrastructure without permission.",
  },
  {
    title: "5. Your Giveaway Responsibilities",
    body: "You are solely responsible for ensuring your giveaway complies with all applicable laws in your country, YouTube's policies, any platform-specific rules, and any requirements set by sponsors or brand partners. YT Giveaway Picker provides random selection and verification features only — it does not provide legal advice and does not guarantee compliance with any law or regulation.",
  },
  {
    title: "6. Accuracy of Results",
    body: "YT Giveaway Picker loads publicly available comment data via the YouTube Data API. The tool cannot guarantee that all comments are present at the time of loading as YouTube may delay, remove or hide comments independently. The random selection algorithm is designed to be fair and unbiased but the tool does not warrant that any specific result is legally binding for giveaway purposes.",
  },
  {
    title: "7. Service Availability",
    body: "We aim to keep YT Giveaway Picker available at all times but we do not guarantee uninterrupted access. We may limit usage, throttle API requests, block abusive activity, update features or temporarily suspend the service for maintenance without notice.",
  },
  {
    title: "8. Intellectual Property",
    body: "All code, design, branding, winner card templates and verification page layouts are the intellectual property of Strat IQ Digital. You may not copy, reproduce or redistribute any part of the tool without written permission. Public verification pages may be linked to and shared freely.",
  },
  {
    title: "9. Disclaimer of Warranties",
    body: "YT Giveaway Picker is provided on an as-is basis without warranties of any kind. We make no warranties about the accuracy, reliability or fitness for a particular purpose of the tool. Use of the tool is at your own risk.",
  },
  {
    title: "10. Limitation of Liability",
    body: "To the maximum extent permitted by law, Strat IQ Digital and YT Giveaway Picker shall not be liable for any indirect, incidental, consequential or punitive damages arising from your use of the tool, including but not limited to giveaway disputes, regulatory penalties or loss of audience trust.",
  },
  {
    title: "11. Changes to Terms",
    body: "We reserve the right to update these Terms of Use at any time. Changes will be posted on this page with an updated effective date. Continued use of the tool after changes are posted constitutes your acceptance of the updated terms.",
  },
  {
    title: "12. Governing Law",
    body: "These terms are governed by applicable laws. If you have any questions about these terms, contact us at support@ytgiveawaypicker.com.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Hero */}
        <span className={S.label}>Legal</span>
        <h1 className={S.h1}>Terms of Use</h1>
        <p className={`${S.body} mt-5 max-w-2xl`}>
          These terms govern your use of YT Giveaway Picker. Please read them
          carefully before using the tool. Last updated: June 2025.
        </p>

        {/* Key points summary */}
        <div className={S.card}>
          <p className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">Key Points</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: "✅", label: "Free to use",             sub: "The tool is free for any creator running legitimate YouTube giveaways." },
              { icon: "⚖️", label: "Your responsibility",     sub: "You are responsible for ensuring your giveaway follows YouTube's rules and local laws." },
              { icon: "🔒", label: "Fair selection",          sub: "Results are randomly selected — we do not manipulate or influence outcomes." },
            ].map(item => (
              <div key={item.label} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4">
                <div className="text-xl mb-2">{item.icon}</div>
                <p className="text-sm font-bold text-white mb-1">{item.label}</p>
                <p className={S.bodySm}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={S.divider} />

        {/* Full sections */}
        <div className="space-y-8">
          {SECTIONS.map(section => (
            <div key={section.title}>
              <h2 className={S.h2}>{section.title}</h2>
              <p className={S.body}>{section.body}</p>
            </div>
          ))}
        </div>

        <div className={S.divider} />

        {/* Internal links */}
        <div className="bg-lime-400/[0.03] border border-lime-400/[0.12] rounded-2xl p-8">
          <span className={S.label}>Related Pages</span>
          <h2 className="text-xl font-black text-white mb-3">Other Legal & Support Pages</h2>
          <p className={`${S.body} mb-6`}>
            Read our privacy policy or get in touch if you have questions about these terms.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="/privacy-policy" className={S.cta}>Privacy Policy →</a>
            <a href="/contact" className={S.ctaGhost}>Contact Us →</a>
            <a href="/" className={S.ctaGhost}>Back to Tool →</a>
          </div>
        </div>

      </div>
    </main>
  );
}