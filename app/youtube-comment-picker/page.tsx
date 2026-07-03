import { S, colors } from '@/lib/subpage-styles'

export const metadata = {
  title: "YouTube Comment Picker — Free Random Winner Tool",
  description: "Free YouTube comment picker to randomly select giveaway winners. Filter by keyword, emoji, duplicate users and time window. Get public verification pages and downloadable winner cards.",
}

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
]

const STEPS = [
  { num: "01", title: "Paste Your YouTube Video URL",  desc: "Copy any YouTube video link — youtube.com/watch, youtube.com/shorts or youtu.be formats all work. Paste it into the input bar." },
  { num: "02", title: "Load All Comments",             desc: "Click Load Comments. We fetch every public comment on the video and display the total count." },
  { num: "03", title: "Set Your Filters",              desc: "Choose keyword, emoji, time window and duplicate removal. Filters stack — use as many as you need. The valid entry count updates live." },
  { num: "04", title: "Pick Random Winners",           desc: "Click Pick Winner. The tool randomly selects from all valid entries and reveals winners with an animated display." },
  { num: "05", title: "Share Your Verification Page",  desc: "Copy the public verification URL and paste it in your video description or pinned comment so your audience can confirm the result." },
]

const USECASES = [
  { title: "Gaming Channels",         desc: "Pick winners from giveaway comment sections — game keys, merch, subscriptions. Filter by keyword like 'giveaway' to qualify only entered viewers." },
  { title: "Product Review Creators", desc: "Run sponsor giveaways with full transparency. Share the verification URL so everyone can see the draw was fair." },
  { title: "Music & Entertainment",   desc: "Use emoji filtering for reaction-based entry campaigns — require a specific emoji and reward your most engaged fans." },
  { title: "Education Channels",      desc: "Reward early commenters with the time window filter. Only accept entries from the first 20 or 30 minutes to drive notification-on viewing." },
  { title: "Brand Partnerships",      desc: "Show sponsors a permanent verification page as proof the giveaway was run correctly. Download winner cards as documentation." },
  { title: "Live Stream Follow-ups",  desc: "Run post-stream giveaways from video comments. Pick multiple winners at once and generate a single verification page covering all results." },
]

const FAQS = [
  { q: "Is this YouTube comment picker completely free?",   a: "Yes — 100% free with no account required and no hidden limits. Paste a URL, load comments and pick winners instantly." },
  { q: "How many comments can it load?",                    a: "The tool loads all publicly available comments on a video — typically up to 10,000 or more. Comments are cached so repeat visits load instantly." },
  { q: "Can I pick more than one winner?",                  a: "Yes. You can pick 1, 3, 5 or enter any custom number of winners. All winners are shown together on the verification page." },
  { q: "What does the verification page show?",             a: "The public verification page shows the video title, all filters applied, total valid entry count, and the selected winners — giving your audience full transparency." },
  { q: "Does it work with YouTube Shorts?",                 a: "Yes. Paste any YouTube Shorts URL and it works identically — same filters, same verification system, same winner cards." },
  { q: "What is the keyword filter?",                       a: "The keyword filter requires a specific word, hashtag or phrase to appear in a comment for it to count as a valid entry." },
  { q: "How does duplicate removal work?",                  a: "When enabled, only one comment per YouTube account counts toward the draw regardless of how many times that user commented." },
  { q: "Can I download winner proof?",                      a: "Yes. After picking winners you can download PNG winner cards in multiple templates. A permanent public URL is also generated you can share as proof." },
]

