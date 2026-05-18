"use client";
import toast from "react-hot-toast";

type Props = {
  draw: any;
};

export default function HistoryActions({ draw }: Props) {
  async function copyWinners() {
    const text = draw.winners
      ?.map(
        (winner: any, index: number) =>
          `Winner #${index + 1}: ${winner.authorName}\n${winner.text}`
      )
      .join("\n\n");

    await navigator.clipboard.writeText(text || "");
    toast.success("Winners copied successfully.");
  }

  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={`/verify/${draw.verification_id}`}
        target="_blank"
        className="h-11 px-5 rounded-xl bg-lime-400 text-black font-bold flex items-center"
      >
        Open Verification
      </a>

      <button
        onClick={copyWinners}
        className="h-11 px-5 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
      >
        Copy Winners
      </button>
    </div>
  );
}