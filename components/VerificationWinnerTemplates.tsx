"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import ShareButtons from "./ShareButtons";

type Props = { draw: any };

export default function VerificationWinnerTemplates({ draw }: Props) {
  const [selectedTemplate, setSelectedTemplate] = useState("clean");
  const [selectedWinnerIndex, setSelectedWinnerIndex] = useState(0);
  const templateRef = useRef<HTMLDivElement | null>(null);

  const winners = draw.winners || [];
  const selectedWinner = winners[selectedWinnerIndex];
  if (!winners.length) return null;

  function initial(name: string) { return name?.replace("@", "").slice(0, 1).toUpperCase() || "W"; }

  async function downloadTemplate() {
    if (!templateRef.current) return;
    const dataUrl = await toPng(templateRef.current, { cacheBust: true, pixelRatio: 2, backgroundColor: "#0B0F19" });
    const link = document.createElement("a");
    link.download = `yt-giveaway-${selectedTemplate}-${draw.verification_id}.png`;
    link.href = dataUrl;
    link.click();
  }

  return (
    <section className="mt-10 rounded-3xl p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-4xl font-black" style={{ color: 'var(--text-primary)' }}>Winner Card Templates</h3>
          <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>Select a winner, choose a card style, then download or share.</p>
        </div>
        <button onClick={downloadTemplate}
          className="h-12 px-5 rounded-xl font-black hover:scale-[1.02] transition"
          style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>
          Download Selected Card
        </button>
      </div>

      <div className="mb-6">
        <ShareButtons url={typeof window !== "undefined" ? window.location.href : ""} title={`Verified giveaway winners for ${draw.video_title}`} />
      </div>

      <div className="grid lg:grid-cols-[320px_1fr] gap-6">
        <aside className="rounded-3xl p-5" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}>
          <h4 className="text-sm uppercase tracking-[0.18em] mb-4" style={{ color: 'var(--text-muted)' }}>Select Winner</h4>
          <div className="grid gap-3">
            {winners.map((winner: any, index: number) => (
              <button key={index} onClick={() => setSelectedWinnerIndex(index)}
                className="w-full rounded-2xl border p-4 text-left transition overflow-hidden"
                style={{
                  borderColor: selectedWinnerIndex === index ? 'var(--accent)' : 'var(--border)',
                  background: selectedWinnerIndex === index ? 'var(--accent-soft)' : 'var(--bg-card)',
                }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black"
                    style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>{index + 1}</div>
                  <div>
                    <p className="font-bold truncate max-w-[190px]" style={{ color: 'var(--text-primary)' }}>{winner.authorName}</p>
                    <p className="text-xs line-clamp-1 max-w-[190px]" style={{ color: 'var(--text-muted)' }}>{winner.text}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl p-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <h4 className="text-sm uppercase tracking-[0.18em] mb-4" style={{ color: 'var(--text-muted)' }}>Draw Details</h4>
            <div className="grid gap-3 text-sm">
              {[
                ['Valid Entries', draw.valid_entries, true],
                ['Winners', winners.length, false],
                ['Time Filter', draw.settings?.timeWindowMinutes ? `First ${draw.settings.timeWindowMinutes} min` : 'All time', false],
                ['Keyword', draw.settings?.keyword || 'Not used', false],
                ['Emoji', draw.settings?.emoji || 'Not used', false],
                ['Duplicates', draw.settings?.removeDuplicates ? 'Blocked' : 'Allowed', false],
              ].map(([label, value, accent], i) => (
                <div key={i} className="flex justify-between">
                  <span style={{ color: 'var(--text-muted)' }}>{label as string}</span>
                  <span style={{ color: accent ? 'var(--accent-text)' : 'var(--text-primary)' }}>{String(value)}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="grid gap-6">
          {/* Template preview */}
          <div ref={templateRef} className="rounded-3xl p-8" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            {selectedTemplate === "clean" && (
              <div className="text-center">
                <p className="font-black uppercase tracking-[0.2em] text-sm" style={{ color: 'var(--accent-text)' }}>YT Giveaway Picker</p>
                <h2 className="text-4xl font-black mt-4" style={{ color: 'var(--text-primary)' }}>Winner Selected 🎉</h2>
                <div className="mt-8 mx-auto w-24 h-24 rounded-full flex items-center justify-center font-black text-4xl"
                  style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>{initial(selectedWinner.authorName)}</div>
                <p className="text-4xl font-black mt-5" style={{ color: 'var(--text-primary)' }}>{selectedWinner.authorName}</p>
                <div className="mt-6 rounded-2xl p-5 max-w-xl mx-auto" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>&ldquo;{selectedWinner.text}&rdquo;</p>
                </div>
                <p className="mt-8 font-bold" style={{ color: 'var(--accent-text)' }}>Picked from {draw.valid_entries} valid entries</p>
                <p className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>Verification ID: {draw.verification_id}</p>
              </div>
            )}

            {selectedTemplate === "story" && (
              <div className="mx-auto max-w-md min-h-[620px] rounded-[36px] p-8 text-center" style={{ background: 'linear-gradient(to bottom, #3B1E8C, #0B0F1A, #000)', border: '1px solid rgba(124,92,252,0.3)' }}>
                <p className="text-3xl">🎉</p>
                <h2 className="text-4xl font-black mt-4 text-white">GIVEAWAY WINNER</h2>
                <div className="mt-10 mx-auto w-28 h-28 rounded-full flex items-center justify-center font-black text-5xl" style={{ background: 'var(--accent)', color: '#fff' }}>{initial(selectedWinner.authorName)}</div>
                <div className="mt-8 rounded-2xl bg-white text-black p-4 max-w-full overflow-hidden">
                  <p className="text-2xl md:text-3xl font-black break-words leading-tight">{selectedWinner.authorName}</p>
                </div>
                <p className="mt-8 text-zinc-200 leading-relaxed break-words line-clamp-5">&ldquo;{selectedWinner.text}&rdquo;</p>
                <p className="mt-10 font-bold" style={{ color: '#B8A5FF' }}>Verified from {draw.valid_entries} valid entries</p>
                <p className="mt-8 text-xs tracking-[0.3em] text-zinc-400">YT GIVEAWAY PICKER</p>
              </div>
            )}

            {selectedTemplate === "multi" && (
              <div>
                <h2 className="text-4xl font-black text-center" style={{ color: 'var(--accent-text)' }}>Winners Selected 🏆</h2>
                <div className="mt-8 grid gap-4">
                  {winners.map((winner: any, index: number) => (
                    <div key={index} className="rounded-2xl p-5 flex items-center gap-4" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black" style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>#{index + 1}</div>
                      <div>
                        <p className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>{winner.authorName}</p>
                        <p className="line-clamp-2" style={{ color: 'var(--text-secondary)' }}>{winner.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-8 font-bold" style={{ color: 'var(--accent-text)' }}>Picked from {draw.valid_entries} valid entries</p>
              </div>
            )}

            {selectedTemplate === "certificate" && (
              <div className="rounded-3xl p-10 text-center" style={{ background: '#F8F3E7', color: '#000' }}>
                <p className="text-sm tracking-[0.25em] font-black">VERIFIED GIVEAWAY RESULT</p>
                <h2 className="text-5xl font-black mt-6">Winner Certificate</h2>
                <div className="mt-8 border-y border-black/20 py-8">
                  <p className="text-sm uppercase text-black/50">Winner</p>
                  <p className="text-4xl font-black mt-2">{selectedWinner.authorName}</p>
                  <p className="mt-5 text-black/70">&ldquo;{selectedWinner.text}&rdquo;</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                  <div><p className="text-xs text-black/50">Valid Entries</p><p className="font-black">{draw.valid_entries}</p></div>
                  <div><p className="text-xs text-black/50">Verification ID</p><p className="font-black">{draw.verification_id}</p></div>
                </div>
                <p className="mt-8 text-xs tracking-[0.2em]">POWERED BY YT GIVEAWAY PICKER</p>
              </div>
            )}
          </div>

          {/* Template selector */}
          <div className="grid md:grid-cols-4 gap-4">
            {[['clean', 'Clean Proof Card'], ['story', 'Instagram Story Card'], ['multi', 'Multi-Winner Card'], ['certificate', 'Certificate Card']].map(([key, label]) => (
              <button key={key} onClick={() => setSelectedTemplate(key)}
                className="w-full rounded-2xl border p-4 text-left transition overflow-hidden"
                style={{
                  borderColor: selectedTemplate === key ? 'var(--accent)' : 'var(--border)',
                  background: selectedTemplate === key ? 'var(--accent-soft)' : 'var(--bg-card)',
                }}>
                <p className="font-black" style={{ color: 'var(--text-primary)' }}>{label}</p>
                <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>Click to preview this template.</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
