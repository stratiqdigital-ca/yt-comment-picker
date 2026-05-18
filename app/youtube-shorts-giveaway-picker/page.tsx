export const metadata = {
  title: "YouTube Shorts Giveaway Picker | Free Winner Tool",
  description:
    "Pick random winners from YouTube Shorts comments with filters, verification pages, and winner cards.",
};

export default function YouTubeShortsGiveawayPickerPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-lime-400 font-black uppercase tracking-[0.2em] text-sm">
          Shorts Giveaway Tool
        </p>

        <h1 className="text-5xl md:text-7xl font-black mt-4">
          YouTube Shorts Giveaway Picker
        </h1>

        <p className="text-zinc-400 text-lg mt-6 max-w-3xl leading-relaxed">
          Run YouTube Shorts giveaways by picking random winners from Shorts
          comments. Use filters, save results, and share verified winner cards.
        </p>

        <a
          href="/#tool"
          className="inline-flex mt-8 h-12 px-6 rounded-xl bg-lime-400 text-black font-black items-center"
        >
          Pick Shorts Winner
        </a>

        <section className="mt-16 grid gap-6 text-zinc-400 leading-relaxed">
          <h2 className="text-4xl font-black text-white">
            Built for YouTube Shorts Creators
          </h2>

          <p>
            YouTube Shorts giveaways often move fast, so this tool includes
            first-minute comment filtering, emoji filtering, duplicate user
            removal, and public verification pages for transparent results.
          </p>

          <p>
            Paste a YouTube Shorts URL, load comments, choose your filters, and
            pick winners instantly.
          </p>
        </section>
      </div>
    </main>
  );
}