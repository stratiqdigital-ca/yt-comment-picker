export const metadata = {
  title: "YouTube Comment Picker — Free Random Winner Tool",
  description:
    "Free YouTube comment picker to randomly select giveaway winners. Filter by keyword, emoji, duplicate users and time window. Get public verification pages and downloadable winner cards.",
};
 
// ─── Reusable style tokens ────────────────────────────────────────────────────
const S = {
  label:   "text-lime-400 font-black uppercase tracking-[0.2em] text-xs",
  h1:      "text-5xl md:text-7xl font-black mt-4 leading-[1.05] tracking-tight",
  h2:      "text-3xl md:text-4xl font-black text-white mt-0",
  h3:      "text-xl font-black text-white",
  body:    "text-zinc-400 text-base leading-relaxed",
  card:    "bg-[#111827] border border-white/[0.07] rounded-2xl p-6",
  chip:    "inline-flex items-center gap-2 text-sm text-zinc-300",
  section: "mt-20",
  divider: "border-t border-white/[0.06] mt-20",
  cta:     "inline-flex mt-8 h-12 px-7 rounded-xl bg-lime-400 text-black font-black items-center gap-2 hover:bg-lime-300 transition-colors text-sm",
  ctaGhost:"inline-flex h-11 px-6 rounded-xl border border-lime-400/30 text-lime-400 font-bold items-center gap-2 hover:border-lime-400/60 transition-colors text-sm",
};
 
// ─── Data ─────────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "🎯", title: "Truly Random Selection",      desc: "Every comment has an equal chance. Our algorithm uses cryptographic randomness — no bias, no manipulation." },
  { icon: "🚫", title: "Duplicate User Removal",      desc: "Enable one-entry-per-account filtering to stop the same YouTube user from winning with multiple comments." },
  { icon: "#️⃣", title: "Keyword Filter",              desc: "Require a specific word, hashtag or phrase in comments. Only qualifying entries count toward the draw." },
  { icon: "😊", title: "Emoji Filter",                desc: "Make a specific emoji required to enter. Perfect for engagement campaigns that ask viewers to react." },
  { icon: "⏱️", title: "Time Window Filter",          desc: "Restrict entries to the first 10, 20, 30 or 60 minutes after posting — reward your fastest fans." },
  { icon: "✅", title: "Public Verification Page",    desc: "Every draw generates a permanent /verify URL your audience can open to confirm the result was fair." },
  { icon: "🏆", title: "Multiple Winners",            desc: "Pick 1, 3, 5 or any custom number of winners from a single draw — all shown on the verification page." },
  { icon: "📥", title: "Downloadable Winner Cards",   desc: "Download PNG winner cards in multiple templates including a vertical format for Instagram Stories." },
  { icon: "📋", title: "Giveaway History",            desc: "Every draw is saved automatically. Reopen past giveaways, download old cards and share old verification links." },
];
 
const STEPS = [
  { num: "01", title: "Paste Your YouTube Video URL",  desc: "Copy any YouTube video link — youtube.com/watch, youtube.com/shorts or youtu.be formats all work. Paste it into the input bar." },
  { num: "02", title: "Load All Comments",             desc: "Click Load Comments. We fetch every public comment on the video using the YouTube API and display the total count." },
  { num: "03", title: "Set Your Filters",              desc: "Choose your filters: keyword, emoji, time window, duplicate removal, and how many winners to pick. Filters stack — use as many as you need." },
  { num: "04", title: "Pick Random Winners",           desc: "Click Pick Winner. The tool randomly selects from all valid entries and reveals the winner with an animated reveal." },
  { num: "05", title: "Share Your Verification Page",  desc: "Copy the public verification URL and paste it in your video description or comments so your audience can confirm the result." },
];
 
const FAQS = [
  { q: "Is this YouTube comment picker completely free?",           a: "Yes — 100% free with no account required and no hidden limits. Paste a URL, load comments and pick winners instantly." },
  { q: "How many comments can it load?",                            a: "The tool loads all publicly available comments on a video — typically up to 10,000 or more depending on the video. Comments are cached so repeat visits load instantly." },
  { q: "Can I pick more than one winner?",                          a: "Yes. You can pick 1, 3, 5 or enter any custom number of winners. All winners are shown together on the verification page." },
  { q: "What does the verification page show?",                     a: "The public verification page shows the video title, all filters applied, total valid entry count, and the selected winners — giving your audience full transparency." },
  { q: "Does it work with YouTube Shorts?",                         a: "Yes. Paste any YouTube Shorts URL and it works identically — same filters, same verification system, same winner cards." },
  { q: "What is the keyword filter?",                               a: "The keyword filter requires a specific word, hashtag or phrase to appear in a comment for it to count as a valid entry. For example, require the word giveaway or a hashtag like #win." },
  { q: "How does duplicate removal work?",                          a: "When duplicate removal is enabled, only one comment per YouTube account counts toward the draw regardless of how many times that user commented." },
  { q: "Can I download winner proof?",                              a: "Yes. After picking winners you can download PNG winner cards in multiple templates. There is also a permanent public URL you can share as proof." },
];
 
