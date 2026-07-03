type Props = {
  title: string
  channelTitle: string
  thumbnailUrl: string
  totalComments: number
}

export default function VideoInfo({ title, channelTitle, thumbnailUrl, totalComments }: Props) {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-10">
      <div className="rounded-3xl p-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <img src={thumbnailUrl} alt={title} className="w-full md:w-40 rounded-xl" />
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{title}</h2>
            <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>{channelTitle}</p>
            <div className="mt-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: 'var(--accent-soft)', border: '1px solid var(--accent-border)', color: 'var(--accent-text)' }}>
              {totalComments.toLocaleString()} comments loaded
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
