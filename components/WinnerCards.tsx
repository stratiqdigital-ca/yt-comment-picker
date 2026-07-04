"use client";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

type Props = {
  winners: any[];
  verificationId?: string;
  saveError?: string;
  saving?: boolean;
  onRetry?: () => void;
};

export default function WinnerCards({ winners, verificationId, saveError, saving, onRetry }: Props) {
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
          <button onClick={copyResults}
            className="h-11 px-5 rounded-xl font-semibold transition"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
            Copy Results
          </button>
        </div>

        {/* Winner list */}
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

        {/* ── CTA Section: Verify Winners / Saving / Error+Retry ── */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {verificationId ? (
            /* ✅ Save succeeded — show Verify Winners button */
            <div className="rounded-2xl p-6 text-center" style={{ background: 'var(--bg-secondary)', border: '2px solid var(--accent-border)' }}>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] mb-4"
                style={{ background: 'var(--success-soft)', border: '1px solid var(--success-border)', color: 'var(--success)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--success)' }} />
                Results saved & verified
              </div>

              <p className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Download winner cards & share proof
              </p>
              <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: 'var(--text-muted)' }}>
                Visit the verification page to download winner cards in multiple templates, share on social media, and get your public proof link.
              </p>

              <a
                href={`/verify/${verificationId}`}
                target="_blank"
                className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-2xl font-black text-lg hover:scale-[1.03] transition"
                style={{ background: 'var(--accent)', color: 'var(--accent-on)', boxShadow: 'var(--shadow-accent)' }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
                </svg>
                Verify Winners
              </a>
            </div>

          ) : saveError ? (
            /* ❌ Save failed — show error + retry button */
            <div className="rounded-2xl p-6 text-center" style={{ background: 'var(--danger-soft)', border: '2px solid var(--danger-border)' }}>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] mb-4"
                style={{ background: 'var(--danger-soft)', border: '1px solid var(--danger-border)', color: 'var(--danger)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: 'var(--danger)' }} />
                Save failed
              </div>

              <p className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Could not save results
              </p>
              <p className="text-sm mb-2 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Your winners are still shown above — they just couldn't be saved to the verification system.
              </p>
              <p className="text-xs mb-6 max-w-md mx-auto font-mono px-4 py-2 rounded-lg"
                style={{ background: 'var(--bg-card)', color: 'var(--danger)', border: '1px solid var(--danger-border)' }}>
                {saveError}
              </p>

              {onRetry && (
                <button
                  onClick={onRetry}
                  disabled={saving}
                  className="inline-flex items-center justify-center gap-3 h-14 px-10 rounded-2xl font-black text-lg hover:scale-[1.03] transition disabled:opacity-60"
                  style={{ background: 'var(--accent)', color: 'var(--accent-on)', boxShadow: 'var(--shadow-accent)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                  </svg>
                  {saving ? 'Saving...' : 'Retry Save'}
                </button>
              )}
            </div>

          ) : (
            /* ⏳ Still saving — show spinner */
            <div className="rounded-2xl p-6 text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
              <div className="inline-flex items-center gap-3">
                <div className="w-5 h-5 rounded-full animate-spin" style={{ border: '2px solid var(--accent-soft)', borderTopColor: 'var(--accent)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                  Saving results & creating verification page...
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
