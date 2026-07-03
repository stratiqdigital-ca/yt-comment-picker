"use client";
import { toPng } from "html-to-image";

type Props = { targetId: string; filename: string; label: string };

export default function VerifyActions({ targetId, filename, label }: Props) {
  async function downloadCard() {
    const el = document.getElementById(targetId);
    if (!el) return;
    const dataUrl = await toPng(el, { cacheBust: true, pixelRatio: 2, backgroundColor: "#0B0F1A" });
    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  }

  return (
    <button onClick={downloadCard}
      className="h-11 px-5 rounded-xl font-black hover:scale-[1.02] transition"
      style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>
      {label}
    </button>
  );
}
