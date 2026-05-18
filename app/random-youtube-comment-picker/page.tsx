export const metadata = {
  title: "Random YouTube Comment Picker | Free Giveaway Generator",
  description:
    "Randomly pick YouTube comment winners with duplicate filtering, keyword filters, emoji filters, and verification links.",
};

export default function RandomYouTubeCommentPickerPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-lime-400 font-black uppercase tracking-[0.2em] text-sm">
          Random Winner Generator
        </p>

        <h1 className="text-5xl md:text-7xl font-black mt-4">
          Random YouTube Comment Picker
        </h1>

        <p className="text-zinc-400 text-lg mt-6 max-w-3xl leading-relaxed">
          Select random winners from YouTube video and Shorts comments with a
          fair, transparent, and shareable giveaway picker.
        </p>

        <a
          href="/#tool"
          className="inline-flex mt-8 h-12 px-6 rounded-xl bg-lime-400 text-black font-black items-center"
        >
          Generate Random Winner
        </a>

        <section className="mt-16 grid gap-6 text-zinc-400 leading-relaxed">
          <h2 className="text-4xl font-black text-white">
            Random Picker With Verification
          </h2>

          <p>
            This random YouTube comment picker is designed for creators who want
            more than a simple winner name. It saves results, creates
            verification pages, and lets you download winner card templates.
          </p>

          <p>
            You can pick 1, 3, 5, or custom winner counts depending on your
            giveaway format.
          </p>
        </section>
      </div>
    </main>
  );
}