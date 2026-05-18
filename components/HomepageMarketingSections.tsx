import AdSlot from "./AdSlot";

export default function HomepageMarketingSections() {
  return (
    <>
      <AdSlot />

      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lime-400 font-black tracking-[0.25em] text-sm uppercase">
            Creator Giveaway Tool
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Built for YouTube Videos & Shorts
          </h2>

          <p className="text-zinc-400 mt-5 text-lg">
            Pick winners fairly, filter entries, save results, and create
            verified winner cards your audience can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {[
            ["🎯", "Keyword & emoji filters", "Filter comments by required words, hashtags, or emojis."],
            ["⏱️", "First minutes filter", "Select winners from the first 20, 30, 60, or custom minutes."],
            ["🏆", "Winner card templates", "Download clean proof cards, story cards, and certificates."],
            ["🔒", "Saved verification", "Every draw gets a public verification page."],
            ["📱", "Mobile-first", "Designed for creators using phones, Shorts, and social sharing."],
            ["⚡", "Fast cached loading", "Cached comments reduce repeated API calls and improve speed."],
          ].map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-lime-400/30 transition"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="text-xl font-black mt-5">{title}</h3>
              <p className="text-zinc-400 mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[36px] border border-lime-400/20 bg-lime-400/10 p-8 md:p-12">
          <h2 className="text-4xl md:text-6xl font-black">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-5 mt-10">
            {[
              ["1", "Paste URL", "Add a YouTube video or YouTube Shorts link."],
              ["2", "Load comments", "We fetch and cache public comments."],
              ["3", "Apply filters", "Use keyword, emoji, duplicate, and time filters."],
              ["4", "Verify result", "Pick winners and share a public verification page."],
            ].map(([num, title, text]) => (
              <div key={num} className="rounded-3xl bg-black/30 border border-white/10 p-6">
                <div className="w-12 h-12 rounded-xl bg-lime-400 text-black flex items-center justify-center font-black">
                  {num}
                </div>
                <h3 className="font-black text-xl mt-5">{title}</h3>
                <p className="text-zinc-400 mt-3">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdSlot label="Advertisement" />

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-black">
          Free YouTube Giveaway Picker
        </h2>

        <div className="mt-6 space-y-5 text-zinc-400 leading-relaxed text-lg">
          <p>
            YT Giveaway Picker helps creators choose random winners from
            YouTube video and YouTube Shorts comments. It supports duplicate
            filtering, keyword filters, emoji filters, first-minute comment
            windows, custom winner counts, public verification pages, and
            downloadable winner card templates.
          </p>

          <p>
            This tool is designed for creators who want a transparent giveaway
            process. Every saved draw can be opened again through its
            verification link, making it easier to share results with viewers,
            sponsors, communities, and brand partners.
          </p>
        </div>
      </section>

      <section id="faq" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-black mb-8">
          Frequently Asked Questions
        </h2>

        <div className="grid gap-4">
          {[
            ["Does this work with YouTube Shorts?", "Yes. YouTube Shorts use a YouTube video ID, so the same comment picker system can load Shorts comments."],
            ["Can I remove duplicate users?", "Yes. You can enable duplicate filtering so each YouTube user gets only one valid entry."],
            ["Can I filter by emoji?", "Yes. You can choose an emoji from the picker and only include comments that contain that emoji."],
            ["Can I pick comments from the first 30 minutes?", "Yes. You can choose first 20, 30, 60, or custom minutes after the video was published."],
            ["Can I verify old winners?", "Yes. Saved draws appear in giveaway history and can be opened with a public verification link."],
          ].map(([q, a]) => (
            <div key={q} className="glow-card rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-lime-400/30 transition">
              <h3 className="font-black text-xl">{q}</h3>
              <p className="text-zinc-400 mt-3 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}