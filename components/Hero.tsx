export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 mb-6">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        YT Giveaway Picker
      </div>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
        Pick Random YouTube Giveaway Winners
        <span className="block text-lime-400">
          Instantly & Fairly
        </span>
      </h1>

      <p className="mt-6 text-zinc-400 text-lg max-w-2xl leading-relaxed">
        Mobile-first YouTube video and YouTube Shorts giveaway picker with duplicate filtering, animated reveals, and winner cards.
      </p>
    </section>
  );
}