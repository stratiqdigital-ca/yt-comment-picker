export const metadata = {
  title: "YouTube Comment Picker — Free Random Winner Tool",
  description:
    "Free YouTube comment picker to randomly select giveaway winners. Filter by keyword, emoji, duplicate users and time window. Get public verification pages and downloadable winner cards.",
};

// ─── Shared styles ────────────────────────────────────────────────────────────
const S = {
  label:    "text-lime-400 font-black uppercase tracking-[0.2em] text-xs mb-3 block",
  h1:       "text-5xl md:text-7xl font-black leading-[1.05] tracking-tight",
  h2:       "text-3xl md:text-4xl font-black text-white",
  h3:       "text-base font-black text-white",
  body:     "text-zinc-400 text-base leading-relaxed",
  bodySm:   "text-zinc-400 text-sm leading-relaxed",
  // card with hover — matches homepage feel
  card:     "group bg-[#111827] border border-white/[0.07] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-lime-400/25 hover:shadow-[0_8px_32px_rgba(163,230,53,0.06)]",
  cardFlat: "bg-[#111827] border border-white/[0.07] rounded-2xl p-6",
  section:  "mt-24",
  // CTA row — flexbox so buttons always sit side by side
  ctaRow:   "flex flex-wrap items-center gap-3 mt-8",
  cta:      "h-12 px-7 rounded-xl bg-lime-400 text-black font-black flex items-center gap-2 hover:bg-lime-300 transition-colors text-sm whitespace-nowrap",
  ctaGhost: "h-12 px-6 rounded-xl border border-lime-400/30 text-lime-400 font-bold flex items-center gap-2 hover:border-lime-400/60 hover:bg-lime-400/5 transition-all text-sm whitespace-nowrap",
  chip:     "inline-flex items-center gap-2 text-sm text-zinc-400",
  divider:  "w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-24",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "🎯", title: "Truly Random Selection",    desc: "Cryptographic randomness — no bias, no manipulation. Every entry has an equal chance." },
  { icon: "🚫", title: "Duplicate User Removal",    desc: "One entry per YouTube account. Stops the same user winning with multiple comments." },
  { icon: "#️⃣", title: "Keyword Filter",            desc: "Require a specific word, hashtag or phrase. Only qualifying comments enter the draw." },
  { icon: "😊", title: "Emoji Filter",              desc: "Set a required emoji. Perfect for reaction-based entry campaigns and Shorts giveaways." },
  { icon: "⏱️", title: "Time Window Filter",        desc: "Restrict entries to the first 10, 20, 30 or 60 minutes after posting." },
  { icon: "✅", title: "Public Verification",       desc: "Every draw gets a permanent /verify URL your audience can open to confirm the result." },
  { icon: "🏆", title: "Multiple Winners",          desc: "Pick 1, 3, 5 or any custom number of winners from a single draw." },
  { icon: "📥", title: "Downloadable Winner Cards", desc: "Download PNG winner cards including a vertical Instagram Story format." },
  { icon: "📋", title: "Giveaway History",          desc: "Every draw is saved. Reopen past giveaways, download old cards and reshare verification links." },
];

const STEPS = [
  { num: "01", title: "Paste Your YouTube Video URL",  desc: "Copy any YouTube video link — youtube.com/watch, youtube.com/shorts or youtu.be formats all work. Paste it into the input bar." },
  { num: "02", title: "Load All Comments",             desc: "Click Load Comments. We fetch every public comment on the video and display the total count." },
  { num: "03", title: "Set Your Filters",              desc: "Choose keyword, emoji, time window and duplicate removal. Filters stack — use as many as you need. The valid entry count updates live." },
  { num: "04", title: "Pick Random Winners",           desc: "Click Pick Winner. The tool randomly selects from all valid entries and reveals winners with an animated display." },
  { num: "05", title: "Share Your Verification Page",  desc: "Copy the public verification URL and paste it in your video description or pinned comment so your audience can confirm the result." },
];

const USECASES = [
  { title: "Gaming Channels",         desc: "Pick winners from giveaway comment sections — game keys, merch, subscriptions. Filter by keyword like 'giveaway' to qualify only entered viewers." },
  { title: "Product Review Creators", desc: "Run sponsor giveaways with full transparency. Share the verification URL so everyone can see the draw was fair." },
  { title: "Music & Entertainment",   desc: "Use emoji filtering for reaction-based entry campaigns — require a specific emoji and reward your most engaged fans." },
  { title: "Education Channels",      desc: "Reward early commenters with the time window filter. Only accept entries from the first 20 or 30 minutes to drive notification-on viewing." },
  { title: "Brand Partnerships",      desc: "Show sponsors a permanent verification page as proof the giveaway was run correctly. Download winner cards as documentation." },
  { title: "Live Stream Follow-ups",  desc: "Run post-stream giveaways from video comments. Pick multiple winners at once and generate a single verification page covering all results." },
];

