"use client";
import toast from "react-hot-toast";

type Props = { draw: any };

export default function HistoryActions({ draw }: Props) {
  async function copyWinners() {
    const text = draw.winners?.map((w: any, i: number) => `Winner #${i + 1}: ${w.authorName}\n${w.text}`).join("\n\n");
    await navigator.clipboard.writeText(text || "");
    toast.success("Winners copied successfully.");
  }

  return (
    <div className="flex flex-wrap gap-3">
      <a href={`/verify/${draw.verification_id}`} target="_blank"
        className="h-11 px-5 rounded-xl font-bold flex items-center"
        style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>
        Open Verification
      </a>
      <button onClick={copyWinners}
        className="h-11 px-5 rounded-xl font-semibold transition"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
        Copy Winners
      </button>
    </div>
  );
}
