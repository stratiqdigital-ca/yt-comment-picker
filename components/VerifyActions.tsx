"use client";

import { toPng } from "html-to-image";

type Props = {
  targetId: string;
  filename: string;
  label: string;
};

export default function VerifyActions({ targetId, filename, label }: Props) {
  async function downloadCard() {
    const element = document.getElementById(targetId);
    if (!element) return;

    const dataUrl = await toPng(element, {
      cacheBust: true,
      pixelRatio: 2,
      backgroundColor: "#0B0F19",
    });

    const link = document.createElement("a");
    link.download = filename;
    link.href = dataUrl;
    link.click();
  }

  return (
    <button
      onClick={downloadCard}
      className="h-11 px-5 rounded-xl bg-lime-400 text-black font-black hover:scale-[1.02] transition"
    >
      {label}
    </button>
  );
}