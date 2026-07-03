"use client";
import toast from "react-hot-toast";

type Props = { url: string; title?: string };

export default function ShareButtons({ url, title = "Check out this verified giveaway result!" }: Props) {
  const eu = encodeURIComponent(url);
  const et = encodeURIComponent(title);
  const links = [
    { name: "X", href: `https://twitter.com/intent/tweet?url=${eu}&text=${et}` },
    { name: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${eu}` },
    { name: "WhatsApp", href: `https://wa.me/?text=${et}%20${eu}` },
    { name: "Telegram", href: `https://t.me/share/url?url=${eu}&text=${et}` },
    { name: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${eu}` },
    { name: "Reddit", href: `https://reddit.com/submit?url=${eu}&title=${et}` },
  ];

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    toast.success("Verification link copied!");
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map(item => (
        <a key={item.name} href={item.href} target="_blank" rel="noreferrer"
          className="h-11 px-4 rounded-xl flex items-center justify-center text-sm font-semibold transition"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
          {item.name}
        </a>
      ))}
      <button onClick={copyLink}
        className="h-11 px-4 rounded-xl font-black hover:scale-[1.02] transition"
        style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>
        Copy Link
      </button>
    </div>
  );
}
