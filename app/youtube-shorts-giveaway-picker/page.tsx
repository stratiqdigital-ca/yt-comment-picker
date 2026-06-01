export const metadata = {
  title: "YouTube Shorts Giveaway Picker — Free Winner Tool",
  description:
    "Pick random winners from YouTube Shorts comments. Filter by keyword, emoji, time window and duplicate users. Generate public verification pages and downloadable winner cards instantly.",
};

const S = {
  label:   "text-lime-400 font-black uppercase tracking-[0.2em] text-xs",
  h1:      "text-5xl md:text-7xl font-black mt-4 leading-[1.05] tracking-tight",
  h2:      "text-3xl md:text-4xl font-black text-white mt-0",
  h3:      "text-xl font-black text-white",
  body:    "text-zinc-400 text-base leading-relaxed",
  card:    "bg-[#111827] border border-white/[0.07] rounded-2xl p-6",
  chip:    "inline-flex items-center gap-2 text-sm text-zinc-300",
  section: "mt-20",
  cta:     "inline-flex mt-8 h-12 px-7 rounded-xl bg-lime-400 text-black font-black items-center gap-2 hover:bg-lime-300 transition-colors text-sm",
  ctaGhost:"inline-flex h-11 px-6 rounded-xl border border-lime-400/30 text-lime-400 font-bold items-center gap-2 hover:border-lime-400/60 transition-colors text-sm",
};

const FEATURES = [
  { icon: "📱", title: "Full Shorts URL Support",      desc: "Paste any youtube.com/shorts/ link and it loads all comments exactly like a regular video — no extra steps." },
  { icon: "⏱️", title: "First-Comment Time Window",    desc: "Filter entries to the first 10, 20, 30 or 60 minutes after posting. Ideal for Shorts giveaways that reward fast fans." },
  { icon: "🚫", title: "Duplicate User Removal",       desc: "One entry per YouTube account. Stops power users from flooding the comment section with repeat entries." },
  { icon: "#️⃣", title: "Keyword Filter",               desc: "Require a word, phrase or hashtag in the comment. Only comments including it count toward the draw." },
  { icon: "😊", title: "Emoji Filter",                 desc: "Choose a required emoji for entry — a popular format for Shorts engagement giveaways." },
  { icon: "✅", title: "Public Verification",          desc: "A permanent public page at /verify/[id] shows the result, filters used and valid entry count for full transparency." },
  { icon: "📥", title: "Vertical Winner Cards",        desc: "Download winner cards in vertical Instagram Story format — perfect for Shorts creators sharing results on social media." },
  { icon: "🏆", title: "Multiple Winners",             desc: "Pick 1 to 5 or any custom number of winners from a single Shorts giveaway draw." },
  { icon: "📋", title: "Saved Draw History",           desc: "Every Shorts giveaway is saved automatically. Revisit past draws, download old cards and reshare verification links." },
];

const STEPS = [
  { num: "01", title: "Copy Your YouTube Shorts URL",     desc: "Open your YouTube Shorts video and copy the URL from the address bar. It will look like youtube.com/shorts/[videoId]." },
  { num: "02", title: "Paste It Into the Tool",           desc: "Paste the URL into the input bar at the top of the homepage and click Load Comments to fetch all public Shorts comments." },
  { num: "03", title: "Apply Your Filters",               desc: "Set a keyword, emoji or time window if needed. Enable duplicate removal to ensure one entry per viewer account." },
  { num: "04", title: "Pick Your Winners",                desc: "Click Pick Winner. The tool randomly selects from valid entries with an animated reveal and displays all winner details." },
  { num: "05", title: "Share Verification Proof",         desc: "Copy the public verification link and post it in your Shorts description or comments so viewers can confirm the result." },
];

const FAQS = [
  { q: "Does this tool work with YouTube Shorts URLs?",          a: "Yes — it fully supports youtube.com/shorts/ URLs. Comments are loaded the same way as regular videos and all filters work identically." },
  { q: "Why is a time window filter important for Shorts?",      a: "Shorts videos move fast and comment velocity is high. A time window filter lets you reward only the viewers who commented within the first 10, 20 or 30 minutes — your most engaged audience." },
  { q: "Can I require a specific emoji to enter?",               a: "Yes. The emoji filter lets you set a required emoji. Only comments containing that emoji count as valid entries, making it easy to run engagement-based Shorts giveaways." },
  { q: "How many Shorts comments can the tool load?",            a: "The tool loads all publicly available comments on a Shorts video. Results are cached so repeat visits load instantly without hitting the API again." },
  { q: "Is the winner selection truly random?",                  a: "Yes. The algorithm uses cryptographic random selection — every valid entry has exactly the same probability of being chosen regardless of comment order or timing." },
  { q: "Can my audience verify the result?",                     a: "Yes. Every draw generates a permanent public URL at /verify/[id] showing the video, filters used, valid entry count and all selected winners." },
  { q: "Can I download winner cards for Instagram Stories?",     a: "Yes. After picking winners you can download vertical format PNG winner cards designed for Instagram Stories — ideal for Shorts creators who cross-post content." },
  { q: "How is this different from picking manually?",           a: "Manual selection is not random and cannot be verified. This tool provides documented, reproducible random selection with a public audit trail that protects you from disputes." },
];

export default function YouTubeShortsGiveawayPickerPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <p className={S.label}>Shorts Giveaway Tool</p>
        <h1 className={S.h1}>YouTube Shorts Giveaway Picker</h1>
        <p className="text-zinc-400 text-lg mt-6 max-w-3xl leading-relaxed">
          Run fair, transparent giveaways on YouTube Shorts. Load all comments
          from any Shorts video, filter entries and randomly select verified
          winners with a public proof page — free, no signup required.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/#tool" className={S.cta}>Pick Shorts Winner →</a>
          <a href="/youtube-comment-picker" className={S.ctaGhost}>Video Picker →</a>
        </div>

        <div className="flex flex-wrap gap-6 mt-10">
          {["Works with all Shorts URLs", "Time window filter", "Vertical winner cards", "Free forever"].map((t) => (
            <span key={t} className={S.chip}>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0" />
              {t}
            </span>
          ))}
        </div>

        {/* ── WHAT IS IT ───────────────────────────────────────────── */}
        <section className={S.section}>
          <p className={S.label}>Overview</p>
          <h2 className={`${S.h2} mt-3`}>What is a YouTube Shorts Giveaway Picker?</h2>
          <div className="mt-6 grid gap-5 text-zinc-400 leading-relaxed text-base max-w-3xl">
            <p>
              A YouTube Shorts giveaway picker is a tool that loads all comments
              from a Shorts video and randomly selects one or more winners from
              valid entries. Unlike regular YouTube videos, Shorts content moves
              fast — high comment velocity, viral spread and tight time windows
              mean a standard random picker is not enough.
            </p>
            <p>
              YT Giveaway Picker is built to handle exactly this. The time window
              filter lets you restrict entries to the first minutes after posting,
              rewarding your fastest fans. Emoji filtering works perfectly for
              the reaction-based entry formats popular on Shorts. And every draw
              generates a permanent public verification page so your audience
              cannot dispute the result.
            </p>
            <p>
              Paste your Shorts URL, load comments, apply your filters and pick
              winners in under 60 seconds — then share the verification link
              directly in your Shorts description or comment pinned to the top.
            </p>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className={S.section}>
          <p className={S.label}>Step by Step</p>
          <h2 className={`${S.h2} mt-3`}>How to Run a YouTube Shorts Giveaway</h2>
          <div className="mt-8 grid gap-4">
            {STEPS.map((step) => (
              <div key={step.num} className={`${S.card} flex gap-5 items-start`}>
                <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center shrink-0">
                  <span className="text-lime-400 font-black text-base">{step.num}</span>
                </div>
                <div>
                  <h3 className={S.h3}>{step.title}</h3>
                  <p className={`${S.body} mt-1.5`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY SHORTS SPECIFIC ──────────────────────────────────── */}
        <section className={S.section}>
          <p className={S.label}>Shorts vs Regular Videos</p>
          <h2 className={`${S.h2} mt-3`}>Why Shorts Giveaways Need a Different Approach</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-zinc-400 leading-relaxed">
            {[
              { title: "High comment velocity",      desc: "Shorts videos attract hundreds of comments in minutes. Without a time window filter, late entries from algorithm-driven discovery viewers can overwhelm early loyal fans." },
              { title: "Reaction-based entry formats", desc: "Shorts creators often ask viewers to comment a specific emoji to enter. The emoji filter makes this format fully automated — no manual checking." },
              { title: "Cross-platform sharing",      desc: "Shorts creators often share results on Instagram Stories. Vertical winner card downloads are designed exactly for this workflow." },
              { title: "Faster giveaway cycles",      desc: "Shorts giveaways can run and close within hours. The tool loads comments and picks winners instantly so you can move at the same pace as your content." },
            ].map((item) => (
              <div key={item.title} className={S.card}>
                <h3 className={`${S.h3} text-base`}>{item.title}</h3>
                <p className={`${S.body} mt-2 text-sm`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ─────────────────────────────────────────────── */}
        <section className={S.section}>
          <p className={S.label}>Features</p>
          <h2 className={`${S.h2} mt-3`}>Everything Built for Shorts Giveaways</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className={S.card}>
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className={`${S.h3} text-base`}>{f.title}</h3>
                <p className={`${S.body} mt-2 text-sm`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERNAL LINKS ───────────────────────────────────────── */}
        <section className={S.section}>
          <div className={`${S.card} bg-lime-400/[0.03] border-lime-400/[0.12]`}>
            <p className={S.label}>Related Tools</p>
            <h2 className={`${S.h2} mt-3 text-2xl`}>Also on YT Giveaway Picker</h2>
            <p className={`${S.body} mt-3 max-w-xl`}>
              The same platform handles regular YouTube video giveaways and
              includes a dedicated random comment generator. All tools share
              the same verification and winner card system.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="/youtube-comment-picker" className={S.cta}>
                YouTube Comment Picker →
              </a>
              <a href="/random-youtube-comment-picker" className={S.ctaGhost}>
                Random Comment Picker →
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────── */}
        <section className={S.section}>
          <p className={S.label}>FAQ</p>
          <h2 className={`${S.h2} mt-3`}>Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-4 max-w-3xl">
            {FAQS.map((faq) => (
              <div key={faq.q} className={S.card}>
                <h3 className={`${S.h3} text-base`}>{faq.q}</h3>
                <p className={`${S.body} mt-2 text-sm`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
        <section className={`${S.section} mb-8`}>
          <div className="rounded-2xl bg-lime-400/[0.04] border border-lime-400/[0.12] p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black">
              Run Your Shorts Giveaway Now
            </h2>
            <p className={`${S.body} mt-4 max-w-md mx-auto`}>
              Free forever. No signup. Paste your Shorts URL and pick verified
              winners in under 60 seconds.
            </p>
            <a href="/#tool" className={`${S.cta} mt-8 mx-auto`}>
              Pick Shorts Winner →
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}