const FAQS = [
  { q: "Is this YouTube comment picker completely free?",   a: "Yes — 100% free with no account required and no hidden limits. Paste a URL, load comments and pick winners instantly." },
  { q: "How many comments can it load?",                    a: "The tool loads all publicly available comments on a video — typically up to 10,000 or more. Comments are cached so repeat visits load instantly." },
  { q: "Can I pick more than one winner?",                  a: "Yes. You can pick 1, 3, 5 or enter any custom number of winners. All winners are shown together on the verification page." },
  { q: "What does the verification page show?",             a: "The public verification page shows the video title, all filters applied, total valid entry count, and the selected winners — giving your audience full transparency." },
  { q: "Does it work with YouTube Shorts?",                 a: "Yes. Paste any YouTube Shorts URL and it works identically — same filters, same verification system, same winner cards." },
  { q: "What is the keyword filter?",                       a: "The keyword filter requires a specific word, hashtag or phrase to appear in a comment for it to count as a valid entry." },
  { q: "How does duplicate removal work?",                  a: "When enabled, only one comment per YouTube account counts toward the draw regardless of how many times that user commented." },
  { q: "Can I download winner proof?",                      a: "Yes. After picking winners you can download PNG winner cards in multiple templates. A permanent public URL is also generated you can share as proof." },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function YouTubeCommentPickerPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <span className={S.label}>Free Tool</span>
        <h1 className={S.h1}>YouTube Comment Picker</h1>
        <p className={`${S.body} mt-6 max-w-3xl`}>
          Pick random winners from YouTube video comments — with keyword filters,
          emoji filters, duplicate removal, time window filters, public verification
          pages and downloadable winner cards. Free, instant, no signup.
        </p>

        {/* CTA row — always inline */}
        <div className={S.ctaRow}>
          <a href="/#tool" className={S.cta}>Use Free Tool →</a>
          <a href="/youtube-shorts-giveaway-picker" className={S.ctaGhost}>Shorts Picker →</a>
          <a href="/random-youtube-comment-picker" className={S.ctaGhost}>Random Picker →</a>
        </div>

        {/* Trust chips */}
        <div className="flex flex-wrap gap-6 mt-8">
          {["No account needed","10,000+ giveaways picked","Public verification","Free forever"].map(t => (
            <span key={t} className={S.chip}><span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>{t}</span>
          ))}
        </div>

        <div className={S.divider}/>

        {/* WHAT IS IT */}
        <section>
          <span className={S.label}>Overview</span>
          <h2 className={S.h2}>What is a YouTube Comment Picker?</h2>
          <div className="mt-6 space-y-4 max-w-3xl">
            <p className={S.body}>A YouTube comment picker is a tool that loads all public comments from a YouTube video and randomly selects one or more winners from valid entries. It is used by creators to run fair, transparent giveaways directly from their video comment section.</p>
            <p className={S.body}>YT Giveaway Picker goes further than a basic random picker. Every draw is saved with a permanent public verification URL so your audience can confirm the result was genuine. You can filter entries by keyword, emoji or time window, remove duplicate users and download winner cards for social sharing.</p>
            <p className={S.body}>Whether you run a small channel giveaway or a large sponsor campaign, the tool works the same — paste your URL, load comments, set your filters and pick winners in under 60 seconds.</p>
          </div>
        </section>

        <div className={S.divider}/>

        {/* HOW IT WORKS */}
        <section>
          <span className={S.label}>Step by Step</span>
          <h2 className={S.h2}>How to Use the YouTube Comment Picker</h2>
          <div className="mt-8 grid gap-4">
            {STEPS.map(step => (
              <div key={step.num} className={`${S.card} flex gap-5 items-start`}>
                <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center shrink-0 group-hover:border-lime-400/40 transition-colors">
                  <span className="text-lime-400 font-black">{step.num}</span>
                </div>
                <div>
                  <h3 className={S.h3}>{step.title}</h3>
                  <p className={`${S.bodySm} mt-1.5`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={S.divider}/>

        {/* FEATURES */}
        <section>
          <span className={S.label}>Features</span>
          <h2 className={S.h2}>Everything You Need for a Fair Giveaway</h2>
          <p className={`${S.body} mt-4 max-w-2xl`}>Every feature is built around making your giveaway fast to run, easy to verify and impossible to dispute.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(f => (
              <div key={f.title} className={S.card}>
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className={S.h3}>{f.title}</h3>
                <p className={`${S.bodySm} mt-2`}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={S.divider}/>

        {/* USE CASES */}
        <section>
          <span className={S.label}>Use Cases</span>
          <h2 className={S.h2}>Who Uses This Tool and Why</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {USECASES.map(u => (
              <div key={u.title} className={S.card}>
                <h3 className={S.h3}>{u.title}</h3>
                <p className={`${S.bodySm} mt-2`}>{u.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={S.divider}/>

        {/* RELATED TOOLS */}
        <section>
          <div className="rounded-2xl bg-lime-400/[0.03] border border-lime-400/[0.12] p-8">
            <span className={S.label}>Related Tools</span>
            <h2 className={`${S.h2} text-2xl`}>Also Available on YT Giveaway Picker</h2>
            <p className={`${S.body} mt-3 max-w-xl`}>The same tool works for YouTube Shorts and includes a dedicated random comment generator. All tools share the same verification system and winner card templates.</p>
            <div className={S.ctaRow}>
              <a href="/youtube-shorts-giveaway-picker" className={S.cta}>YouTube Shorts Picker →</a>
              <a href="/random-youtube-comment-picker" className={S.ctaGhost}>Random Comment Picker →</a>
            </div>
          </div>
        </section>

        <div className={S.divider}/>

        {/* FAQ */}
        <section>
          <span className={S.label}>FAQ</span>
          <h2 className={S.h2}>Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-4">
            {FAQS.map(faq => (
              <div key={faq.q} className={S.card}>
                <h3 className={S.h3}>{faq.q}</h3>
                <p className={`${S.bodySm} mt-2`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={S.divider}/>

        {/* BOTTOM CTA */}
        <section className="rounded-2xl bg-lime-400/[0.04] border border-lime-400/[0.12] p-10 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black">Ready to Pick Your Winner?</h2>
          <p className={`${S.body} mt-4 max-w-md mx-auto`}>Free forever. No signup. Paste your YouTube URL and pick verified winners in seconds.</p>
          <div className="flex justify-center mt-8">
            <a href="/#tool" className={S.cta}>Start Free →</a>
          </div>
        </section>

      </div>
    </main>
  );
}