"use client";
import toast from "react-hot-toast";

type Props = {
  winners: any[];
  verificationId?: string;
};

export default function WinnerCards({ winners, verificationId }: Props) {
  if (!winners.length) return null;

  async function copyResults() {
    const text = winners
      .map(
        (winner, index) =>
          `Winner #${index + 1}: ${winner.authorName}\n${winner.text}`
      )
      .join("\n\n");

    await navigator.clipboard.writeText(text);
    toast.success("Winner results copied.");
  }

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10 pb-10">
      <div className="rounded-3xl border border-lime-400/20 bg-lime-400/10 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-3xl font-black">Winners 🎉</h3>
            <p className="text-zinc-400 mt-2">
              Your winners have been selected and saved.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {verificationId && (
              <a
                href={`/verify/${verificationId}`}
                target="_blank"
                className="h-12 px-5 rounded-xl bg-lime-400 text-black font-black flex items-center hover:scale-[1.02] transition"
              >
                View Winner Cards
              </a>
            )}

            <button
              onClick={copyResults}
              className="h-12 px-5 rounded-xl border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition"
            >
              Copy Results
            </button>
          </div>
        </div>

        <div className="grid gap-4">
          {winners.map((winner, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-lime-400 text-black flex items-center justify-center font-black text-lg">
                  {index + 1}
                </div>

                <div>
                  <p className="font-black text-xl">
                    #{index + 1} {winner.authorName}
                  </p>

                  <p className="mt-3 text-zinc-300 break-words">
                    {winner.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!verificationId && (
          <p className="mt-4 text-sm text-zinc-500">
            Verification link will appear after the result is saved.
          </p>
        )}
      </div>
    </section>
  );
}