export default function YouTubeCommentPickerPage() {
  return (
    <main className="min-h-screen px-6 py-16" style={colors.page}>
      <div className="max-w-5xl mx-auto">

        <span className={S.label} style={colors.label}>Free Tool</span>
        <h1 className={S.h1} style={colors.h}>YouTube Comment Picker</h1>
        <p className={`${S.body} mt-6 max-w-3xl`} style={colors.body}>
          Pick random winners from YouTube video comments — with keyword filters, emoji filters, duplicate removal, time window filters, public verification pages and downloadable winner cards. Free, instant, no signup.
        </p>

        <div className={S.ctaRow}>
          <a href="/#tool" className={S.cta} style={colors.cta}>Use Free Tool →</a>
          <a href="/youtube-shorts-giveaway-picker" className={S.ctaGhost} style={colors.ctaGhost}>Shorts Picker →</a>
          <a href="/random-youtube-comment-picker" className={S.ctaGhost} style={colors.ctaGhost}>Random Picker →</a>
        </div>

        <div className="flex flex-wrap gap-6 mt-8">
          {["No account needed","10,000+ giveaways picked","Public verification","Free forever"].map(t => (
            <span key={t} className={S.chip} style={colors.chip}><span className="w-1.5 h-1.5 rounded-full shrink-0" style={colors.chipDot}/>{t}</span>
          ))}
        </div>

        <div className={S.divider} style={colors.divider}/>

        <section>
          <span className={S.label} style={colors.label}>Overview</span>
          <h2 className={S.h2} style={colors.h}>What is a YouTube Comment Picker?</h2>
          <div className="mt-6 space-y-4 max-w-3xl">
            <p className={S.body} style={colors.body}>A YouTube comment picker is a tool that loads all public comments from a YouTube video and randomly selects one or more winners from valid entries. It is used by creators to run fair, transparent giveaways directly from their video comment section.</p>
            <p className={S.body} style={colors.body}>YT Giveaway Picker goes further than a basic random picker. Every draw is saved with a permanent public verification URL so your audience can confirm the result was genuine. You can filter entries by keyword, emoji or time window, remove duplicate users and download winner cards for social sharing.</p>
            <p className={S.body} style={colors.body}>Whether you run a small channel giveaway or a large sponsor campaign, the tool works the same — paste your URL, load comments, set your filters and pick winners in under 60 seconds.</p>
          </div>
        </section>

        <div className={S.divider} style={colors.divider}/>

        <section>
          <span className={S.label} style={colors.label}>Step by Step</span>
          <h2 className={S.h2} style={colors.h}>How to Use the YouTube Comment Picker</h2>
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
          <span className={S.label} style={colors.label}>Features</span>
          <h2 className={S.h2} style={colors.h}>Everything You Need for a Fair Giveaway</h2>
          <p className={`${S.body} mt-4 max-w-2xl`} style={colors.body}>Every feature is built around making your giveaway fast to run, easy to verify and impossible to dispute.</p>
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
          <span className={S.label} style={colors.label}>Use Cases</span>
          <h2 className={S.h2} style={colors.h}>Who Uses This Tool and Why</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {USECASES.map(u => (
              <div key={u.title} className={S.card} style={colors.card}>
                <h3 className={S.h3} style={colors.h}>{u.title}</h3>
                <p className={`${S.bodySm} mt-2`} style={colors.body}>{u.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className={S.divider} style={colors.divider}/>

        <section>
          <div className="rounded-2xl p-8" style={colors.accentSoft}>
            <span className={S.label} style={colors.label}>Related Tools</span>
            <h2 className="text-2xl font-black" style={colors.h}>Also Available on YT Giveaway Picker</h2>
            <p className={`${S.body} mt-3 max-w-xl`} style={colors.body}>The same tool works for YouTube Shorts and includes a dedicated random comment generator. All tools share the same verification system and winner card templates.</p>
            <div className={S.ctaRow}>
              <a href="/youtube-shorts-giveaway-picker" className={S.cta} style={colors.cta}>YouTube Shorts Picker →</a>
              <a href="/random-youtube-comment-picker" className={S.ctaGhost} style={colors.ctaGhost}>Random Comment Picker →</a>
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
          <h2 className="text-3xl md:text-4xl font-black" style={colors.h}>Ready to Pick Your Winner?</h2>
          <p className={`${S.body} mt-4 max-w-md mx-auto`} style={colors.body}>Free forever. No signup. Paste your YouTube URL and pick verified winners in seconds.</p>
          <div className="flex justify-center mt-8">
            <a href="/#tool" className={S.cta} style={colors.cta}>Start Free →</a>
          </div>
        </section>

      </div>
    </main>
  )
}
