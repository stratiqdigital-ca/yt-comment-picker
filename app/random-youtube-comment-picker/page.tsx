export const metadata = {
  title: "Random YouTube Comment Picker — Free Winner Generator",
  description:
    "Randomly pick YouTube comment winners with one click. Supports keyword filters, emoji filters, duplicate removal, time window filters and public verification pages. Free, no account needed.",
};

const S = {
  label:    "text-lime-400 font-black uppercase tracking-[0.2em] text-xs mb-3 block",
  h1:       "text-5xl md:text-7xl font-black leading-[1.05] tracking-tight",
  h2:       "text-3xl md:text-4xl font-black text-white",
  h3:       "text-base font-black text-white",
  body:     "text-zinc-400 text-base leading-relaxed",
  bodySm:   "text-zinc-400 text-sm leading-relaxed",
  card:     "group bg-[#111827] border border-white/[0.07] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-lime-400/25 hover:shadow-[0_8px_32px_rgba(163,230,53,0.06)]",
  section:  "mt-24",
  ctaRow:   "flex flex-wrap items-center gap-3 mt-8",
  cta:      "h-12 px-7 rounded-xl bg-lime-400 text-black font-black flex items-center gap-2 hover:bg-lime-300 transition-colors text-sm whitespace-nowrap",
  ctaGhost: "h-12 px-6 rounded-xl border border-lime-400/30 text-lime-400 font-bold flex items-center gap-2 hover:border-lime-400/60 hover:bg-lime-400/5 transition-all text-sm whitespace-nowrap",
  chip:     "inline-flex items-center gap-2 text-sm text-zinc-400",
  divider:  "w-full h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent my-24",
};

const FEATURES = [
  { icon: "🎲", title: "One-Click Random Selection",  desc: "Click Pick Winner and the tool instantly selects a random comment from all valid entries — no configuration required for a basic draw." },
  { icon: "📊", title: "Handles Any Video Size",      desc: "Works on videos with hundreds or hundreds of thousands of comments. All entries are loaded before the random selection is made." },
  { icon: "🔁", title: "Re-pick Without Reloading",  desc: "Pick again from the same comment pool without reloading the page. Useful when a winner is ineligible or does not respond." },
  { icon: "🚫", title: "Duplicate Removal",           desc: "One entry per YouTube account. Prevents the same user appearing multiple times regardless of how many comments they left." },
  { icon: "#️⃣", title: "Keyword Qualification",      desc: "Restrict the random pool to comments containing a required word, hashtag or phrase." },
  { icon: "😊", title: "Emoji Qualification",         desc: "Require a specific emoji in entries. The random selection then only draws from comments that include it." },
  { icon: "⏱️", title: "Time Window Restriction",    desc: "Set an entry window — only comments posted within the first N minutes after the video published are included." },
  { icon: "✅", title: "Verifiable Results",          desc: "Every random draw is saved with a permanent public verification URL showing all draw details and selected winners." },
  { icon: "🏆", title: "Multi-Winner Draws",          desc: "Pick multiple random winners from a single draw. All winners appear on one verification page." },
];

const STEPS = [
  { num: "01", title: "Paste Any YouTube URL",         desc: "Copy the link from any YouTube video or Shorts page. Paste it into the tool — it works with youtube.com/watch, youtube.com/shorts and youtu.be links." },
  { num: "02", title: "Load the Comment Pool",         desc: "Click Load Comments to fetch all public comments. The tool displays the total comment count so you know how large your entry pool is." },
  { num: "03", title: "Filter Your Entry Pool",        desc: "Optionally add a keyword filter, emoji filter or time window. Enable duplicate removal. The valid entry count updates live." },
  { num: "04", title: "Generate Your Random Winner",   desc: "Click Pick Winner. The tool uses a random selection algorithm across all valid entries and reveals the winner with an animated display." },
  { num: "05", title: "Verify and Share",              desc: "Copy the public verification link generated for every draw. Share it in your video description as permanent proof." },
];

const COMPARE = [
  { method: "Manual selection",      random: false, verified: false, fast: false },
  { method: "Spreadsheet formula",   random: true,  verified: false, fast: false },
  { method: "Generic wheel spinner", random: true,  verified: false, fast: true  },
  { method: "YT Giveaway Picker",    random: true,  verified: true,  fast: true  },
];

const FAQS = [
  { q: "How random is the selection?",                              a: "The tool uses a cryptographically random algorithm. Every valid entry has an identical probability of selection — the result cannot be predicted or manipulated." },
  { q: "Can I pick multiple random winners at once?",               a: "Yes. Set the winner count to 2, 3, 5 or any custom number before clicking Pick Winner. All winners are drawn from the same valid entry pool in a single operation." },
  { q: "What counts as a valid entry?",                             a: "A valid entry is any public comment that passes all active filters — keyword, emoji, time window and duplicate removal. The valid entry count is shown before you pick." },
  { q: "Can I re-pick if a winner is ineligible?",                  a: "Yes. You can click Pick Winner again to draw a new random winner from the same comment pool without reloading the page or the comments." },
  { q: "Does the random picker work on private videos?",            a: "No — the tool loads public comments via the YouTube API. Private and unlisted videos without public comments cannot be used." },
  { q: "Can I use filters and still keep the selection random?",    a: "Yes. Filters only restrict the pool of eligible entries. The random selection within that filtered pool remains fully random." },
  { q: "Is the verification page permanent?",                       a: "Yes. Every draw creates a permanent record at /verify/[id] that never expires. The URL shows the video, filters applied, valid entry count and all selected winners." },
  { q: "Do I need to create an account?",                           a: "No account, no signup and no payment is needed. Paste a YouTube URL and generate random winners instantly." },
];

export default function RandomYouTubeCommentPickerPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <span className={S.label}>Random Winner Generator</span>
        <h1 className={S.h1}>Random YouTube Comment Picker</h1>
        <p className={`${S.body} mt-6 max-w-3xl`}>
          Generate a random winner from any YouTube video or Shorts comment
          section. Filter the entry pool by keyword, emoji or time window,
          remove duplicate users and get a public verification page as proof.
          Free, instant, no account needed.
        </p>

        <div className={S.ctaRow}>
          <a href="/#tool" className={S.cta}>Generate Random Winner →</a>
          <a href="/youtube-comment-picker" className={S.ctaGhost}>Comment Picker →</a>
          <a href="/youtube-shorts-giveaway-picker" className={S.ctaGhost}>Shorts Picker →</a>
        </div>

        <div className="flex flex-wrap gap-6 mt-8">
          {["Truly random algorithm","Public verification page","Works on any video","Free forever"].map(t => (
            <span key={t} className={S.chip}><span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0"/>{t}</span>
          ))}
        </div>

        <div className={S.divider}/>

        {/* WHAT IS IT */}
        <section>
          <span className={S.label}>Overview</span>
          <h2 className={S.h2}>What is a Random YouTube Comment Picker?</h2>
          <div className="mt-6 space-y-4 max-w-3xl">
            <p className={S.body}>A random YouTube comment picker is a tool that loads all comments from a YouTube video and selects one or more winners using a verifiably random algorithm. It removes the guesswork, manual effort and bias from choosing giveaway winners.</p>
            <p className={S.body}>Most random pickers stop at the winner name. YT Giveaway Picker goes further — it generates a permanent public verification page for every draw, showing your audience exactly how the winner was chosen, what filters were applied and how many valid entries were in the pool. This makes disputes impossible and builds genuine trust with your viewers.</p>
            <p className={S.body}>The tool supports both standard YouTube videos and YouTube Shorts, handles comment pools of any size and lets you stack multiple filters to define exactly which comments qualify as valid entries before the random selection is made.</p>
          </div>
        </section>

        <div className={S.divider}/>

        {/* HOW IT WORKS */}
        <section>
          <span className={S.label}>Step by Step</span>
          <h2 className={S.h2}>How to Pick a Random YouTube Comment Winner</h2>
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

        {/* COMPARISON TABLE */}
        <section>
          <span className={S.label}>Comparison</span>
          <h2 className={S.h2}>Why Use This Over Other Methods?</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/[0.07]">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[#111827] border-b border-white/[0.07]">
                  <th className="px-6 py-4 text-white font-black">Method</th>
                  <th className="px-6 py-4 text-white font-black text-center">Truly Random</th>
                  <th className="px-6 py-4 text-white font-black text-center">Publicly Verified</th>
                  <th className="px-6 py-4 text-white font-black text-center">Instant</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.method} className={`border-b border-white/[0.05] transition-colors hover:bg-white/[0.02] ${i === COMPARE.length - 1 ? "bg-lime-400/[0.03]" : ""}`}>
                    <td className={`px-6 py-4 font-bold ${i === COMPARE.length - 1 ? "text-lime-400" : "text-zinc-300"}`}>{row.method}</td>
                    <td className="px-6 py-4 text-center text-base">{row.random   ? "✅" : "❌"}</td>
                    <td className="px-6 py-4 text-center text-base">{row.verified ? "✅" : "❌"}</td>
                    <td className="px-6 py-4 text-center text-base">{row.fast     ? "✅" : "❌"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className={S.divider}/>

        {/* FEATURES */}
        <section>
          <span className={S.label}>Features</span>
          <h2 className={S.h2}>Everything in the Random Comment Picker</h2>
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

        {/* RELATED TOOLS */}
        <section>
          <div className="rounded-2xl bg-lime-400/[0.03] border border-lime-400/[0.12] p-8">
            <span className={S.label}>Related Tools</span>
            <h2 className={`${S.h2} text-2xl`}>Other Pickers on YT Giveaway Picker</h2>
            <p className={`${S.body} mt-3 max-w-xl`}>The same random selection engine powers dedicated pickers for standard YouTube videos and YouTube Shorts — all with the same verification system and winner card downloads.</p>
            <div className={S.ctaRow}>
              <a href="/youtube-comment-picker" className={S.cta}>YouTube Comment Picker →</a>
              <a href="/youtube-shorts-giveaway-picker" className={S.ctaGhost}>YouTube Shorts Picker →</a>
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
          <h2 className="text-3xl md:text-4xl font-black">Generate Your Random Winner Now</h2>
          <p className={`${S.body} mt-4 max-w-md mx-auto`}>Free forever. No signup. Paste any YouTube URL and pick a verified random winner in seconds.</p>
          <div className="flex justify-center mt-8">
            <a href="/#tool" className={S.cta}>Start Free →</a>
          </div>
        </section>

      </div>
    </main>
  );
}