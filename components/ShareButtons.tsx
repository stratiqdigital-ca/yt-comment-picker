"use client";
import toast from "react-hot-toast";

type Props = {
  url: string;
  title?: string;
};

export default function ShareButtons({
  url,
  title = "Check out this verified giveaway result!",
}: Props) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "Reddit",
      href: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    },
  ];

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    toast.success("Verification link copied!");
  }

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="h-11 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center text-sm font-semibold"
        >
          {item.name}
        </a>
      ))}

      <button
        onClick={copyLink}
        className="h-11 px-4 rounded-xl bg-lime-400 text-black font-black hover:scale-[1.02] transition"
      >
        Copy Link
      </button>
    </div>
  );
}