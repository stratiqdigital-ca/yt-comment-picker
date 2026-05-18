type Props = {
  label?: string;
};

export default function AdSlot({ label = "Advertisement" }: Props) {
  return (
    <div className="max-w-5xl mx-auto px-6 my-10">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 mb-3">
          {label}
        </p>

        <div className="h-28 rounded-2xl border border-dashed border-white/10 bg-black/20 flex items-center justify-center text-zinc-600 text-sm">
          AdSense placement
        </div>
      </div>
    </div>
  );
}