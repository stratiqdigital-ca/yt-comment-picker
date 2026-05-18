export const metadata = {
  title: "Terms of Use | YT Giveaway Picker",
  description: "Terms of use for YT Giveaway Picker.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black">Terms of Use</h1>

        <div className="mt-8 space-y-6 text-zinc-400 leading-relaxed">
          <p>
            YT Giveaway Picker is a free tool for selecting random winners from
            public YouTube video and YouTube Shorts comments.
          </p>

          <p>
            Users are responsible for following YouTube rules, local giveaway
            laws, platform policies, and sponsor requirements.
          </p>

          <p>
            The tool provides random selection and verification features, but it
            does not guarantee legal compliance for any giveaway.
          </p>

          <p>
            We may limit usage, cache comments, block abusive activity, or
            update features to protect service reliability.
          </p>

          <p>
            By using the tool, you agree to use it fairly and responsibly.
          </p>
        </div>
      </div>
    </main>
  );
}