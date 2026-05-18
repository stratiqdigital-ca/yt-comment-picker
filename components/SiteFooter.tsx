export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <p className="font-black text-xl">
            <span className="text-lime-400">YT</span> Giveaway Picker
          </p>

          <p className="text-zinc-500 mt-2 text-sm">
            Free YouTube video and Shorts giveaway picker.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy
          </a>

          <a href="/terms" className="hover:text-white">
            Terms
          </a>

          <a href="/contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}