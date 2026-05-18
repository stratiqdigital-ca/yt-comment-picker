export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-black text-xl">
          <span className="text-lime-400">YT</span> Giveaway Picker
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="/#tool" className="hover:text-white">
            Tool
          </a>

          <div className="relative group">
            <button className="hover:text-white">
              Learn
            </button>

            <div className="absolute left-0 top-full pt-4 hidden group-hover:block">
              <div className="w-72 rounded-2xl border border-white/10 bg-[#101827] p-3 shadow-2xl">
                <a
                  href="/youtube-comment-picker"
                  className="block rounded-xl px-4 py-3 hover:bg-white/5"
                >
                  <p className="font-bold text-white">YouTube Comment Picker</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Pick winners from YouTube comments.
                  </p>
                </a>

                <a
                  href="/youtube-shorts-giveaway-picker"
                  className="block rounded-xl px-4 py-3 hover:bg-white/5"
                >
                  <p className="font-bold text-white">YouTube Shorts Picker</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Giveaway picker for Shorts comments.
                  </p>
                </a>

                <a
                  href="/random-youtube-comment-picker"
                  className="block rounded-xl px-4 py-3 hover:bg-white/5"
                >
                  <p className="font-bold text-white">Random Comment Picker</p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Random YouTube winner generator.
                  </p>
                </a>
              </div>
            </div>
          </div>

          <a href="/#features" className="hover:text-white">
            Features
          </a>

          <a href="/#how-it-works" className="hover:text-white">
            How it works
          </a>

          <a href="/#faq" className="hover:text-white">
            FAQ
          </a>
        </nav>

        <a
          href="/#tool"
          className="h-10 px-4 rounded-xl bg-lime-400 text-black font-black flex items-center"
        >
          Start Free
        </a>
      </div>
    </header>
  );
}