export const metadata = {
  title: "YouTube Comment Picker | Free Random Winner Tool",
  description:
    "Use our free YouTube comment picker to randomly select giveaway winners from YouTube video and Shorts comments.",
};

export default function YouTubeCommentPickerPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-lime-400 font-black uppercase tracking-[0.2em] text-sm">
          Free Tool
        </p>

        <h1 className="text-5xl md:text-7xl font-black mt-4">
          YouTube Comment Picker
        </h1>

        <p className="text-zinc-400 text-lg mt-6 max-w-3xl leading-relaxed">
          Pick random winners from YouTube comments with keyword filters, emoji
          filters, duplicate removal, first-minute filters, saved verification
          pages, and downloadable winner cards.
        </p>

        <a
          href="/#tool"
          className="inline-flex mt-8 h-12 px-6 rounded-xl bg-lime-400 text-black font-black items-center"
        >
          Use Free Tool
        </a>

        <section className="mt-16 grid gap-6 text-zinc-400 leading-relaxed">
          <h2 className="text-4xl font-black text-white">
            Free YouTube Giveaway Winner Picker
          </h2>

          <p>
            YT Giveaway Picker helps creators run transparent YouTube giveaways
            by loading public comments and randomly selecting winners. You can
            filter entries by keyword, emoji, duplicate users, and early comment
            time windows.
          </p>

          <p>
            Every saved draw can generate a public verification page so your
            audience can see the result, winner list, valid entries, and giveaway
            settings.
          </p>
        </section>
      </div>
    </main>
  );
}