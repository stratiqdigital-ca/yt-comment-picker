import { S, colors } from '@/lib/subpage-styles'

export const metadata = {
  title: "Random YouTube Comment Picker — Free Generator",
  description: "Free random YouTube comment picker to select winners from any video or Shorts. Filter by keyword, emoji and time window. Public verification pages and downloadable winner cards.",
}

const FEATURES = [
  { icon: "🎲", title: "Cryptographic Randomness",      desc: "True random selection — not pseudo-random, not biased. Every valid entry has an exactly equal probability of being chosen." },
  { icon: "🔗", title: "Works with Any YouTube URL",    desc: "Standard videos, Shorts, youtu.be links — paste any valid YouTube URL and it works. We detect the format automatically." },
  { icon: "🚫", title: "Duplicate User Removal",        desc: "One entry per YouTube account. The algorithm deduplicates by channel ID so the same user can't win by commenting multiple times." },
  { icon: "#️⃣", title: "Keyword Filter",                desc: "Restrict valid entries to comments containing a specific word, hashtag or phrase." },
  { icon: "😊", title: "Emoji Filter",                  desc: "Require a specific emoji in the comment. Ideal for reaction giveaways and engagement campaigns." },
  { icon: "⏱️", title: "Time Window Filter",            desc: "Limit entries to the first N minutes after the video was published. Reward early fans, not late algorithm viewers." },
  { icon: "✅", title: "Public Verification Page",      desc: "Every draw generates a permanent /verify URL. Share it with your audience for complete transparency." },
  { icon: "📥", title: "Winner Card Downloads",         desc: "Download PNG winner cards in multiple formats including vertical Story templates." },
  { icon: "📋", title: "Full Draw History",             desc: "Every draw is saved. Revisit any past giveaway, redownload cards and reshare verification links." },
]

const STEPS = [
  { num: "01", title: "Paste Any YouTube URL",        desc: "Copy a YouTube video, Shorts or youtu.be link. Paste it into the input bar on the homepage." },
  { num: "02", title: "Load Comments",                desc: "Click Load Comments. We fetch all public comments and cache them for instant future access." },
  { num: "03", title: "Configure Filters (Optional)", desc: "Set keywords, emoji, time window and duplicate removal. Or leave everything blank for a pure random pick." },
  { num: "04", title: "Pick Random Winners",          desc: "Click Pick Winner. The tool randomly selects from the valid entry pool and reveals winners with an animated display." },
  { num: "05", title: "Verify and Share",             desc: "Copy the public verification URL and share it in your video description, pinned comment or social media." },
]

const VERSUS = [
  { title: "Manual picking",       desc: "Scrolling through comments and picking someone is subjective, time-consuming and impossible to prove was fair." },
  { title: "Spreadsheet randomizers", desc: "Exporting to a spreadsheet, running RAND() and screenshotting is slow and still doesn't generate public proof." },
  { title: "Generic random tools", desc: "Tools that don't integrate with YouTube force you to manually copy comments. They can't deduplicate by account or filter by time window." },
  { title: "YT Giveaway Picker",   desc: "Loads directly from YouTube, applies smart filters, picks truly random winners and generates a public verification page — all in one flow." },
]

const FAQS = [
  { q: "Is the random selection truly random?",         a: "Yes. The algorithm uses cryptographic random number generation. Every valid entry has exactly the same probability of being chosen." },
  { q: "Can I run it with no filters?",                 a: "Yes. Leave all filters blank and it picks randomly from every comment on the video." },
  { q: "Does it work with YouTube Shorts?",             a: "Yes. Paste any youtube.com/shorts/ URL and it works identically." },
  { q: "How is duplicate removal handled?",             a: "When enabled, only one comment per YouTube channel ID counts. If a user posted 50 comments, they get one entry." },
  { q: "What does the verification page show?",         a: "The video title, all filters used, total valid entry count and all selected winners — giving your audience full transparency." },
  { q: "Can I pick more than one winner?",              a: "Yes. Pick 1, 3, 5 or any custom number of winners from a single draw." },
  { q: "Is it free?",                                   a: "Yes — 100% free with no account required and no hidden limits." },
  { q: "How many comments can the tool handle?",        a: "The tool loads all publicly available comments on a video — typically up to 10,000 or more." },
]

