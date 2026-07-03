export default function LoadingScreen() {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl p-8 text-center" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
        <div className="mx-auto w-16 h-16 rounded-full animate-spin" style={{ border: '4px solid var(--accent-soft)', borderTopColor: 'var(--accent)' }} />
        <h3 className="text-3xl font-black mt-6" style={{ color: 'var(--text-primary)' }}>Loading YouTube Comments</h3>
        <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>Fetching comments, checking cache, and preparing your giveaway entries.</p>
      </div>
    </section>
  )
}
