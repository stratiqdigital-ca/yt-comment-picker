type Props = {
  videoUrl: string;
  setVideoUrl: (value: string) => void;
  loading: boolean;
  onLoad: () => void;
};

export default function VideoInput({
  videoUrl,
  setVideoUrl,
  loading,
  onLoad,
}: Props) {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="YouTube video or YouTube Shorts URL..."
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          className="flex-1 h-14 rounded-2xl bg-white/5 border border-white/10 px-5 outline-none focus:border-lime-400"
        />

        <button
          onClick={onLoad}
          disabled={loading}
          className="h-14 px-8 rounded-2xl bg-lime-400 text-black font-semibold hover:scale-[1.02] transition disabled:opacity-50"
        >
          {loading ? "Loading..." : "Load Comments"}
        </button>
      </div>
    </section>
  );
}