// ─── Component ────────────────────────────────────────────────────────────────
export default function YouTubeCommentPickerPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
 
        {/* ── HERO ─────────────────────────────────────────────────── */}
        <p className={S.label}>Free Tool</p>
        <h1 className={S.h1}>YouTube Comment Picker</h1>
        <p className="text-zinc-400 text-lg mt-6 max-w-3xl leading-relaxed">
          Randomly pick winners from YouTube video comments — with keyword filters,
          emoji filters, duplicate removal, time window filters, public verification
          pages and downloadable winner cards. Free, instant, no signup.
        </p>
 
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="/#tool" className={S.cta}>Use Free Tool →</a>
          <a href="/youtube-shorts-giveaway-picker" className={S.ctaGhost}>Shorts Picker →</a>
        </div>
 
        {/* Trust chips */}
        <div className="flex flex-wrap gap-6 mt-10">
          {["No account needed", "10,000+ giveaways picked", "Public verification", "Free forever"].map((t) => (
            <span key={t} className={S.chip}>
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0" />
              {t}
            </span>
          ))}
        </div>
 
        {/* ── WHAT IS IT ───────────────────────────────────────────── */}
        <section className={S.section}>
          <p className={S.label}>Overview</p>
          <h2 className={`${S.h2} mt-3`}>What is a YouTube Comment Picker?</h2>
          <div className="mt-6 grid gap-5 text-zinc-400 leading-relaxed text-base max-w-3xl">
            <p>
              A YouTube comment picker is a tool that loads all public comments
              from a YouTube video and randomly selects one or more winners from
              valid entries. It is used by creators to run fair, transparent
              giveaways directly from their video comment section.
            </p>
            <p>
              YT Giveaway Picker goes further than a basic random picker. Every
              draw is saved with a permanent public verification URL so your
              audience can confirm the result was genuine. You can filter entries
              by keyword, emoji or time window, remove duplicate users and
              download winner cards for social sharing.
            </p>
            <p>
              Whether you run a small channel giveaway or a large sponsor
              campaign, the tool works the same — paste your URL, load comments,
              set your filters and pick winners in under 60 seconds.
            </p>
          </div>
        </section>
 
        {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
        <section className={S.section}>
          <p className={S.label}>Step by Step</p>
          <h2 className={`${S.h2} mt-3`}>How to Use the YouTube Comment Picker</h2>
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
 
        {/* ── FEATURES ─────────────────────────────────────────────── */}
        <section className={S.section}>
          <p className={S.label}>Features</p>
          <h2 className={`${S.h2} mt-3`}>Everything You Need for a Fair Giveaway</h2>
          <p className={`${S.body} mt-4 max-w-2xl`}>
            Every feature is built around making your giveaway fast to run,
            easy to verify and impossible to dispute.
          </p>
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
 
        {/* ── USE CASES ─────────────────────────────────────────────── */}
        <section className={S.section}>
          <p className={S.label}>Use Cases</p>
          <h2 className={`${S.h2} mt-3`}>Who Uses This Tool and Why</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-zinc-400 leading-relaxed">
            {[
              { title: "Gaming Channels",        desc: "Pick winners from giveaway comment sections — game keys, merch, subscriptions. Filter by keyword like 'giveaway' to qualify only entered viewers." },
              { title: "Product Review Creators", desc: "Run sponsor giveaways with full transparency. Share the verification URL with your audience so everyone can see the draw was fair." },
              { title: "Music & Entertainment",   desc: "Use emoji filtering to run engagement campaigns — require a specific emoji react to enter and reward your most engaged fans." },
              { title: "Education Channels",      desc: "Reward early commenters with the time window filter. Only accept entries from the first 20 or 30 minutes to drive notification-on viewing." },
              { title: "Brand Partnerships",      desc: "Show sponsors a permanent verification page as proof the giveaway was run correctly. Download winner cards as documentation." },
              { title: "Live Stream Follow-ups",  desc: "Run post-stream giveaways from video comments. Pick multiple winners at once and generate a single verification page covering all results." },
            ].map((u) => (
              <div key={u.title} className={S.card}>
                <h3 className={`${S.h3} text-base`}>{u.title}</h3>
                <p className={`${S.body} mt-2 text-sm`}>{u.desc}</p>
              </div>
            ))}
          </div>
        </section>
 
        {/* ── INTERNAL LINKS ───────────────────────────────────────── */}
        <section className={S.section}>
          <div className={`${S.card} bg-lime-400/[0.03] border-lime-400/[0.12]`}>
            <p className={S.label}>Related Tools</p>
            <h2 className={`${S.h2} mt-3 text-2xl`}>Also Available on YT Giveaway Picker</h2>
            <p className={`${S.body} mt-3 max-w-xl`}>
              The same tool works for YouTube Shorts and includes a dedicated
              random comment generator. All tools share the same verification
              system and winner card templates.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="/youtube-shorts-giveaway-picker" className={S.cta}>
                YouTube Shorts Picker →
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
              Ready to Pick Your Winner?
            </h2>
            <p className={`${S.body} mt-4 max-w-md mx-auto`}>
              Free forever. No signup. Paste your YouTube URL and pick verified
              winners in seconds.
            </p>
            <a href="/#tool" className={`${S.cta} mt-8 mx-auto`}>
              Start Free →
            </a>
          </div>
        </section>
 
      </div>
    </main>
  );
}