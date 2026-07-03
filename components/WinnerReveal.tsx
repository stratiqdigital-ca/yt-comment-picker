type Props = { revealing: boolean; revealName: string }

export default function WinnerReveal({ revealing, revealName }: Props) {
  if (!revealing) return null
  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl p-10 text-center" style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)' }}>
        <p className="uppercase tracking-[0.2em] text-sm" style={{ color: 'var(--text-secondary)' }}>Picking Winner</p>
        <h2 className="mt-6 text-4xl md:text-6xl font-black animate-pulse break-words" style={{ color: 'var(--accent-text)' }}>{revealName}</h2>
      </div>
    </section>
  )
}
