type Props = { videoUrl: string; setVideoUrl: (v: string) => void; loading: boolean; onLoad: () => void }

export default function VideoInput({ videoUrl, setVideoUrl, loading, onLoad }: Props) {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="url" inputMode="url" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
          placeholder="YouTube video or YouTube Shorts URL..."
          value={videoUrl} onChange={e => setVideoUrl(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !loading) onLoad() }}
          className="flex-1 min-h-[56px] h-14 rounded-2xl px-5 text-base outline-none transition w-full"
          style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
        />
        <button onClick={onLoad} disabled={loading || !videoUrl.trim()}
          className="min-h-[56px] h-14 px-8 rounded-2xl text-base font-bold transition disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto hover:scale-[1.02] active:scale-[0.98]"
          style={{ background: 'var(--accent)', color: 'var(--accent-on)' }}>
          {loading ? 'Loading...' : 'Load Comments'}
        </button>
      </div>
    </section>
  )
}
