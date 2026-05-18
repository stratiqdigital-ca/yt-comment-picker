export default function LoadingScreen() {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl border border-lime-400/20 bg-lime-400/10 p-8 text-center">
        <div className="mx-auto w-16 h-16 rounded-full border-4 border-lime-400/20 border-t-lime-400 animate-spin" />

        <h3 className="text-3xl font-black mt-6">
          Loading YouTube Comments
        </h3>

        <p className="text-zinc-400 mt-3">
          Fetching comments, checking cache, and preparing your giveaway entries.
        </p>
      </div>
    </section>
  );
}