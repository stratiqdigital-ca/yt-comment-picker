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