export default function RandomYouTubeCommentPickerPage() {
  return (
    <main className="min-h-screen px-6 py-16" style={colors.page}>
      <div className="max-w-5xl mx-auto">

        <span className={S.label} style={colors.label}>Random Picker</span>
        <h1 className={S.h1} style={colors.h}>Random YouTube Comment Picker</h1>
        <p className={`${S.body} mt-6 max-w-3xl`} style={colors.body}>
          Pick truly random winners from YouTube video or Shorts comments. No bias, no manipulation — cryptographic randomness with public verification and downloadable winner cards. Free, instant, no signup.
        </p>

        <div className={S.ctaRow}>
          <a href="/#tool" className={S.cta} style={colors.cta}>Pick Random Winner →</a>
          <a href="/youtube-comment-picker" className={S.ctaGhost} style={colors.ctaGhost}>Video Picker →</a>
          <a href="/youtube-shorts-giveaway-picker" className={S.ctaGhost} style={colors.ctaGhost}>Shorts Picker →</a>
        </div>

        <div className="flex flex-wrap gap-6 mt-8">
          {["True randomness","All YouTube formats","Public verification","Free forever"].map(t => (
            <span key={t} className={S.chip} style={colors.chip}><span className="w-1.5 h-1.5 rounded-full shrink-0" style={colors.chipDot}/>{t}</span>
          ))}
        </div>

        <div className={S.divider} style={colors.divider}/>

        <section>
          <span className={S.label} style={colors.label}>Overview</span>
          <h2 className={S.h2} style={colors.h}>What is a Random YouTube Comment Picker?</h2>
          <div className="mt-6 space-y-4 max-w-3xl">
            <p className={S.body} style={colors.body}>A random YouTube comment picker is a tool that loads all public comments from any YouTube video and uses true randomness to select one or more winners. It removes human bias from the selection process entirely.</p>
            <p className={S.body} style={colors.body}>YT Giveaway Picker generates cryptographically random selections, deduplicates entries by YouTube account and produces a permanent public verification page for every draw. This means your audience can confirm the result was genuine without trusting your word alone.</p>
            <p className={S.body} style={colors.body}>The tool supports standard YouTube videos, Shorts and youtu.be links. All filters — keyword, emoji, time window, duplicate removal — work identically across all formats.</p>
          </div>
        </section>

        <div className={S.divider} style={colors.divider}/>

        <section>
          <span className={S.label} style={colors.label}>Step by Step</span>
          <h2 className={S.h2} style={colors.h}>How to Pick Random YouTube Comments</h2>
          <div className="mt-8 grid gap-4">
            {STEPS.map(step => (
              <div key={step.num} className={`${S.card} flex gap-5 items-start`} style={colors.card}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={colors.stepIcon}>
                  <span className="font-black" style={colors.stepNum}>{step.num}</span>
                </div>
                <div>
                  <h3 className={S.h3} style={colors.h}>{step.title}</h3>
                  <p className={`${S.bodySm} mt-1.5`} style={colors.body}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className={S.divider} style={colors.divider}/>

        <section>
          <span className={S.label} style={colors.label}>Comparison</span>
          <h2 className={S.h2} style={colors.h}>Random Picking Methods Compared</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {VERSUS.map(item => (
              <div key={item.title} className={S.card} style={colors.card}>
                <h3 className={S.h3} style={colors.h}>{item.title}</h3>
                <p className={`${S.bodySm} mt-2`} style={colors.body}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={S.divider} style={colors.divider}/>

        <section>
          <span className={S.label} style={colors.label}>Features</span>
          <h2 className={S.h2} style={colors.h}>Full Feature Set</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(f => (
              <div key={f.title} className={S.card} style={colors.card}>
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className={S.h3} style={colors.h}>{f.title}</h3>
                <p className={`${S.bodySm} mt-2`} style={colors.body}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={S.divider} style={colors.divider}/>

        <section>
          <div className="rounded-2xl p-8" style={colors.accentSoft}>
            <span className={S.label} style={colors.label}>Related Tools</span>
            <h2 className="text-2xl font-black" style={colors.h}>Also on YT Giveaway Picker</h2>
            <p className={`${S.body} mt-3 max-w-xl`} style={colors.body}>Dedicated pages for YouTube video giveaways and Shorts giveaways. All tools share the same engine, filters and verification system.</p>
            <div className={S.ctaRow}>
              <a href="/youtube-comment-picker" className={S.cta} style={colors.cta}>YouTube Comment Picker →</a>
              <a href="/youtube-shorts-giveaway-picker" className={S.ctaGhost} style={colors.ctaGhost}>Shorts Picker →</a>
            </div>
          </div>
        </section>

        <div className={S.divider} style={colors.divider}/>

        <section>
          <span className={S.label} style={colors.label}>FAQ</span>
          <h2 className={S.h2} style={colors.h}>Frequently Asked Questions</h2>
          <div className="mt-8 grid gap-4">
            {FAQS.map(faq => (
              <div key={faq.q} className={S.card} style={colors.card}>
                <h3 className={S.h3} style={colors.h}>{faq.q}</h3>
                <p className={`${S.bodySm} mt-2`} style={colors.body}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={S.divider} style={colors.divider}/>

        <section className="rounded-2xl p-10 text-center mb-8" style={colors.ctaBanner}>
          <h2 className="text-3xl md:text-4xl font-black" style={colors.h}>Pick Your Random Winner Now</h2>
          <p className={`${S.body} mt-4 max-w-md mx-auto`} style={colors.body}>Free forever. No signup. Paste any YouTube URL and pick verified winners in seconds.</p>
          <div className="flex justify-center mt-8">
            <a href="/#tool" className={S.cta} style={colors.cta}>Start Free →</a>
          </div>
        </section>

      </div>
    </main>
  )
}
