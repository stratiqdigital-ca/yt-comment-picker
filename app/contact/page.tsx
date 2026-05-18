export const metadata = {
  title: "Contact | YT Giveaway Picker",
  description: "Contact YT Giveaway Picker.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black">Contact</h1>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-zinc-400 leading-relaxed">
            For support, feedback, verification review, or business inquiries,
            contact us at:
          </p>

          <p className="mt-6 text-2xl font-black text-lime-400">
            support@ytgiveawaypicker.com
          </p>

          <p className="mt-6 text-zinc-500">
            Replace this email with your real support email before launch.
          </p>
        </div>
      </div>
    </main>
  );
}