"use client";

import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import ShareButtons from "./ShareButtons";

type Props = {
  draw: any;
};

export default function VerificationWinnerTemplates({ draw }: Props) {
  const [selectedTemplate, setSelectedTemplate] = useState("clean");
  const [selectedWinnerIndex, setSelectedWinnerIndex] = useState(0);
  const templateRef = useRef<HTMLDivElement | null>(null);

  const winners = draw.winners || [];
  const selectedWinner = winners[selectedWinnerIndex];

  if (!winners.length) return null;

  function initial(name: string) {
    return name?.replace("@", "").slice(0, 1).toUpperCase() || "W";
  }

  async function downloadTemplate() {
    if (!templateRef.current) return;

    const dataUrl = await toPng(templateRef.current, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: "#0B0F19",
    });

    const link = document.createElement("a");
    link.download = `yt-giveaway-${selectedTemplate}-${draw.verification_id}.png`;
    link.href = dataUrl;
    link.click();
  }

  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-4xl font-black">Winner Card Templates</h3>
          <p className="text-zinc-400 mt-2">
            Select a winner, choose a card style, then download or share.
          </p>
        </div>

        <button
          onClick={downloadTemplate}
          className="h-12 px-5 rounded-xl bg-lime-400 text-black font-black hover:scale-[1.02] transition"
        >
          Download Selected Card
        </button>
      </div>

      <div className="mb-6">
        <ShareButtons
          url={typeof window !== "undefined" ? window.location.href : ""}
          title={`Verified giveaway winners for ${draw.video_title}`}
        />
      </div>

      <div className="grid lg:grid-cols-[320px_1fr] gap-6">
        <aside className="rounded-3xl border border-white/10 bg-black/30 p-5">
          <h4 className="text-sm text-zinc-400 uppercase tracking-[0.18em] mb-4">
            Select Winner
          </h4>

          <div className="grid gap-3">
            {winners.map((winner: any, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedWinnerIndex(index)}
                className={`w-full rounded-2xl border p-4 text-left transition overflow-hidden ${
                  selectedWinnerIndex === index
                    ? "border-lime-400 bg-lime-400/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-lime-400 text-black flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div>
                    <p className="font-bold truncate max-w-[190px]">
  {winner.authorName}
</p>

<p className="text-xs text-zinc-500 line-clamp-1 max-w-[190px]">
  {winner.text}
</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <h4 className="text-sm text-zinc-400 uppercase tracking-[0.18em] mb-4">
              Draw Details
            </h4>

            <div className="grid gap-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-500">Valid Entries</span>
                <span className="text-lime-300">{draw.valid_entries}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Winners</span>
                <span>{winners.length}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Time Filter</span>
                <span>
                  {draw.settings?.timeWindowMinutes
                    ? `First ${draw.settings.timeWindowMinutes} min`
                    : "All time"}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Keyword</span>
                <span>{draw.settings?.keyword || "Not used"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Emoji</span>
                <span>{draw.settings?.emoji || "Not used"}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-zinc-500">Duplicates</span>
                <span>
                  {draw.settings?.removeDuplicates ? "Blocked" : "Allowed"}
                </span>
              </div>
            </div>
          </div>
        </aside>

        <div className="grid gap-6">
          <div
            ref={templateRef}
            className="rounded-3xl border border-white/10 bg-[#101827] p-8"
          >
            {selectedTemplate === "clean" && (
              <div className="text-center">
                <p className="text-lime-300 font-black uppercase tracking-[0.2em] text-sm">
                  YT Giveaway Picker
                </p>

                <h2 className="text-4xl font-black mt-4">
                  Winner Selected 🎉
                </h2>

                <div className="mt-8 mx-auto w-24 h-24 rounded-full bg-lime-400 text-black flex items-center justify-center font-black text-4xl">
                  {initial(selectedWinner.authorName)}
                </div>

                <p className="text-4xl font-black mt-5">
                  {selectedWinner.authorName}
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 max-w-xl mx-auto">
                  <p className="text-zinc-300 leading-relaxed">
                    “{selectedWinner.text}”
                  </p>
                </div>

                <p className="mt-8 text-lime-300 font-bold">
                  Picked from {draw.valid_entries} valid entries
                </p>

                <p className="mt-3 text-zinc-500 text-sm">
                  Verification ID: {draw.verification_id}
                </p>
              </div>
            )}

            {selectedTemplate === "story" && (
              <div className="mx-auto max-w-md min-h-[620px] rounded-[36px] bg-gradient-to-b from-purple-900 via-[#101827] to-black p-8 text-center border border-purple-400/30">
                <p className="text-3xl">🎉</p>

                <h2 className="text-4xl font-black mt-4">GIVEAWAY WINNER</h2>

                <div className="mt-10 mx-auto w-28 h-28 rounded-full bg-lime-400 text-black flex items-center justify-center font-black text-5xl">
                  {initial(selectedWinner.authorName)}
                </div>

                <div className="mt-8 rounded-2xl bg-white text-black p-4 max-w-full overflow-hidden">
                 <p className="text-2xl md:text-3xl font-black break-words leading-tight">
                    {selectedWinner.authorName}
                    </p>
                    </div>

                <p className="mt-8 text-zinc-200 leading-relaxed break-words line-clamp-5">
                     “{selectedWinner.text}”
                        </p>

                <p className="mt-10 text-lime-300 font-bold">
                  Verified from {draw.valid_entries} valid entries
                </p>

                <p className="mt-8 text-xs tracking-[0.3em] text-zinc-400">
                  YT GIVEAWAY PICKER
                </p>
              </div>
            )}

            {selectedTemplate === "multi" && (
              <div>
                <h2 className="text-4xl font-black text-center text-lime-300">
                  Winners Selected 🏆
                </h2>

                <div className="mt-8 grid gap-4">
                  {winners.map((winner: any, index: number) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-black/30 p-5 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-lime-400 text-black flex items-center justify-center font-black">
                        #{index + 1}
                      </div>

                      <div>
                        <p className="text-xl font-black">
                          {winner.authorName}
                        </p>
                        <p className="text-zinc-400 line-clamp-2">
                          {winner.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center mt-8 text-lime-300 font-bold">
                  Picked from {draw.valid_entries} valid entries
                </p>
              </div>
            )}

            {selectedTemplate === "certificate" && (
              <div className="rounded-3xl bg-[#F8F3E7] text-black p-10 text-center">
                <p className="text-sm tracking-[0.25em] font-black">
                  VERIFIED GIVEAWAY RESULT
                </p>

                <h2 className="text-5xl font-black mt-6">
                  Winner Certificate
                </h2>

                <div className="mt-8 border-y border-black/20 py-8">
                  <p className="text-sm uppercase text-black/50">Winner</p>

                  <p className="text-4xl font-black mt-2">
                    {selectedWinner.authorName}
                  </p>

                  <p className="mt-5 text-black/70">
                    “{selectedWinner.text}”
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <p className="text-xs text-black/50">Valid Entries</p>
                    <p className="font-black">{draw.valid_entries}</p>
                  </div>

                  <div>
                    <p className="text-xs text-black/50">Verification ID</p>
                    <p className="font-black">{draw.verification_id}</p>
                  </div>
                </div>

                <p className="mt-8 text-xs tracking-[0.2em]">
                  POWERED BY YT GIVEAWAY PICKER
                </p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              ["clean", "Clean Proof Card"],
              ["story", "Instagram Story Card"],
              ["multi", "Multi-Winner Card"],
              ["certificate", "Certificate Card"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedTemplate(key)}
                className={`w-full rounded-2xl border p-4 text-left transition overflow-hidden ${
                  selectedTemplate === key
                    ? "border-lime-400 bg-lime-400/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p className="font-black">{label}</p>
                <p className="text-xs text-zinc-500 mt-2">
                  Click to preview this template.
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}