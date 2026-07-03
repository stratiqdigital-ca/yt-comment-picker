"use client";
import toast from "react-hot-toast";

type Props = { winners: any[]; verificationId?: string };

export default function WinnerCards({ winners, verificationId }: Props) {
  if (!winners.length) return null;

  async function copyResults() {
    const text = winners.map((w, i) => `Winner #${i + 1}: ${w.authorName}\n${w.text}`).join("\n\n");
    await navigator.clipboard.writeText(text);
    toast.success("Winner results copied.");
  }

  return (
    <section className="max-w-5xl mx-auto px-6 mt-10 pb-10">
      <div className="rounded-3xl p-6" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-3xl font-black" style={{ color: 'var(--text-primary)' }}>Winners 🎉</h3>
            <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>Your winners have been selected and saved.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {verificationId && (
              <a href={`/verify/${verificationId}`} target="_blank"
                className="h-12 px-5 rounded-xl font-black flex items-center hover:scale-[1.02] transition"
                style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>
                View Winner Cards
              </a>
            )}
            <button onClick={copyResults}
              className="h-12 px-5 rounded-xl font-semibold transition"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
              Copy Results
            </button>
          </div>
        </div>
        <div className="grid gap-4">
          {winners.map((winner, index) => (
            <div key={index} className="rounded-2xl p-5" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-black text-lg"
                  style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>{index + 1}</div>
                <div>
                  <p className="font-black text-xl" style={{ color: 'var(--text-primary)' }}>#{index + 1} {winner.authorName}</p>
                  <p className="mt-3 break-words" style={{ color: 'var(--text-secondary)' }}>{winner.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!verificationId && <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>Verification link will appear after the result is saved.</p>}
      </div>
    </section>
  );
}
