type Props = {
  revealing: boolean;
  revealName: string;
};

export default function WinnerReveal({
  revealing,
  revealName,
}: Props) {
  if (!revealing) return null;

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl border border-lime-400/20 bg-lime-400/10 p-10 text-center">
        <p className="text-zinc-400 uppercase tracking-[0.2em] text-sm">
          Picking Winner
        </p>

        <h2 className="mt-6 text-4xl md:text-6xl font-black text-lime-300 animate-pulse break-words">
          {revealName}
        </h2>
      </div>
    </section>
  );
}