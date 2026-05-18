export const metadata = {
  title: "Privacy Policy | YT Giveaway Picker",
  description: "Privacy policy for YT Giveaway Picker.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black">Privacy Policy</h1>

        <div className="mt-8 space-y-6 text-zinc-400 leading-relaxed">
          <p>
            YT Giveaway Picker helps users pick giveaway winners from public
            YouTube video and YouTube Shorts comments.
          </p>

          <p>
            We may store video IDs, public video information, public comments,
            giveaway settings, winner results, and verification records to make
            the tool work properly.
          </p>

          <p>
            We do not ask users to log in to YouTube, and we do not collect
            private YouTube account credentials.
          </p>

          <p>
            We may use analytics and advertising tools to understand site usage
            and support the free version of the tool.
          </p>

          <p>
            Contact us if you want a saved verification record reviewed or
            removed.
          </p>
        </div>
      </div>
    </main>
  );
}