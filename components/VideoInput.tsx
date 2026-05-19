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
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !loading) {
      onLoad();
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-3">

        <input
          type="url"
          inputMode="url"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          placeholder="YouTube video or YouTube Shorts URL..."
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          onKeyDown={handleKeyDown}
          className="
            flex-1
            min-h-[56px] h-14
            rounded-2xl
            bg-white/5
            border border-white/20
            px-5
            text-base text-white
            placeholder:text-zinc-500
            outline-none
            focus:border-lime-400
            focus:bg-white/8
            transition
            w-full
          "
        />

        <button
          onClick={onLoad}
          disabled={loading || !videoUrl.trim()}
          className="
            min-h-[56px] h-14
            px-8
            rounded-2xl
            bg-lime-400
            text-black text-base font-bold
            hover:scale-[1.02]
            active:scale-[0.98]
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
            w-full md:w-auto
          "
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
              Loading...
            </span>
          ) : (
            "Load Comments"
          )}
        </button>

      </div>
    </section>
  );
}